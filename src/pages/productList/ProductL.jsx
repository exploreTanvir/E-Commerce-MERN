import { Add, Remove } from '@mui/icons-material'
import AnnouncMent from '../../components/announcMent/AnnouncMent'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import NewSletter from '../../components/newSletter/NewSletter'
import "./productL.css"

const ProductL = () => {
  return (
    <div className='productL'>
        <AnnouncMent/>
        <Navbar/>
        <NewSletter/>

        <div className="wrapper row p-3">
            <div className="imgContainer col-6">
                <img className='w-100' src="https://i.ibb.co/S6qMxwr/jean.jpg"  alt="" />
            </div>

            <div className="infoContainer col-6">
                <h1 className="title  mt-5">
                Denim Jumpsuit
                </h1>
                <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
                </p>
                <span className="price">$20</span>
                <div className="filterContainer d-flex justify-content-between w-50  pt-5 ">
                    
                    <div className="filterL">
                        <span className="filterTitleL m-0">
                            Color
                        </span>
                        <div className="filterColorL" style={{background:"black"}}></div>
                        <div className="filterColorL" style={{background:"darkblue"}}></div>
                        <div className="filterColorL" style={{background:"gray"}}></div>
                    </div>

                    <div className="filterL">
                        <span className="filterTitleL">
                            Size
                        </span>
                        <select className="filterSizeL ">
                            <option className="filterSizeOption">XS</option>
                            <option className="filterSizeOption">S</option>
                            <option className="filterSizeOption">M</option>
                            <option className="filterSizeOption">L</option>
                            <option className="filterSizeOption">XL</option>
                        </select>
                    </div>
                </div>



                <div className="addContainer py-3 d-flex align-items-center w-50 justify-content-between">
                    <div className="amountContainer  d-flex align-items-center fw-bold">
                       <Remove/>
                       <span className="amount">1</span>
                       <Add/>
                    </div>
                    <button className="addToCart">
                        ADD TO CART
                </button>
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductL