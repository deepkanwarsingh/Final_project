const express = require('express');
const router = express.Router('')
const user =  require('../models/user')
const bcrypt = require('bcrypt')
const post = require("../models/post")
const Comment = require("../models/comment")

//UPDATE
router.put("/:id",async (req,res)=>{
    try{
        if(req.body.password){
            const salt=await bcrypt.genSalt(10)
            req.body.password=await bcrypt.hashSync(req.body.password,salt)
        }
        const updatedUser=await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)

    }
    catch(err){
        res.status(500).json(err)
        console.log(err.message)
    }
})


//DELETE
router.delete("/:id",async (req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id)
        await post.deleteMany({userId:req.params.id})
         await Comment.deleteMany({userId:req.params.id})
        res.status(200).json("User has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER

router.get("/:id",async (req,res)=>{
    try{
        const users=await user.findById(req.params.id)
        // const {password,...info}=user._doc
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err.message)
    }
})


module.exports=router