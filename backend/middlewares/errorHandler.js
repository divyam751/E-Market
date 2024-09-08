const { errorResponse } = require("../utils/responseFormatter");

// Global Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const error = err.error || {}; // any additional error data

  res.status(statusCode).json(
    errorResponse({
      message,
      error,
      statusCode,
    })
  );
};

module.exports = errorHandler;
