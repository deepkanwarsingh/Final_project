const mongoose= require('mongoose')

const CommentSchema = new mongoose.Schema({
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

module.exports=mongoose.model("Comment",CommentSchema)