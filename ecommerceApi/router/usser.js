const router=require("express").Router()

router.get("/userTest",(req,res)=>{
    res.send("user request is success")
})

router.post("/postReq",(req,res)=>{
    const userName=req.body.userName
    res.send(userName)
})

module.exports=router