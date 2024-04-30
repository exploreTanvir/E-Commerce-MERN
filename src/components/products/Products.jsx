import { popularProducts } from "../../data"
import Product from "../product/Product"
import "./products.css"

const Products = () => {
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