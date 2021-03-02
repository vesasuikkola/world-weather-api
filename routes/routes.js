import express from 'express';
import * as controllers from '../controllers/controllers.js';
import isAuthorized from '../services/requestAuthenticator.js';

const router = express.Router();

router.get('/:city', isAuthorized, controllers.getWeatherForCity);
router.get('/', controllers.usage);

export default router;
