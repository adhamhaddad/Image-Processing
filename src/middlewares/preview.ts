import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// I/O
const originalFolder = path.join(__dirname, '../../images/full/');

export default async function preview(
    req: Request,
    res: Response
): Promise<unknown> {
    try {
        // checks if the image exists
        const imageExists = fs.existsSync(
            `${originalFolder}${req.query.name}.jpg`
        );

        // check if image name are exist in images/full folder
        if (imageExists) {
            const imageFile = fs.readFile(
                `${originalFolder}${req.query.name}.jpg`,
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
            return imageFile;
        } else {
            return res
                .status(400)
                .send('Image name not exist. please read the documentation');
        }
    } catch (error) {
        throw new Error(`somthing went wrong. ${error}`);
    }
}
