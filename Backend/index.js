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
app.use(cors({origin:"http://127.0.0.1:5173", credentials:true}))


app.listen(5000,()=>{
    connectDB()
    console.log("app is running on server 5000")
    
})