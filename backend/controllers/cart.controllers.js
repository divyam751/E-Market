const { Cart } = require("../models/cart.models");
const { Product } = require("../models/product.models");

// Add a product to the cart
const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send({ message: "Product not found." });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

    const existingProductIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingProductIndex >= 0) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();

    res.status(200).send({ message: "Product added to cart.", cart });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res
      .status(500)
      .send({ message: "Failed to add to cart. Please try again." });
  }
};

// Get the user's cart
const getCart = async (req, res) => {
  const userId = req.user._id;

  try {
    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );

    if (!cart) {
      return res.status(404).send({ message: "Cart not found." });
    }

    res.status(200).send({ message: "Cart retrieved successfully.", cart });
  } catch (error) {
    console.error("Error retrieving cart:", error.message);
    res
      .status(500)
      .send({ message: "Failed to retrieve cart. Please try again." });
  }
};

// Update a cart item
const updateCartItem = async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.params;
  const { quantity } = req.body;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).send({ message: "Cart not found." });
    }

    const productIndex = cart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex === -1) {
      return res.status(404).send({ message: "Product not found in cart." });
    }

    cart.products[productIndex].quantity = quantity;

    await cart.save();

    res.status(200).send({ message: "Cart updated successfully.", cart });
  } catch (error) {
    console.error("Error updating cart:", error.message);
    res
      .status(500)
      .send({ message: "Failed to update cart. Please try again." });
  }
};

// Remove a cart item
const removeCartItem = async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).send({ message: "Cart not found." });
    }

    cart.products = cart.products.filter(
      (item) => item.product.toString() !== productId
    );

    await cart.save();

    res.status(200).send({ message: "Product removed from cart.", cart });
  } catch (error) {
    console.error("Error removing product from cart:", error.message);
    res
      .status(500)
      .send({
        message: "Failed to remove product from cart. Please try again.",
      });
  }
};

module.exports = { addToCart, getCart, updateCartItem, removeCartItem };
