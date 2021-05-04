import mongoose from 'mongoose';

const referralSchema = mongoose.Schema({
  referrerUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  referredUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Referral = mongoose.model('Referral', referralSchema);

export default Referral;
