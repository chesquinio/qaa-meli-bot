import express from 'express';
import { redirectController } from '../controllers/auth/redirectController.js';

const router = express.Router();

router.get('/redirect', redirectController);

export default router;
