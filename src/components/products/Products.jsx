import { useEffect, useState } from "react"
import { popularProducts } from "../../data"
import Product from "../product/Product"
import "./products.css"

const Products = ({cat,filters,sort}) => {
    const [products,setProducts]=useState([])
    const [filteredProduct,setfilteredProducts]=useState([])

    useEffect(()=>{

    },[])

  return (
    <div className="Products justify-content-between d-flex p-5">
        {
            popularProducts.map(item=>(
                <Product item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Products