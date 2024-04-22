const express = require('express')
const router = express.Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 
const dotenv = require('dotenv')

//register

router.post("/register",async(req,res)=>{
    
    
    try{    
        
         const {username,email,password}=req.body
         const salt=await bcrypt.genSalt(10)
         const hashedPassword=await bcrypt.hashSync(password,salt)
         const newUser=new User({username,email,password:hashedPassword})
                            // error
           const savedUser=await newUser.save()
                            //
         console.log(username,email,password);
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
        const user= await User.findOne({email:req.body.email})
       
     if(!user){
            return res.status(404).json("user not found")
     }
   
   
     const match = await bcrypt.compareSync(req.body.password,user.password)
     if(!match){
        return res.status(401).json("wrong credentials !")     }
        const token=jwt.sign({id:user._id},process.env.SECRET,{expiresIn:"3d"})
        res.status(200).json({user});

  
        

    }
    catch(err){
        res.status(500).json(err)
        console.log(err.message)
    }
})


//logout

router.get("/logout",async (req,res)=>{
    try{
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User logged out successfully!")

    }
    catch(err){
        res.status(500).json(err)
    }
}) 

//refetch

router.get("/refetch" ,(req,res)=>
{
    const token = req.cookies.token;
    jwt.verify(token,process.env.SECRET,{},async(err,data)=>{
        if(err){
            return res.status(404).json(err)
        }
        res.status(200).json(data)
    })

}
)






module.exports = router