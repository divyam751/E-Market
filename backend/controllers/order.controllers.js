const { Order } = require("../models/order.models");
const { Cart } = require("../models/cart.models");

// Create a new order
const createOrder = async (req, res) => {
  const userId = req.user._id;
  const { shippingAddress, paymentMethod } = req.body;

  try {
    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );

    if (!cart || cart.products.length === 0) {
      return res.status(400).send({ message: "Your cart is empty." });
    }

    const totalAmount = cart.products.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    const order = new Order({
      user: userId,
      products: cart.products,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });

    await order.save();

    // Clear the user's cart
    await Cart.findOneAndDelete({ user: userId });

    res.status(201).send({ message: "Order placed successfully.", order });
  } catch (error) {
    console.error("Error placing order:", error.message);
    res
      .status(500)
      .send({ message: "Failed to place order. Please try again." });
  }
};

// Get all orders for a user
const getUserOrders = async (req, res) => {
  const userId = req.user._id;

  try {
    const orders = await Order.find({ user: userId }).populate(
      "products.product"
    );

    res.status(200).send({ message: "Orders retrieved successfully.", orders });
  } catch (error) {
    console.error("Error retrieving orders:", error.message);
    res
      .status(500)
      .send({ message: "Failed to retrieve orders. Please try again." });
  }
};

// Get order details
const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId).populate("products.product");

    if (!order) {
      return res.status(404).send({ message: "Order not found." });
    }

    res
      .status(200)
      .send({ message: "Order details retrieved successfully.", order });
  } catch (error) {
    console.error("Error retrieving order details:", error.message);
    res
      .status(500)
      .send({ message: "Failed to retrieve order details. Please try again." });
  }
};

// Update order status (admin only)
const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { orderStatus } = req.body;

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).send({ message: "Order not found." });
    }

    order.orderStatus = orderStatus;
    await order.save();

    res
      .status(200)
      .send({ message: "Order status updated successfully.", order });
  } catch (error) {
    console.error("Error updating order status:", error.message);
    res
      .status(500)
      .send({ message: "Failed to update order status. Please try again." });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrderDetails,
  updateOrderStatus,
};
