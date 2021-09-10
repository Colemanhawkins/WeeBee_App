import {Router} from 'express';
import * as sensorController from '../controllers/sensor';

const router = Router();

router.post('/sensor' , sensorController.createSensor);

export default router;