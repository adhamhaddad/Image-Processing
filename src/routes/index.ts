import { Router } from 'express';
import routes from './api/routes';

const router = Router();

router.use('/images', routes);

export default router;
