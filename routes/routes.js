import express from 'express';
import * as controllers from '../controllers/controllers.js';
//import isAuthorized from '../services/requestAuthenticator.js';

const router = express.Router();

router.get('/:city', controllers.getWeatherForCity);
router.get('/', controllers.usage);
//router.get('/', isAuthorized, controllers.root);

export default router;
