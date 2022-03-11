import {Request, Response} from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// I/O
const inputFile = path.join(__dirname, "../../images/full/");
const outputFile = path.join(__dirname, "../../images/thumb/");

export default async function resize(req: Request, res: Response): Promise<unknown> {
    try {
        const resizeImage = await sharp(`${inputFile}${req.query.name}.jpg`)
        .resize(parseInt(req.query.width as string), parseInt(req.query.height as string))
        .toFile(outputFile + `${req.query.name}_${req.query.width}_${req.query.height}.jpg`)
        .then(() => {
            const openImage =  fs.readFileSync(`${outputFile}${req.query.name}_${req.query.width}_${req.query.height}.jpg`);
            res.writeHead(200, {
                'Content-Length': openImage.length,
                'Content-Type': 'image/png',
            });
            return res.status(200).end(openImage);
        })
        .catch((error) => {
            throw new Error(`Error ${error.message}`);
        });
        return resizeImage;
    } catch (err) {
        throw new Error(`somthing went wrong. ${err}`);
    }
}