import express, {Application, Request, Response} from 'express';
import router from './routes/index';
import morgan from 'morgan'

// API Link: http://localhost:3000/api/images/preview?name=fjord
// API Link: http://localhost:8000/api/images/resize?name=fjord&width=200&height=300
const app: Application = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(morgan('short'));

app.use("/api", router);

// Test Env
/*
import path from 'path';
import fs from 'fs';


app.use(express.static('public'))

app.get('/test', (req: Request, res: Response) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

app.get('/testt', (req: Request, res: Response) => {
    const request = req.body.image;
    const imageFile = fs.readFile(path.join(`${__dirname}/../images/full/fjord.jpg`), (error, image) => {
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
});
*/
// End Test

// express server
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
export default app;