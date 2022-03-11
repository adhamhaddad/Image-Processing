import supertest from 'supertest';
import fs from 'fs';
import path from 'path';
import resize from '../middlewares/resize';
import app from '../app';

const request = supertest(app);

describe("Test endpoint response", () => {
    xit('checks if image exists', async () => {
        try {
            let outputFile = await fs.existsSync(path.join(__dirname, "../../images/thumb/"));
            expect(outputFile).toBe(true);
        } catch (err) {
            throw new Error(`Error Occured ${err}`)
        }
    });

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