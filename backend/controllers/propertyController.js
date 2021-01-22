import asyncHandler from 'express-async-handler';
import Property from '../models/propertyModel.js';
import User from '../models/userModel.js';

const getProperties = asyncHandler(async (req, res) => {
  const type = req.query.type
    ? {
        type: req.query.type,
      }
    : {};

  const furnished = req.query.furnished
    ? {
        furnished: req.query.furnished,
      }
    : {};

  const serviced = req.query.serviced
    ? {
        servicing: req.query.serviced,
      }
    : {};
  const bedroom = req.query.bedroom
    ? {
        room: req.query.bedroom,
      }
    : {};
  const category = req.query.category
    ? {
        category: req.query.category,
      }
    : {};
  const properties = await Property.find({
    ...type,
    ...furnished,
    ...bedroom,
    ...serviced,
    ...category,
  }).populate('user', 'id name');

  res.json(properties);
});

const getUserProperty = asyncHandler(async (req, res) => {
  const property = await Property.find({ user: req.user._id });
});

const getPropertyById = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.json({ message: 'property not found' });
  res.json(property);
});

const createProperty = asyncHandler(async (req, res) => {
  const {
    title,
    type,
    price,
    category,
    description,
    room,
    bathRoom,
    toilet,
    location,
    longitude,
    latitude,
    address,
    garage,
  } = req.body;
  const property = new Property({
    user: req.user._id,
    title,
    type,
    image: ['/images/house.jpg'],
    price,
    category,
    description,
    room,
    bathRoom,
    toilet,
    location,
    longitude,
    latitude,
    address,
    hasGarage: garage,
  });
  const createdProperty = await property.save();
  res.json(createdProperty);
});

const updateProperty = asyncHandler(async (req, res) => {});

const deleteProperty = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const property = await Property.findById(req.params.id);
  if (!property) return res.json({ message: 'property not found' });
  if (property.user.toString() === user._id.toString() || user.isAdmin) {
    await property.deleteOne();
    return res.json({ success: true });
  } else {
    return res.status(401).json({ message: 'not authorized' });
  }
});
export {
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty,
  getPropertyById,
};
