import {Router} from 'express';
import validate from '../middlewares/validate';
import checks from '../middlewares/checks';
import resize from '../middlewares/resize';

const router = Router();
const middlewares = [validate, checks, resize];

router.get('/', middlewares);

export default router;