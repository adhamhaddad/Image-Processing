import { Request, Response } from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// I/O
const full = path.join(__dirname, '../../images/full/');

export default async function resize(req: Request, res: Response): Promise<void> {
    try {
        // Checks if folder thumb exist or not
        // const thumb = path.join(__dirname, '../../images/thumb/');
        const thumb = path.join(__dirname, '../../images/');


        fs.stat(`${thumb}`, (err, stats) => {
            if (err) {
                throw err;
            }
            console.log(stats.isDirectory());
        })





        /*
        if (!fs.existsSync(thumb)) {
            // Make thumbnails Directory
            fs.mkdir(thumb, (error) => {
                if (error) {
                    console.log('error', error);
                } else {
                    console.log(thumb, 'Folder Created Successfuly');
                }
            });
        }
        */




        const resizeImage = await sharp(`${full}${req.query.name}.jpg`)
            .resize(
                parseInt(req.query.width as string),
                parseInt(req.query.height as string)
            )
            .toFile(
                `${thumb}${req.query.name}_${req.query.width}_${req.query.height}.jpg`
            )
            .then(() => {
                fs.readFile(
                    `${thumb}${req.query.name}_${req.query.width}_${req.query.height}.jpg`,
                    (error, image) => {
                        if (error) {
                            throw new Error(`somthing went wrong. ${error}`);
                        } else {
                            res.writeHead(200, {
                                'Content-Length': image.length,
                                'Content-Type': 'image/png',
                            });
                            return res.status(200).end(image);
                        }
                    }
                );
            })
            .catch((error) => {
                res.status(401).json({
                    status: 'Success',
                    message: 'Failed to resize image 🙁️💔️',
                    error: error.message
                });
            });
        return resizeImage;
    } catch (error) {
        throw new Error(`somthing went wrong. ${error}`);
    }
}
