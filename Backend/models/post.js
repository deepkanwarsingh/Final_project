const mongoose= require('mongoose')

const PostSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:false
    },
    Photo:{
        type:String,
        required:false
    }
},{timeStamp:true}
)

module.exports=mongoose.model("Post",PostSchema)