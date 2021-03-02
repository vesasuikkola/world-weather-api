import { readCache, updateCache } from '../services/dbService.js';
import * as owmService from '../services/owmService.js';

export const usage = async (req, res) => {
  try {
    res.status(200).send('Hello from World Weather API');
  } catch (error) {
    console.log(error.message);
  }
};

export const getWeatherForCity = async (req, res) => {
  try {
    const city = req.params.city;

    // Try to get the data from the mongodb cache
    const dataInCache = await readCache(city);
    if (dataInCache && dataInCache.expires > Date.now())
      return res.send(dataInCache);

    // Otherwise get the data from OWM and update the cache
    const owmData = await owmService.fetchOwmData(city);
    await updateCache(owmData);
    return res.send(owmData);
  } catch (error) {
    res.status(500).send(error);
  }
};
