import express from 'express';
const router = express.Router();
import { getReferrals } from '../controllers/referralController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(protect, getReferrals);

export default router;
