import {Request, Response, NextFunction} from 'express';
import fs from 'fs';
import path from 'path';

// I/O
const thumbnails = path.join(__dirname, "../../images/thumb/");

export default async function checks (req: Request, res: Response, next: NextFunction): Promise<unknown> {
    try {
        // Checks if the image exists
        const imageExist = fs.existsSync(`${thumbnails}${req.query.name}_${req.query.width}_${req.query.height}.jpg`);

        // If the image does not exist
        if (imageExist) {
            // Open Image
            const imageFile = fs.readFile(`${thumbnails}${req.query.name}_${req.query.width}_${req.query.height}.jpg`, (error, image) => {
                if (error) {
                    console.log(`Error Occured ${error}`);
                } else {
                    res.writeHead(200, {
                        'Content-Length': image.length,
                        'Content-Type': 'image/png',
                    });
                    return res.status(200).end(image);
                }
            });
            return imageFile;
        } else {
            next();
        }

    } catch (error) {
        throw new Error(`somthing went wrong. ${error}`);
    }
}