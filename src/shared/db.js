import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Atlas conectado');
  } catch (error) {
    console.error('Error conectando a MongoDB Atlas:', error);
    process.exit(1);
  }
};
