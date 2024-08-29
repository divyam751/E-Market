const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const {
  createOrder,
  getUserOrders,
  getOrderDetails,
  updateOrderStatus,
} = require("../controllers/order.controllers");

const orderRouter = Router();

// Create a new order
orderRouter.post("/create", authentication, createOrder);

// Get all orders for a user
orderRouter.get("/", authentication, getUserOrders);

// Get order details
orderRouter.get("/:orderId", authentication, getOrderDetails);

// Update order status (admin only)
orderRouter.put(
  "/update-status/:orderId",
  authentication,
  authorization("admin"),
  updateOrderStatus
);

module.exports = { orderRouter };