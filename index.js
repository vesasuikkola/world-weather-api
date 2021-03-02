import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { URIS } from './config.js';
import { connectMongoDb } from './services/dbService.js';
import routes from './routes/routes.js';

dotenv.config();

const app = express();
app.use(cors());

app.use(URIS.API_PATH, routes);

app.listen(URIS.PORT, () =>
  console.log(`World API running on ${URIS.HOST}:${URIS.PORT}`)
);
