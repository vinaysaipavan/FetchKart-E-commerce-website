const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const cors = require("cors");
const axios = require("axios");

const User = require("./models/User");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the world biggest backend server!!!");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Received:", email, password);

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid password" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(5000, () => {
    console.log("App is listened at 5000");
});
