
const express = require('express')
const router = express.Router();
const User = require('../models/user')
 const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 

//register

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
        console.log(err.message)
        res.status(500).json(err)
        
    }

})


//login

router.post("/login",async (req,res)=>{
    try{
        const user= User.findOne({email:req.body.email})
       
     if(!user){
            return res.status(404).json("user not found")
     }
     const match = await bcrypt.compareSync(req.body.password,user.password)
     if(!match){
        return res.status(401).json("wrong credentials !")
      }
     res.status.json(user);
        

    }
    catch(err){
        res.status(500).json(err)
        console.log(err.message)
    }
})



module.exports = router