const { check, validationResult } = require("express-validator");

// Validation rules
const validateUser = [
  // Fullname validation
  check("fullname")
    .trim()
    .notEmpty()
    .withMessage("Fullname is required.")
    .isLength({ max: 30 })
    .withMessage("Fullname cannot be more than 30 characters long.")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Fullname must contain only letters and spaces.")
    .toLowerCase(),

  // Email validation
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .normalizeEmail()
    .isLength({ max: 30 })
    .withMessage("Email cannot be more than 30 characters long."),

  // Password validation
  check("password")
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/\d/)
    .withMessage("Password must contain at least one number.")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter.")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter.")
    .matches(/[\W_]/)
    .withMessage("Password must contain at least one special character."),

  // Middleware to check validation results
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUser };
