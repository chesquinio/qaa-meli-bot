import express from 'express';
import statusRoute from './routes/statusRoute.js';

const app = express();

app.use(express.json());
app.use('/api', statusRoute);

export default app;
