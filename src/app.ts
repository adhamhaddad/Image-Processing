import express, {Application} from 'express';
import router from './routes/index';
import morgan from 'morgan'

// API Link: http://localhost:8000/resize?name=fjord&width=200&height=300
const app: Application = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(morgan('short'));

// route
app.use("/resize", router);

// express server
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
export default app;