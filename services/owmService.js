import * as config from '../config.js';
import apiAdapter from '../services/apiAdapter.js';

const api = apiAdapter(config.URIS.OWM_API);

export const fetchOwmData = async (city) => {
  if (config.DEBUG)
    console.log(
      'DEBUG :',
      new Date(Date.now()).toISOString(),
      ': calling OWM-API for',
      city
    );
    
  const { data } = await api.get(
    `?q=${city}&appid=${config.SECRETS.OWM_API_KEY}`
  );
  return data;
};
