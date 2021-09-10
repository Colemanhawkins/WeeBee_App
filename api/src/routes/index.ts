import { Router }  from 'express';
import sensorRoutes from './sensor';

const router = Router();

router.use('/', sensorRoutes);

export default router;