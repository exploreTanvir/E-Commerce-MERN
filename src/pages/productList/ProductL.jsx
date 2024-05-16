import { Add, Remove } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import AnnouncMent from '../../components/announcMent/AnnouncMent'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import NewSletter from '../../components/newSletter/NewSletter'
import { addProduct } from '../../redux/cartRedux'
import { publicRequest } from '../../requestMathode'
import "./productL.css"

const ProductL = () => {
    const location=useLocation()
  const id=location.pathname.split("/")[2]
  const [product,setProduct]=useState({})
  const [quantity,setQuantity]=useState(1)
  const [color,setColor]=useState("")
  const [size,setSize]=useState("")
  const dispatch=useDispatch()


  useEffect(()=>{
        const getProduct=async ()=>{
            try {
                const res=await publicRequest.get("/products/find/"+id)
                setProduct(res.data)
            } catch (error) {
                
            }
        }
        getProduct()
  },[id])


  const handleQuantity=(type)=>{
    if(type==="dec"){
       quantity>1 && setQuantity(quantity-1)
    }
   else{
        setQuantity(quantity+1)
    }
  }



  const handleClick=()=>{
    dispatch(
    addProduct({...product,quantity,color,size})
    )
  }
  return (
    <div className='productL'>
        <AnnouncMent/>
        <Navbar/>


        <div className="wrapper row p-3">
            <div className="imgContainer col-6">
                <img className='w-100' src={product.img}  alt="" />
            </div>

            <div className="infoContainer col-6">
                <h1 className="title  mt-5">
                {product.title}
                </h1>
                <p className="desc">
                {product.desc}
                </p>
                <span className="price">${product.price}</span>
                <div className="filterContainer d-flex justify-content-between w-50  pt-5 ">
                    
                    <div className="filterL">
                        <span className="filterTitleL m-0">
                            Color
                        </span>
                        {product.color?.map(c=>(
                              <div className="filterColorL" style={{background:{c}}} key={c} onclick={()=>setColor(c)}></div>
                        ))}
                      
                    </div>

                    <div className="filterL">
                        <span className="filterTitleL">
                            Size
                        </span>
                        <select className="filterSizeL " onclick={(e)=>setSize(e.target.value)}>
                        {product.size?.map(s=>(
                               <option className="filterSizeOption" key={s}>{s}</option>
                        ))}
                        </select>
                    </div>
                </div>



                <div className="addContainer py-3 d-flex align-items-center w-50 justify-content-between">
                    <div className="amountContainer  d-flex align-items-center fw-bold">
                       <Remove onclick={()=>handleQuantity("dec")}/>
                       <span className="amount">{quantity}</span>
                       <Add onclick={()=>handleQuantity("inc")}/>
                    </div>
                    <button className="addToCart" onclick={handleClick}>
                        ADD TO CART
                </button>
                </div>
                
            </div>
        </div>
        <NewSletter/>
        <Footer/>
    </div>
  )
}

export default ProductL