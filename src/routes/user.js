const { Router } = require("express");
const { get } = require("mongoose");
const { getAllUsers, addUser, updateUserById, deleteUser } = require("../controllers/user");
const {hashPassword} = require('../middleware/');
const userRouter = Router();


userRouter.get('/users', getAllUsers);
userRouter.post('/users', hashPassword, addUser);
userRouter.patch('/users/:id', hashPassword, updateUserById);
userRouter.delete('/users/:id', deleteUser);

// userRouter.route("/users").get(getAllUsers).post(addUser);
// userRouter.route("/users/:id").patch(updateUserById).delete(deleteUser);

module.exports = {
  userRouter,
};



