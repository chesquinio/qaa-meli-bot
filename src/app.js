import express from 'express';
import statusRoute from './routes/statusRoute.js';
import { connectDB } from './shared/db.js';

const app = express();

connectDB();

app.use(express.json());
app.use('/api', statusRoute);

export default app;
