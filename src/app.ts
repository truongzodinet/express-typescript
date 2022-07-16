import express, { Express } from 'express';
import defaultMiddleware from './middlewares/index';
import defaultRouter from './routes';

const app: Express = express();

const hostname = 'localhost';
const port = process.env.PORT || 5000;

defaultMiddleware(app);
defaultRouter(app);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ limit: '1mb', extended: true }));
app.use(express.static(__dirname + '/public'));

app.listen(<number>port, hostname, () => {
    console.log(`⚡️[server]: Server is running at http://${hostname}:${port}/`);
});