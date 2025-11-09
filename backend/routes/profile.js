const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User"); 

router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("username email"); // only return username & email
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;