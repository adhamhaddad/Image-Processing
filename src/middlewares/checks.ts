import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

// I/O
const thumb = path.join(__dirname, '../../images/thumb/');

export default async function checks(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        // Checks if the image exists
        const imageExist = fs.existsSync(`${thumb}${req.query.name}_${req.query.width}_${req.query.height}.jpg`);

        if (imageExist) {
            fs.readFile(`${thumb}${req.query.name}_${req.query.width}_${req.query.height}.jpg`, (error, image) => {
                if (error) {
                    console.log(`Error Occured ${error.message}`);
                } else {
                    res.writeHead(200, {
                        'Content-Length': image.length,
                        'Content-Type': 'image/png',
                    });
                    return res.status(200).end(image);
                }
            });
        } else {
            next();
        }
    } catch (error) {
        throw new Error(`somthing went wrong. ${(error as Error).message}`);
    }
}
