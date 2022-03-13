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

// express server
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
export default app;