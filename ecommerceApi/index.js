const express=require("express")  
const mongoose=require("mongoose")  
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const userRoute=require("./router/usser")
app.use(express.json())

// MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connection Success")).catch((err)=>{
    console.log(err)
})


//API END POINT
app.use("/api/user",userRoute)


// APP LISTENING
app.listen(process.env.PORT||3000,()=>{
    console.log("server is running on the port nb 3000")
})