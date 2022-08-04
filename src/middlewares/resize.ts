import { Request, Response } from 'express';
import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import imageResizing from '../utils/image.resizing';
// I/O
const thumb = path.join(__dirname, '../../images/thumb/');

export default async function resize(req: Request, res: Response): Promise<void> {
    try {
        await imageResizing(req.query.name as string, req.query.width as string, req.query.height as string).then(() => {
            fs.readFile(`${thumb}${req.query.name}_${req.query.width}_${req.query.height}.jpg`, (error, image) => {
                if (error) {
                    throw new Error(`somthing went wrong. ${error.message}`);
                } else {
                    res.writeHead(200, {
                        'Content-Length': image.length,
                        'Content-Type': 'image/png',
                    });
                    return res.status(200).end(image);
                }
            });
        }).catch((error) => {
            res.status(401).json({
                status: 'Success',
                message: 'Failed to resize image 🙁️💔️, try again later ❤️',
                error: error.message
            });
        });
    } catch (error) {
        throw new Error(`somthing went wrong. ${(error as Error).message}`);
    }
}
