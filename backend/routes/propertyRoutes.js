import express from 'express';
const router = express.Router();
import {
  getProperties,
  createProperty,
} from '../controllers/propertyController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(getProperties).post(protect, createProperty);

export default router;
