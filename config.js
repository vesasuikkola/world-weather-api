import dotenv from 'dotenv';
dotenv.config();

export const SECRETS = {
  AUTH_SECRET: process.env.AUTH_SECRET,
  OWM_API_KEY: process.env.OWM_API_KEY
};

export const URIS = {
  HOST: process.env.HOST || 'http://localhost',
  PORT: process.env.PORT || 4003,
  API_PATH: process.env.API_PATH || '/weather',
  MONGODB_URI: process.env.MONGODB_URI,
  OWM_API:
    process.env.OWM_API || 'http://api.openweathermap.org/data/2.5/weather'
};

export const CACHE = {
  EXPIRES: 600000 // i.e. 10 min
};

export const DEBUG = process.env.DEBUG || false;
