const express = require('express')
const router = express.Router();
const user = require('../models/user')
const jwt = require('jasonwebtoken')
const bcrypt = require('bcrypt') 

router.post("/register",async(req,res)=>{
    try{
        const {username,email,password}=req.body
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hashSync(password,salt)
        const newUser=new User({username,email,password:hashedPassword})
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)

    }
    catch(err){
        res.status(500).json(err)
    }

})



module.exports = router