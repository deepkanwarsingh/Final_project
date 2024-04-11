
const express = require('express')
const router = express.Router();
const User = require('../models/user')
// const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 

//register

router.post("/register",async(req,res)=>{
    try{
         const {username,email,password}=req.body
        // const salt=await bcrypt.genSalt(10)
         const hashedPassword=await bcrypt.hashSync(password,salt)
         const newUser=new User({username,email,password:hashedPassword})
         const savedUser=await newUser.save()
         res.status(200).json(savedUser)
        

    }
    catch(err){
        res.status(500).json(err)
    }

})

//login





module.exports = router