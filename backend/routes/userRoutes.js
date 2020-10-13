import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";

// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.post("/login", authUser);


export default router;
