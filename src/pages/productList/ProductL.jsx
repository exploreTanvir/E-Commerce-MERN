import AnnouncMent from '../../components/announcMent/AnnouncMent'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import NewSletter from '../../components/newSletter/NewSletter'
import "./productL.css"

const ProductL = () => {
  return (
    <div>
        <AnnouncMent/>
        <Navbar/>
        <NewSletter/>

        <div className="wrapper row p-5">
            <div className="imgContainer col-6">
                <img className='w-100' src="https://i.ibb.co/S6qMxwr/jean.jpg"  alt="" />
            </div>

            <div className="infoContainer  col-6">
                <h1 className="title">
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
                <div className="filterContainer">
                    <div className="filter">
                        <div className="filterTitle">
                            
                        </div>
                        <div className="filterColor">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductL