const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const UserModel = require('./models/Users')
// const { default: Users } = require('../crud/src/Users')
// const { default: Users } = require('../crud/src/Users')

const app = express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")
app.get ('/' ,(req,res)=>{
    UserModel.find({})
    .then(users =>res.json(users))
    .catch(err=>res.json(err))

})

app.get('/getUser/:id',(req,res)=>{
const id = req.params.id;
console.log("id",id);

UserModel.findById({_id:id})  
.then(users =>res.json(users))
    .catch(err=>res.json(err))

})
app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        date:req.body.date,
        adress:req.body.adress,
        phone_number:req.body.phone_number,
        role:req.body.role
    })

        .then(users =>res.json(users))
    .catch(err=>res.json(err))






})
app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res)
    .catch(err=>res.json(err))
    )


})

app.post("/createUser",(req,res)=>{
    UserModel.create(req,body)
    .then(users => res.json(users))
    .catch(err =>res.json(err))

})



app.listen(5000,()=>{
    console.log("Server is Running");
    
})