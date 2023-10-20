const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    }

},{timestamps:true})

const User=mongoose.model('user',userSchema)

module.exports=User