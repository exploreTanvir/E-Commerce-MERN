import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
import stirpeImg from "../../assets/man.png"
import AnnounceMent from "../../components/announcMent/AnnouncMent"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import { userRequest } from "../../requestMathode"
import "./cart.css"

const Cart = () => {
    const cart=useSelector(state=>state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

  
    const onToken = (token) => {
      setStripeToken(token);
    };
  
    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: 500,
            });
            history.push("/success", {
              stripeData: res.data,
              products: cart, });
          } catch {}
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart.total, history]);

  return (
    <div className="cart" id="cart">
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

                <StripeCheckout
              name="Tanvir Shop"
              image={stirpeImg}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={process.env.REACT_APP_STRIPE}
            >   <button className="topButton p-3 event-pointer fw-bold text-white border-0 rounded-2" style={{background:"black"}}>CHECKOUT NOW</button></StripeCheckout>

               
            </div>
            <div className="bottom col-sm-12 d-flex justify-content-between align-items-center">
                <div className="info">


                    {cart.products.map(product=>(
                            <div className="product d-flex justify-content-between align-items-center">
                            <div className="productDetail d-flex">
                                <img  src={product.img} alt="" />
    
    
                                <div className="details d-flex flex-column p-2 justify-content-around align-items-start">
                                    <span className="productName">
                                        <b>Product : </b>{product.title}
                                    </span>
                                    <span className="productId">
                                        <b>ID : </b>{product._id}
                                    </span>
                                    <div className="productColor " style={{   background: `${product.color}`}}>
                                        
                                    </div>
                                    <span className="productSize">
                                        <b>Size : </b>{product.size}
                                    </span>
                                </div>
                            </div>
    
    
                            <div className="priceDetail  d-flex justify-content-center align-items-center flex-column">
                                <div className="productAmountContainer d-flex justify-content-between align-items-center mb-2">
                                    <Add/>
                                    <div className="productAmount  fs-3 m-1">{product.quantity}</div>
                                    <Remove/>
                                </div>
                                <div className="productPrice fs-1 fw-lighter">$ {product.price*product.quantity}</div>
                            </div>
                        </div>
                    ))}

                    <hr />
                    
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
                            $ {cart.total}
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
                            $ {cart.total}
                        </span>
                    </div>
                    <StripeCheckout
              name="Tanvir Shop"
              image={stirpeImg}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={process.env.REACT_APP_STRIPE}
            >  <button className="w-100 p-2 fw-bold border-0 rounded-3">CHECKOUT NOW</button></StripeCheckout>
                  
                       
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart