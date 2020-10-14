import express from "express";
const router = express.Router();
import { authUser, getUserProfile, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
