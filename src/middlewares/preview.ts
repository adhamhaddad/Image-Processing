import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// I/O
const full = path.join(__dirname, '../../images/full/');

export default async function preview(req: Request, res: Response): Promise<void> {
    try {

        fs.readFile(`${full}${req.query.name}.jpg`, (error, image) => {
            if (error) {
                return res.status(400).send('Image name not exist. please read the documentation');
            } else {
                res.writeHead(200, {
                    'Content-Length': image.length,
                    'Content-Type': 'image/png',
                });
                return res.status(200).end(image);
            }
        });

    } catch (error) {
        throw new Error(`somthing went wrong. ${(error as Error).message}`);
    }
}
