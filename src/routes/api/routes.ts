import { Router } from "express";
import validate from '../../middlewares/validate';
import checks from '../../middlewares/checks';
import resize from '../../middlewares/resize';
import preview from '../../middlewares/preview';

const routes = Router();

// Middlewares
const middlewares = [validate, checks, resize];

// http:localhost:3000/api/images/preview?name=fjord
routes.get('/preview', preview);

// http:localhost:3000/api/images/resize?name=fjord&width=200&height=200
routes.get('/resize', middlewares);

export default routes;