import {Request, Response, NextFunction} from 'express';

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    throw new Error(`Somthing went wrong! : ${error.message}`)
}