const { Router } = require("express");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");
const { validateUser } = require("../middlewares/validation");
const {
  userRegistration,
  userLogin,
  userDetails,
  updateUserRole,
} = require("../controllers/user.controllers");

const userRouter = Router();

userRouter.post("/register", validateUser, userRegistration);
userRouter.post("/login", userLogin);
userRouter.get(
  "/userdetails",
  authentication,
  authorization("admin"),
  userDetails
);
userRouter.put(
  "/update-role/:userId",
  authentication,
  authorization("admin"),
  updateUserRole
);

module.exports = { userRouter };
