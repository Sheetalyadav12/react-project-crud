const mongoose = require("mongoose")
const UserSchema= new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    name:String,
    date_of_birth:Number,
    adress:String,
    phone_number:Number,
    role:String



})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel