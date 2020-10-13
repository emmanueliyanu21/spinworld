import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// @desc Fetch all products
// @route GET /api/products
// @access Fetch all products

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

// @desc Fetch single products
// @route GET /api/products
// @access pbulic

export default router;
