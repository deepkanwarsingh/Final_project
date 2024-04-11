const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const authRoute=require('./routes/auth')


const connectDB=async()=>{
   
    try{
        await mongoose.connect("mongodb+srv://User:user123@cluster0.vfwjq9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}

dotenv.config();
app.use(express.json())
app.use("/api/auth",authRoute);


app.listen(5000,()=>{
    connectDB()
    console.log("app is running on server 5000")
})