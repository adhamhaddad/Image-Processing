import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './routes/index';

const app: Application = express();
const port: number = 3000;


// Middlewares
app.use(express.json());
app.use(morgan('short'));
app.use(helmet());


// Requests
app.use("/", router);


// Express Server
app.listen(port, (): void => {
    console.log(`Server Litening on http://localhost:${port}`);
});
export default app;