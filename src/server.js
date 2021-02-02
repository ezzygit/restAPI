require("./db/connection");
const express = require("express");
const { userRouter } = require("./routes/user");
const { blogsRouter } = require("./routes/blogs");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(blogsRouter);

app.get("/health", (req, res) => {
  res.status(200).send({ message: "API is working" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});