const { Blogs } = require("../models/Blogs");

exports.getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blogs.find({});
    res.status(200).send(allBlogs);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getBlogsByUser = async (req, res) => {
  try {
    const allBlogs = await Blogs.find({ author: req.params.user_id });
    res.status(200).send(allBlogs);
  } catch (error) {
    res.status(404).send({ message: "user not found" });
  }
};

exports.addBlogs = async (req, res) => {
  try {
    // const post = new Post(req.body);
    // const user = await User.findById(req.params.user_id);
    // user.posts.push(post);
    // const returnedValue = await user.save();
    const blogs = new Blogs(req.body);
    blogs.author = req.params.user_id;
    const returnedValue = await blogs.save();

    res.status(201).send(returnedValue);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log(blogs);
    res.status(200).send("successfully updated");
  } catch (error) {
    res.status(404).send({ message: "user not found" });
  }
};

exports.deleteBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.findByIdAndDelete(req.params.id);
    res.status(200).send(blogs);
  } catch (error) {
    res.status(404).send({ message: "user not found" });
  }
};