const mongoose=require("mongoose") 


//create schema
const UserSchema=new mongoose.Schema(
{
    username:{
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
        type:Boolean,
        default:false
    },
    createdAt:{

    }
},
{timestamps:true}
)



module.exports=mongoose.model("user",UserSchema)