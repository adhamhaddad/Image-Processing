import { Request, Response } from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// I/O
const originalFolder = path.join(__dirname, '../../images/full/');

export default async function resize(
  req: Request,
  res: Response
): Promise<unknown> {
  try {
    // Checks if folder thumb exist or not
    const thumbnails = path.join(__dirname, '../../images/thumb/');

    if (!fs.existsSync(thumbnails)) {
      // Make thumbnails Directory
      fs.mkdir(path.join(__dirname, '../../images/thumb'), (error) => {
        if (error) {
          console.log('error', error);
        } else {
          console.log(thumbnails, 'Folder Created Successfuly');
        }
      });
    }

    const resizeImage = await sharp(`${originalFolder}${req.query.name}.jpg`)
      .resize(
        parseInt(req.query.width as string),
        parseInt(req.query.height as string)
      )
      .toFile(
        `${thumbnails}${req.query.name}_${req.query.width}_${req.query.height}.jpg`
      )
      .then(() => {
        fs.readFile(
          `${thumbnails}${req.query.name}_${req.query.width}_${req.query.height}.jpg`,
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
        throw new Error(`Error ${error.message}`);
      });
    return resizeImage;
  } catch (error) {
    throw new Error(`somthing went wrong. ${error}`);
  }
}
