const { Router } = require("express");
const { get } = require("mongoose");
const { getMyProfile, addUser, updateUserById, deleteUser, login, logout } = require("../controllers/user");
const {hashPassword, auth} = require('../middleware/');
const userRouter = Router();

// TEST
// ADD A USER
// COPY THE TOKEN
// GET UR PROFILE - INCLUDE TOKEN IN THE HEADER

userRouter.get('/users/myprofile', auth, getMyProfile);
userRouter.post('/users', hashPassword, addUser);
userRouter.patch('/users/:id', auth, hashPassword, updateUserById);
userRouter.delete('/users/:id', auth, deleteUser);
userRouter.post('/users/login', login);
userRouter.get('/users/logout', auth, logout);


// userRouter.route("/users").get(getAllUsers).post(addUser);
// userRouter.route("/users/:id").patch(updateUserById).delete(deleteUser);

module.exports = {
  userRouter,
};



