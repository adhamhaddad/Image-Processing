import { Router } from 'express';
import routes from './api/routes';
import logger from '../middlewares/logger';

const handler = Router();

handler.use('/api', logger, routes);

export default handler;