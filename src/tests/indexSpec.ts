import supertest from 'supertest';
import fs from 'fs';
import path from 'path';
import app from '..';
import checks from '../middlewares/checks';

const request = supertest(app);

describe('Test if Image Exist', () => {
    it('expect imageExist function defined', () => {
        expect(checks).toBeDefined();
    });

    it('expect imageExist function to return false with file name image_200_200.jpg', () => {
        const image = fs.existsSync(
            path.join(__dirname, '../../images/thumb/')
        );
        expect(image).toBe(false);
    });
});

describe('Test endpoint response', () => {
    // Get preview endpoint
    it('Get the api/images/preview endpoint', async () => {
        try {
            const response = await request.get('/api/preview?name=fjord');
            expect(response.status).toBe(200);
        } catch (error) {
            throw new Error(`Error Occured ${error}`);
        }
    });

    // Get resize endpoint
    it('Get the api/resize endpoint', async () => {
        try {
            const response = await request.get(
                '/api/resize?name=fjord&width=200&height=200'
            );
            expect(response.status).toBe(200);
        } catch (error) {
            throw new Error(`Error Occured ${error}`);
        }
    });

    /*
    const outputFile = path.join(__dirname, "../../images/thumb/");
    
    // Images Exists
    it('Images by second time properties should exist', async () => {
        try {
            const imageExists = fs.existsSync(`${outputFile}fjord_200_200.jpg`);
            expect(!imageExists).toBe(true);
        } catch (error) {
            console.log(`Error Occured ${error}`);
        }
    })

    it('Images by first time properties should not be exist', async () => {
        try {
            const imageExists = fs.existsSync(`${outputFile}fjord_200_200.jpg`);
            expect(imageExists).toBe(false);
        } catch (error) {
            console.log(`Error Occured ${error}`);
        }
    })
    */
});
