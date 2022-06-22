import express, { Application } from 'express';
import helmet from 'helmet';
import handler from './routes/handler';

// Express App
const app: Application = express();
const port: number = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());

// Requests
app.use("/", handler);

// Express Server
app.listen(port, (): void => console.log(`Server Litening on http://localhost:${port}`));
export default app;