const authorization = (...allowedRoles) => {
  return (req, res, next) => {
    // Check if the user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized. Please log in." });
    }

    // Check if the user's role is in the allowed roles
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        message:
          "Forbidden. You do not have permission to access this resource.",
      });
    }

    // Proceed to the next middleware or route handler
    next();
  };
};

module.exports = { authorization };
