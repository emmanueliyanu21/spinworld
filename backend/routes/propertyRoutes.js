import express from 'express';
const router = express.Router();
import {
  getProperties,
  createProperty,
  deleteProperty,
  getPropertyById,
} from '../controllers/propertyController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(getProperties).post(protect, createProperty);
router.route('/:id').delete(protect, deleteProperty).get(getPropertyById);

export default router;
