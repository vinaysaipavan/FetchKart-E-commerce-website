const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

// 🟢 Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received:", email, password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },process.env.JWT_SECRET,{expiresIn:"1h"}
    )
    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite:"lax",
      maxAge:24*60*60*1000,
    })
    res.status(200).json({message:"Logged in successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
