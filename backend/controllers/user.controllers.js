const { User } = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { successResponse } = require("../utils/responseFormatter");
const { SECRET_KEY, ACCESS_TOKEN_EXPIRY } = require("../constants");

// User Registration
const userRegistration = async (req, res, next) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
      throw { message: "This email is already registered.", statusCode: 409 };
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    // Create and save the user
    user = await User.create({
      fullname,
      email,
      password: hash,
    });

    res.status(201).json(
      successResponse({
        message: "Registration successful.",
        data: {
          user: {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
          },
        },
        statusCode: 201,
      })
    );
  } catch (err) {
    console.error("Error:", err.message);
    next(err);
  }
};

// User Login
const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      throw { message: "Invalid credentials.", statusCode: 401 };
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw { message: "Invalid credentials.", statusCode: 401 };
    }

    // Generate a JWT token
    const token = jwt.sign({ user_id: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    });

    return res.status(200).json(
      successResponse({
        message: "Login successful",
        data: {
          user: {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
          },
        },
        token,
        statusCode: 200,
      })
    );
  } catch (err) {
    next(err);
  }
};

// User Details
const userDetails = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      message: "User details retrieved successfully.",
      users: users.map((user) => ({
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      })),
    });
  } catch (error) {
    console.error("Error retrieving user details:", error.message);
    res.status(500).json({
      message: "An error occurred while retrieving user details. Please try again later.",
    });
  }
};

// User Role Update
const updateUserRole = async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  // Check for valid role
  if (!["admin", "customer", "vendor"].includes(role)) {
    return res.status(400).json({ message: "Invalid role provided." });
  }

  try {
    // Find and update the user role
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Update the role
    user.role = role;
    await user.save();

    res.status(200).json({
      message: "User role updated successfully.",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error updating user role:", error.message);
    res.status(500).json({
      message: "An error occurred while updating the user role. Please try again later.",
    });
  }
};

module.exports = { userLogin, userRegistration, userDetails, updateUserRole };
