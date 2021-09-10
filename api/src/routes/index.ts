import { Router }  from 'express';
import sensorRoutes from './sensorRoutes';
import sensorEventRoutes from './sensorEventsRoutes';

const router = Router();

router.use('/', sensorEventRoutes)
router.use('/', sensorRoutes);

export default router;