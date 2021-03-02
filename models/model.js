import mongoose from 'mongoose';

const cacheSchema = new mongoose.Schema({
  coord: {
    lon: Number,
    lat: Number
  },
  weather: [
    {
      id: Number,
      main: String,
      description: String,
      icon: String
    }
  ],
  base: String,
  main: {
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
    sea_level: Number,
    grnd_level: Number
  },
  visibility: Number,
  wind: {
    speed: Number,
    deg: Number,
    gust: Number
  },
  clouds: {
    all: Number
  },
  rain: {
    '1h': Number,
    '3h': Number
  },
  snow: {
    '1h': Number,
    '3h': Number
  },
  dt: Number,
  sys: {
    country: String,
    sunrise: Number,
    sunset: Number
  },
  timezone: Number,
  id: Number,
  name: String,
  expires: Number
});

const Cache = mongoose.model('Cache', cacheSchema, 'cache');

export default Cache;
