import express from 'express';
import statusRoute from './routes/statusRoute.js';
import authRoute from './routes/authRoute.js';
import { connectDB } from './shared/db.js';

const app = express();

connectDB();

app.use(express.json());
app.use('/', statusRoute);
app.use('/auth', authRoute);

export default app;
