import express from 'express';
const router = express.Router();
import {
  getProperties,
  createProperty,
  deleteProperty,
} from '../controllers/propertyController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(getProperties).post(protect, createProperty);
router.route('/:id').delete(protect, deleteProperty);

export default router;
