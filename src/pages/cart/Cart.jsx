import { Add, Remove } from "@mui/icons-material"
import AnnounceMent from "../../components/announcMent/AnnouncMent"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./cart.css"

const Cart = () => {
  return (
    <div className="cart">
        <AnnounceMent/>
        <Navbar/>
        <div className="cartWrapper p-4 text-center">
            <h1 className="title">YOUR CART</h1>
            <div className="top p-3 d-flex justify-content-between align-items-center">
                <button className="topButton p-3 event-pointer fw-bold border-2 rounded-2 bg-white" style={{color:"black"}}>CONTINUE SHOPPING</button>

                <div className="topTexts">
                    <span className="topText">Shopping Bag(2)</span>
                    <span className="topText">Your Wish List(0)</span>
                </div>

                <button className="topButton p-3 event-pointer fw-bold text-white border-0 rounded-2" style={{background:"black"}}>CHECKOUT NOW</button>
            </div>
            <div className="bottom col-sm-12 d-flex justify-content-between align-items-center">
                <div className="info">
                    <div className="product d-flex justify-content-between align-items-center">
                        <div className="productDetail d-flex">
                            <img  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />


                            <div className="details d-flex flex-column p-2 justify-content-around align-items-start">
                                <span className="productName">
                                    <b>Product : </b>JESSIE THUNDER SHOES
                                </span>
                                <span className="productId">
                                    <b>ID : </b>956348821357
                                </span>
                                <div className="productColor ">
                                    
                                </div>
                                <span className="productSize">
                                    <b>Size : </b>37.5
                                </span>
                            </div>
                        </div>


                        <div className="priceDetail  d-flex justify-content-center align-items-center flex-column">
                            <div className="productAmountContainer d-flex justify-content-between align-items-center mb-2">
                                <Add/>
                                <div className="productAmount  fs-3 m-1">2</div>
                                <Remove/>
                            </div>
                            <div className="productPrice fs-1 fw-lighter">$ 30</div>
                        </div>
                    </div>

                    <hr />
                    <div className="product d-flex justify-content-between align-items-center">
                        <div className="productDetail d-flex">
                            <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />


                            <div className="details d-flex flex-column p-2 justify-content-around align-items-start">
                                <span className="productName">
                                    <b>Product : </b>HAKURA T-SHIRT
                                </span>
                                <span className="productId">
                                    <b>ID : </b>93813718293
                                </span>
                                <div className="productColor2">
                                    
                                </div>
                                <span className="productSize">
                                    <b>Size : </b>M
                                </span>
                            </div>
                        </div>


                        <div className="priceDetail  d-flex justify-content-center align-items-center flex-column">
                            <div className="productAmountContainer d-flex justify-content-between align-items-center mb-2">
                                <Add/>
                                <div className="productAmount  fs-3 m-1">1</div>
                                <Remove/>
                            </div>
                            <div className="productPrice fs-1 fw-lighter">$ 20</div>
                        </div>
                    </div>
                </div>


                <div className="summary p-3">
                    <h1 className="summaryTitle fw-lighter">
                        ORDER SUMMERY
                    </h1>
                    <div className="summeryItem">
                    <span className="summeryText">
                            Sub Total
                        </span>
                        <span className="summeryPrice">
                            $ 80
                        </span>
                    </div>
                    <div className="summeryItem">
                    <span className="summeryText">
                            Estimated Shipping
                        </span>
                        <span className="summeryPrice">
                            $ 5.90
                        </span>
                    </div>
                    <div className="summeryItem">
                    <span className="summeryText">
                            Shipping Discount
                        </span>
                        <span className="summeryPrice">
                            $ -5.90
                        </span>
                    </div>
                    <div className="summeryItem fw-bold fs-2">
                    <span className="summeryText ">
                            Total
                        </span>
                        <span className="summeryPrice">
                            $ 80
                        </span>
                    </div>
                    <button className="w-100 p-2 fw-bold border-0 rounded-3">CHECKOUT NOW</button>
                       
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart