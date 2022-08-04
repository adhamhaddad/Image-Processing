import sharp from 'sharp';
import path from 'path';
import fs, { promises as fsPromises } from 'fs';

const full = path.join(__dirname, '../../images/full/');
const thumb = path.join(__dirname, '../../images/thumb/');

const makeDir = async () => {
    try {
        await fsPromises.mkdir(thumb);
    } catch (error) {
        console.log(`Could not create directory Error. ${(error as Error).message}`);
    }
}

async function imageResizing(name: string, width: string, height: string): Promise<void> {
    try {
        // Checks if folder thumb exist or not
        fs.access(thumb, (error) => {
            if (error) {
                makeDir();
            }
        });
        await sharp(`${full}${name}.jpg`)
        .resize(Number(width), Number(height))
        .toFile(`${thumb}${name}_${width}_${height}.jpg`)
    } catch (error) {
        throw new Error(`Error. ${(error as Error).message}`);
    }

}

export default imageResizing;