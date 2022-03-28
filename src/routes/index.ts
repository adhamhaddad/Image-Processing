import { Router } from 'express';
import routes from './api/routes';

const router = Router();

router.use('/api', routes);

export default router;
