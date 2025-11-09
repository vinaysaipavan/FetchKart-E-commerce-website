const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/signup",async(req,res)=>{
    const {username,email,password} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exist"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            originalpass: password,
        });

        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:7*24*60*60*1000,
        })
        res.status(201).json({ message: "User registered successfully", user: newUser });
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;