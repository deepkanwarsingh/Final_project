const mongoose= require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
},{timeStamp:true}
)

module.exports=mongoose.model("Users",UserSchema)