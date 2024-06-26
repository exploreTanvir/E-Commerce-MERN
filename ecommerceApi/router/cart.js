const Cart=require("../models/Cart")
const CryptoJS = require("crypto-js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./varifyToken");

const router = require("express").Router();

//CREATE
router.post("/" ,async(req,res)=>{
    const newCart=new Cart(req.body)

    try {

        const savedProducts=await newCart.save()
        res.status(200).json(savedProducts)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//UPDATE
router.put("/:id", async (req, res) => {
try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
router.get("/find/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({userId:req.params.userId});
    const { password, ...others } = cart._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CART
router.get("/", async (req, res) => {
  try {
    const carts =await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;