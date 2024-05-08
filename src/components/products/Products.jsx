import axios from "axios"
import { useEffect, useState } from "react"
import Product from "../product/Product"
import "./products.css"

const Products = ({cat,filters,sort}) => {
    const [products,setProducts]=useState([])
    const [filteredProduct,setFilteredProducts]=useState([])

    useEffect(()=>{
      const getProducts=async()=>{
        try {
          const res=await axios.get(cat?`http://localhost:3003/api/products?category=${cat}`:"http://localhost:3003/api/products")
          setProducts(res.data)
        } catch (error) {          
        }
      }
      getProducts()
    },[cat])


    useEffect(()=>{
      cat && setFilteredProducts(
        products.filter(item=>Object.entries(filters).every(([key,value])=>item[key].includes(value)))
      )
    },[cat,products,filters])


    useEffect(()=>{
      if(sort==="newest"){
        setFilteredProducts(prev=>
          [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        )
      }
      else if(sort==="asc"){
        setFilteredProducts(prev=>
          [...prev].sort((a,b)=>a.price - b.price)
        )
      }
      else{
        setFilteredProducts(prev=>
          [...prev].sort((a,b)=>b.price - a.price)
        )
      }

      
    },[sort])

  return (
    <div className="Products justify-content-between d-flex p-5">
        {
           cat? filteredProduct.map(item=>(
                <Product item={item} key={item.id}/>
            )): products.slice(0,8).map(item=>(
              <Product item={item} key={item.id}/>
          ))
        }
    </div>
  )
}

export default Products