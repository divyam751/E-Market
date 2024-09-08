// Success Response Formatter
const successResponse = ({ message = "", data = {}, token = "", statusCode = 200 }) => {
  return {
    status: "success",
    statusCode,
    message,
    token,
    data,
  };
};

// Error Response Formatter
const errorResponse = ({ message = "Internal server error", error = {}, statusCode = 500 }) => {
  return {
    status: "error",
    statusCode,
    message,
    error,
  };
};

module.exports = {
  successResponse,
  errorResponse,
};
