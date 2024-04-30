import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import "./product.css"

const Product = ({item}) => {
  return (
    <div className="product m-3">
        <div className="circle">

        </div>
        <img src={item.img} alt="" />
        <div className="info  d-flex flex-column  align-items-center justify-content-center">
            
            <div className="bottom  d-flex  align-items-center justify-content-center">
            <div className="icons">
                <ShoppingCartOutlined/>
            </div>
            <div className="icons">
                <SearchOutlined/>
            </div>
            <div className="icons">
                <FavoriteBorderOutlined/>
            </div>
            </div>
            <div className="top text-white fw-bold text-center">
                <h1 className=" fw-bold fs-1 ">{item.title}</h1>
                <p>Lorem ipsum, dolor sit amet elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Product