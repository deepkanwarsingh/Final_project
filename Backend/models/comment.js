const mongoose= require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    }
},{timeStamp:true}
)

module.exports=mongoose.model("Comment",CommentSchema)