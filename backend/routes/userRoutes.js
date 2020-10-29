import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUser
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.route("/").post(registerUser).get(protect, getUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
