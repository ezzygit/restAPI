const { Router } = require("express");
const blogsRouter = Router();
const { getAllBlogs, getBlogsByUser, addBlogs, updateBlogs, deleteBlogs } = require("../controllers/blogs");

blogsRouter.get("/blogs", getAllBlogs);
blogsRouter.get("/blogs/:user_id", getBlogsByUser);
blogsRouter.post("/blogs/:user_id", addBlogs);
blogsRouter.patch("/blogs/:id", updateBlogs);
blogsRouter.delete("/blogs/:id", deleteBlogs);

module.exports = {
  blogsRouter,
};