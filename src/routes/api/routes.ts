import { Router } from "express";
import validate from '../../middlewares/validate';
import checks from '../../middlewares/checks';
import resize from '../../middlewares/resize';
import preview from '../../middlewares/preview';

const routes = Router();

// Middlewares
const middlewares = [validate, checks, resize];

routes.get('/preview', preview);
routes.get('/resize', middlewares);

export default routes;