import dotenv from 'dotenv';
dotenv.config();

export const { PORT, MONGODB_URI, MELI_APP_ID, MELI_CLIENT_SECRET, MELI_REDIRECT_URL } = process.env;
