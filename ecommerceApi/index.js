const express=require("express")  
const mongoose=require("mongoose")  
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const userRoute = require("./router/user");
const authRoute = require("./router/auth");
const productRoute = require("./router/product")
const cartRoute = require("./router/cart")
const orderRoute = require("./router/order")
app.use(express.json())

// MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connection Success")).catch((err)=>{
    console.log(err)
})


//API END POINT
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);


// APP LISTENING
app.listen(process.env.PORT||3003,()=>{
    console.log("server is running on the port nb 3000")
})