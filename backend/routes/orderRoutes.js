import express from 'express';
const router = express.Router();

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
  assignDriverToOrder,
  getOrderByDriver,
  driverUpdateOrderToDelivered,
  driverUpdateOrderToFailed,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/driver').get(protect, getOrderByDriver);

router
  .route('/:id')
  .get(protect, getOrderById)
  .post(protect, admin, assignDriverToOrder);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);
router.route('/:id/driver/deliver').put(protect, driverUpdateOrderToDelivered);
router.route('/:id/driver/fail').put(protect, driverUpdateOrderToFailed);
export default router;
