import axios from 'axios';
import * as config from '../config.js';

export const root = async (req, res) => {
  try {
    axios
      .get(`${config.URIS.OWM_API}?q=Espoo&appid=${config.SECRETS.OWM_API_KEY}`)
      .then((owmRes) => res.send(owmRes.data));
  } catch (error) {
    console.log(error.message);
  }
};
