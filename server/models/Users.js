const mongoose = require("mongoose")
const UserSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    name:String,
    date:Number,
    adress:String,
    phoneNumber:Number,
    role:String



})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel