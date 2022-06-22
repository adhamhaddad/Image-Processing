import { Request, Response } from 'express';
import sharp from 'sharp';
import fs, { promises as fsPromises } from 'fs';
import path from 'path';

// I/O
const full = path.join(__dirname, '../../images/full/');
const thumb = path.join(__dirname, '../../images/thumb/');

const makeDir = async () => {
    try {
        await fsPromises.mkdir(thumb);
    } catch (err) {
        console.log(`Folder Exist`);
    }
}

export default async function resize(req: Request, res: Response): Promise<void> {
    try {
        // Checks if folder thumb exist or not
        const checkThumb = fs.existsSync(thumb);
        if (!checkThumb) {
            makeDir();
        }

        await sharp(`${full}${req.query.name}.jpg`)
            .resize(parseInt(req.query.width as string), parseInt(req.query.height as string))
            .toFile(`${thumb}${req.query.name}_${req.query.width}_${req.query.height}.jpg`)
            .then(() => {
                fs.readFile(`${thumb}${req.query.name}_${req.query.width}_${req.query.height}.jpg`, (error, image) => {
                    if (error) {
                        throw new Error(`somthing went wrong. ${error}`);
                    } else {
                        res.writeHead(200, {
                            'Content-Length': image.length,
                            'Content-Type': 'image/png',
                        });
                        return res.status(200).end(image);
                    }
                });
            })
            .catch((error) => {
                res.status(401).json({
                    status: 'Success',
                    message: 'Failed to resize image 🙁️💔️, try again later ❤️',
                    error: error.message
                });
            });
    } catch (error) {
        throw new Error(`somthing went wrong. ${error}`);
    }
}
