import {Router} from 'express';
import * as sensorEventController from '../controllers/sensorEventControllers';

const router = Router();

router.get('/sensorEvents/:id', sensorEventController.getSensorEvents);

router.post('/sensorEvents/:id', sensorEventController.createSensorEvent);

export default router;