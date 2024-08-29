const { Product } = require("../models/product.models");

// Create a new product
const createProduct = async (req, res) => {
  const { name, description, price, category, stock, images } = req.body;
  const vendor = req.user._id;

  try {
    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      images,
      vendor,
    });
    await product.save();
    res.status(201).send({ message: "Product created successfully.", product });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res
      .status(500)
      .send({ message: "Failed to create product. Please try again." });
  }
};

// Get a specific product
const getProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId).populate(
      "category vendor"
    );

    if (!product) {
      return res.status(404).send({ message: "Product not found." });
    }

    res
      .status(200)
      .send({ message: "Product retrieved successfully.", product });
  } catch (error) {
    console.error("Error retrieving product:", error.message);
    res
      .status(500)
      .send({ message: "Failed to retrieve product. Please try again." });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate("category vendor");
    res
      .status(200)
      .send({ message: "Products retrieved successfully.", products });
  } catch (error) {
    console.error("Error retrieving products:", error.message);
    res
      .status(500)
      .send({ message: "Failed to retrieve products. Please try again." });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, description, price, category, stock, images } = req.body;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send({ message: "Product not found." });
    }

    if (product.vendor.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .send({ message: "Unauthorized to update this product." });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.stock = stock || product.stock;
    product.images = images || product.images;

    await product.save();

    res.status(200).send({ message: "Product updated successfully.", product });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res
      .status(500)
      .send({ message: "Failed to update product. Please try again." });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send({ message: "Product not found." });
    }

    if (product.vendor.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .send({ message: "Unauthorized to delete this product." });
    }

    await product.remove();
    res.status(200).send({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res
      .status(500)
      .send({ message: "Failed to delete product. Please try again." });
  }
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
