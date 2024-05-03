const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute = require('./routes/user')
const Postroutes = require('./routes/Post')
const CommentRoutes = require('./routes/comments')
const cors = require('cors')
const multer = require('multer')


const connectDB=async()=>{
   
    try{
        await mongoose.connect("mongodb+srv://deepkanwarsingh501:Deep22@cluster0.vbmge4a.mongodb.net/")
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}

//middleware

dotenv.config();
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",Postroutes);
app.use('/api/comments',CommentRoutes)
app.use(cookieparser());
app.use(cors({origin:true, credentials:true}))

// image upload

const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
       fn(null,req.body.img)
        //  fn(null,"image1.jpg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
     console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})

app.listen(5000,()=>{
    connectDB()
    console.log("app is running on server 5000")
    
})