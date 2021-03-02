import mongoose from 'mongoose';
import Cache from '../models/model.js';
import { CACHE } from '../config.js';
import dotenv from 'dotenv';
dotenv.config();

export const connectMongoDb = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export const readCache = (city) => {
  let query = { name: city };
  const projection = { _id: 0, __v: 0, weather: { _id: 0 } };
  return Cache.findOne(query, projection).collation({
    locale: 'en',
    strength: 2
  });
};

export const updateCache = (data) => {
  data.expires = Date.now() + CACHE.EXPIRES; //add expiry timestamp
  return Cache.updateOne({ name: data.name }, data, { upsert: true });
};
