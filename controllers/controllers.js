import axios from 'axios';
import * as config from '../config.js';
import { readCache, updateCache } from '../services/dbService.js';

export const usage = async (req, res) => {
  try {
    res.status(200).send('Hello from World Weather API');
  } catch (error) {
    console.log(error.message);
  }
};

export const getWeatherForCity = async (req, res) => {
  try {
    const dataInCache = (await readCache(req.params.city))[0];

    if (dataInCache && dataInCache.expires > Date.now())
      return res.send(dataInCache);

    const { data } = await axios.get(
      `${config.URIS.OWM_API}?q=${req.params.city}&appid=${config.SECRETS.OWM_API_KEY}`
    );
    const update = await updateCache(data);

    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
