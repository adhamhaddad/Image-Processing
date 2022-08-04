import { Request, Response, NextFunction } from 'express';
import { port } from '../index';

function logger(req: Request, _res: Response, next: NextFunction): void {
    console.log(`Method: ${req.method} - ${req.protocol}://${req.hostname}:${port}${req.originalUrl}`);
    next();
}

export default logger;