import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import OrderTracking from '../models/orderTrackingModel.js';

// @desc Create new order
// @route POST /api/orders
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No Order placed yet');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc GET Order By ID
// @route get /api/orders/:id
// @access Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('order not found');
  }
});

// @desc Update Order to paid
// @route get /api/orders/:id/pay
// @access Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('order not found');
  }
});

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Get logged in user orders
// @route get /api/orders/myorders
// @access Private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
});

const assignDriverToOrder = asyncHandler(async (req, res) => {
  const { driver } = req.body;
  const { id } = req.params;
  const order = await Order.findById(id);
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  const newOrderTracking = await OrderTracking.create({
    order: order.id,
    driver: driver,
  });
  res.json(newOrderTracking);
});

const getOrderByDriver = asyncHandler(async (req, res) => {
  const order = await OrderTracking.find({ driver: req.user._id }).populate({
    path: 'order',
    populate: {
      path: 'user',
    },
  });

  if (order.length === 0) {
    res.status(404);
    throw new Error('you have not been assign any order');
  }
  res.json(order);
});

const driverUpdateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await OrderTracking.findById(req.params.id);
  if (req.user._id.toString() !== order.driver.toString()) {
    res.status(401);
    throw new Error('you are not authorized to perform this action');
  }
  if (order) {
    order.orderStatus = 'Delivered';
    order.time = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
const driverUpdateOrderToFailed = asyncHandler(async (req, res) => {
  const order = await OrderTracking.findById(req.params.id);

  if (order) {
    order.orderStatus = 'Failed';
    order.time = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

export {
  driverUpdateOrderToDelivered,
  getOrderByDriver,
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
  assignDriverToOrder,
  driverUpdateOrderToFailed,
};
