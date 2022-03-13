import supertest from 'supertest';
import fs from 'fs';
import path from 'path';
import app from '../app';
import checks from '../middlewares/checks';

const request = supertest(app);

describe("Test if Image Exist", () => {
    it('expect checkIfImageExist function defined', async () => {
        try {
            expect(checks).toBeDefined();
        } catch (error) {
            throw new Error(`Error Occured ${error}`)
        }
    });

    it('expect checkIfImageExist function to return false with file name image_200_200.jpg', () => {
        let image = fs.existsSync(path.join(__dirname, "../../images/thumb/"));
        expect(image).toBe(false);
    });

});

describe('Test endpoint response', () => {
    // Get preview endpoint
    it('Get the api/images/preview endpoint', async () => {
        try {
            let response = await request.get('/api/images/preview?name=fjord');
            expect(response.status).toBe(200);
        } catch (error) {
            throw new Error(`Error Occured ${error}`);
        }
    });

    // Get resize endpoint
    it("Get the api/images/resize endpoint", async () => {
        try {
            let response = await request.get('/api/images/resize?name=fjord&width=200&height=200');
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
            expect(!imageExists).toBe(false);
        } catch (error) {
            console.log(`Error Occured ${error}`);
        }
    })

    it("Expect transform to not throw error", async () => {
        const imageExists = fs.existsSync(`${outputFile}fjord_200_200.jpg`);

        expect(!imageExists).toBe(false);
    });
    it("Expect transform to throw specific error", async () => {
        const imageExists = fs.existsSync(`${outputFile}fjord_200_200.jpg`);

        expect(imageExists).toBe(true);
    });
    */
});