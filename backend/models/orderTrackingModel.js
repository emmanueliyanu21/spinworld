import mongoose from 'mongoose';

const orderTrackingSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Order',
    },
    status: {
      type: Boolean,
    },
    orderStatus: {
      type: String,
      enum: ['Delivered', 'Ongoing', 'Failed'],
      default: 'Ongoing',
    },
    time: {
      type: Date,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const OrderTracking = mongoose.model('OrderTracking', orderTrackingSchema);

export default OrderTracking;
