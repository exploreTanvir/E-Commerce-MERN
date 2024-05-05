const mongoose=require("mongoose") 


//create schema
const UserSchema=new mongoose.Schema(
{
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:boolean,
        default:false
    },
    createdAt:{

    }
},
{timestamps:true}
)



module.exports=mongoose.model("user",UserSchema)