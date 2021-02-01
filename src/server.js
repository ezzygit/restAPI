require('./db/connection');
const express = require('express');
const {User} = require('./models/User');

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

// get all users//
app.get("/users", async (req, res) => {
    try {
        const allUsers = await User.find({});
res.status(200).send({message: "api is working"});
    } catch (error) {
        res.status(500).send(error);
    }
});

//add a user//
app.post("/users", async (req, res) => {
try {
    const user = new User(req.body);
    console.log(req.body);
    const savedUser = await user.save();
    res.status(201).send({message: "added to DB"});
} catch (error) {
    res.status(500).send({message: "could not connect"});
}
});

// create endpoints //

// route to update a user
app.patch("/user/:id", async (req,res) => {
try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    console.log(user);
    res.status(200).send(user);
} catch (error) {
      res.status(404).send({message: "user not found"});
    }
});

// route to delete user

app.delete("/user/:id", async (req,res) => {
try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).send(user)
} catch (error) {
    res.status(404).send({message: "user not found"})
}
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});