import asyncHandler from 'express-async-handler';
import Property from '../models/propertyModel.js';

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
  });

  res.json(properties);
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
  });
  const createdProperty = await property.save();
  res.json(createdProperty);
});
export { getProperties, createProperty };
