const { Router } = require("express");
const { getAllUsers, addUser, updateUserById, deleteUser } = require("../controllers/user");
const userRouter = Router();

userRouter.route("/users").get(getAllUsers).post(addUser);
userRouter.route("/users/:id").patch(updateUserById).delete(deleteUser);

module.exports = {
  userRouter,
};