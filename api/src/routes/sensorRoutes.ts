import {Router} from 'express';
import * as sensorController from '../controllers/sensorControllers';

const router = Router();

router.post('/sensor' , sensorController.createSensor);

router.get('/sensors', sensorController.getSensors);

router.put('/sensors/:id', sensorController.updateSensor);

router.delete('/sensors/:id', sensorController.deleteSensor);

export default router;