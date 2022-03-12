import supertest from 'supertest';
import {Request, Response, NextFunction} from 'express';
import fs from 'fs';
import path from 'path';
import resize from '../middlewares/resize';
import app from '../app';

const request = supertest(app);

describe("Test endpoint response", () => {
    it('checks if image exists', async () => {
        try {
            let outputFile = await fs.existsSync(path.join(__dirname, "../../images/thumb/"));
            expect(outputFile).toBe(true);
        } catch (error) {
            throw new Error(`Error Occured ${error}`)
        }
    });

    it('checks if image not exist and return with false', async () => {
        try {
            let image = await fs.existsSync(path.join(__dirname, "../../images/thumb/"));
            expect(image).toBe(false);
        } catch (error) {
            throw new Error(`Error Occudred ${error}`)
        }
    })

    it("gets the resize/images endpoint", async () => {
        let response = await request.get('/resize');
        expect(response.status).toBe(200);
    });
    xit("gets the api/images endpoint", () => {
    });
});
/*
describe("Image transform function should solve or reject", async () => {
    const outputFile = await path.join(__dirname, "../../images/thumb/");

    it("Expect transform to not throw error", async () => {
        const imageExists = fs.existsSync(`${outputFile}${req.query.name}_${req.query.width}_${req.query.height}.jpg`);

        expect(!imageExists).toBe(false);
    });
    it("Expect transform to throw specific error", async () => {
        const imageExists = fs.existsSync(`${outputFile}${req.query.name}_${req.query.width}_${req.query.height}.jpg`);

        expect(imageExists).toBe(true);
    });

});
*/