import supertest from 'supertest';
import path from 'path';
import app from '..';
import imageResizing from '../utils/image.resizing';

const request = supertest(app);

describe('Test imageResizing function', () => {
    it('expect imageResizing function to be defined', () => {
        expect(imageResizing).toBeDefined();
    });

    it('expect imageResizing function to resize fjord image with 230 x 230', () => {
        expect(async () => {
            try {
                await imageResizing('fjord', '230', '230')
            } catch (error) {
                throw new Error(`Error Occured. ${(error as Error).message}`);
            }
        }).not.toThrow();
    });
});

describe('Test endpoint response', () => {
    // Get resize endpoint
    it('Get the api/resize endpoint', async () => {
        try {
            const response = await request.get('/api/resize?name=fjord&width=200&height=200');
            expect(response.status).toBe(200);
        } catch (err) {
            throw new Error(`Error Occured ${(err as Error).message}`);
        }
    });

    // Get preview endpoint
    it('Get the api/preview endpoint', async () => {
        try {
            const response = await request.get('/api/preview?name=fjord');
            expect(response.status).toBe(200);
        } catch (err) {
            throw new Error(`Error Occured ${(err as Error).message}`);
        }
    });
});
