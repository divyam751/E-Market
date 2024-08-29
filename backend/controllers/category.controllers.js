const { Category } = require("../models/category.models");

const createCategory = async (req, res) => {
  const { name } = req.body;

  // Validate category name
  if (!name || name.trim() === "") {
    return res
      .status(400)
      .send({ message: "Please enter a valid category name." });
  }

  try {
    // Check if category already exists
    let category = await Category.findOne({ name });
    if (category) {
      return res
        .status(409)
        .send({ message: `${name} category already exists.` });
    }

    // Create a new category
    category = await Category.create({ name });

    res
      .status(201)
      .send({ message: "Category created successfully.", category });
  } catch (error) {
    console.error("Error creating category:", error.message);
    res
      .status(500)
      .send({ message: "Failed to create category. Please try again." });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res
      .status(200)
      .send({ message: "Categories retrieved successfully.", categories });
  } catch (error) {
    console.error("Error retrieving categories:", error.message);
    res
      .status(500)
      .send({ message: "Failed to retrieve categories. Please try again." });
  }
};

const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).send({ message: "Category not found." });
    }

    // Update category name
    category.name = name || category.name;

    // Save the updated category
    await category.save();
    res
      .status(200)
      .send({ message: "Category updated successfully.", category });
  } catch (error) {
    console.error("Error updating category:", error.message);
    res
      .status(500)
      .send({ message: "Failed to update category. Please try again." });
  }
};

const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).send({ message: "Category not found." });
    }
    res.status(200).send({ message: "Category deleted successfully." });
  } catch (error) {
    console.error("Error deleting category:", error.message);
    res
      .status(500)
      .send({ message: "Failed to delete category. Please try again." });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
