import { Request, Response, NextFunction } from 'express';
function logger(req: Request, _res: Response, next: NextFunction): void {
    console.log(`Request: ${req.method} ${req.baseUrl}${req.path} Logged`);
    next();
}

export default logger;