import asyncHandler from 'express-async-handler';
import Referral from '../models/referralModel.js';
// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
const getReferrals = asyncHandler(async (req, res) => {
  const referrals = await Referral.find({
    referrerUserId: req.user._id,
  }).populate('referredUserId', 'id name');

  if (referrals.length === 0) {
    res.status(200);
    throw new Error('you have not referred anybody');
  } else {
    res.json(referrals);
  }
});

export { getReferrals };
