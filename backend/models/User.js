const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Fetchkart");

const user = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    originalpass: { type: String },
},{
    timestamps:true
})

module.exports = mongoose.model("user",user);