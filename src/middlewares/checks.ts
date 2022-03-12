import {Request, Response, NextFunction} from 'express';
import fs from 'fs';
import path from 'path';

export default async function checks (req: Request, res: Response, next: NextFunction): Promise<unknown> {
    try {
        // Make thumb Directory Function
        const makeDir = async (): Promise<void> => {
            try {
                fs.mkdir(path.join(__dirname, '../../images/thumb'), (err) => {
                    if (err) {
                        return console.error(err);
                    }
                });
            } catch (err) {
                console.log(err)
            }
        }

        // Checks if folder thumb exist or not
        const outputFile = path.join(__dirname, "../../images/thumb/");

        const thumbExists: unknown = fs.existsSync(outputFile);
        if (!thumbExists) {
            makeDir();
        }

        // Checks if the image exists
        const imageExists = fs.existsSync(`${outputFile}${req.query.name}_${req.query.width}_${req.query.height}.jpg`);
        
        // If the image does not exist
        if (!imageExists) {
            next();
        } else {
            const openImage = fs.readFileSync(`${outputFile}${req.query.name}_${req.query.width}_${req.query.height}.jpg`);
            res.writeHead(200, {
                'Content-Length': openImage.length,
                'Content-Type': 'image/png',
            });
            return res.status(200).end(openImage);
        }
    } catch (error) {
        throw new Error(`somthing went wrong. ${error}`);
    }
}