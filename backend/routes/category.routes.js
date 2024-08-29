const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");
const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controllers");

const categoryRouter = Router();

// Create a new category (admin only)
categoryRouter.post(
  "/create",
  authentication,
  authorization("admin"),
  createCategory
);

// Get all categories (public)
categoryRouter.get("/all", getAllCategories);

// Update a category (admin only)

categoryRouter.put(
  "/update/:categoryId",
  authentication,
  authorization("admin"),
  updateCategory
);

// Delete a category (admin only)
categoryRouter.delete(
  "/delete/:categoryId",
  authentication,
  authorization("admin"),
  deleteCategory
);

module.exports = { categoryRouter };
