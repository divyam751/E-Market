const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
} = require("../controllers/cart.controllers");

const cartRouter = Router();

// Add a product to the cart
cartRouter.post("/add", authentication, addToCart);

// Get the user's cart
cartRouter.get("/", authentication, getCart);

// Update a cart item
cartRouter.put("/update/:productId", authentication, updateCartItem);

// Remove a cart item
cartRouter.delete("/remove/:productId", authentication, removeCartItem);

module.exports = { cartRouter };
