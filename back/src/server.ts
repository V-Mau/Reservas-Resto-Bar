// * Paso 1 = Server
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/indexRoute';
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/', indexRoute);




export default app;