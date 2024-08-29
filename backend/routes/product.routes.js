const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/product.controllers");

const productRouter = Router();

// Create a new product (vendor only)
productRouter.post(
  "/create",
  authentication,
  authorization("vendor"),
  createProduct
);

// Get a specific product (public)
productRouter.get("/:productId", getProduct);

// Get all products (public)
productRouter.get("/all", getAllProducts);

// Update a product (vendor only)
productRouter.put(
  "/update/:productId",
  authentication,
  authorization("vendor"),
  updateProduct
);

// Delete a product (vendor only)
productRouter.delete(
  "/delete/:productId",
  authentication,
  authorization("vendor"),
  deleteProduct
);

module.exports = { productRouter };
