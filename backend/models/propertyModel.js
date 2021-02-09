import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    type: {
      type: String,
      required: true,
      enum: ['land', 'flat', 'house', 'event center'],
    },
    image: {
      type: [String],
    },

    price: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['rent', 'sale', 'short let'],
    },
    room: {
      type: Number,
    },
    bathRoom: {
      type: Number,
    },

    toilet: {
      type: Number,
    },
    furnished: {
      type: Boolean,
      default: false,
    },
    servicing: {
      type: Boolean,
      default: false,
    },
    hasGarage: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const property = mongoose.model('Property', propertySchema);
export default property;
