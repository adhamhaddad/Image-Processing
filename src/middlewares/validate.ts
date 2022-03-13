import {Request, Response, NextFunction} from 'express';
import fs from 'fs';
import path from 'path';
import valid from "validator";

// I/O
const originalFolder = path.join(__dirname, "../../images/full/");

export default async function validate (req: Request, res: Response, next: NextFunction): Promise<unknown> {
    try {
        const name = req.query.name as string;
        const width = req.query.width as string;
        const height = req.query.height as string;

        // validate inputs
        if (!fs.existsSync(`${originalFolder}${name}.jpg`)) {
            if (valid.isEmpty(name)) {
                return res.status(400).send("image name are not defined in query")
            }
            return res.status(400).send("image name not defined in images folder");
        }
        if (valid.isEmpty(width)) {
            return res.status(400).send("image width are not defined in query");
        }
        if (valid.isEmpty(height)) {
            return res.status(400).send("image height are not defined in query");
        }
        next();
    } catch (error) {
        throw new Error(`somthing wrong. ${error}`);
    }
};