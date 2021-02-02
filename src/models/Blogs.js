const mongoose = require ('mongoose');

const blogsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    post: {
      type: String,
      required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
  }, {timestamps: true}
  );

const Blogs = mongoose.model('Blogs', blogsSchema)

module.exports = {
    Blogs
}