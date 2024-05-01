import React from 'react'
import AnnouncMent from '../components/announcMent/AnnouncMent'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import NewSletter from '../components/newSletter/NewSletter'
import Products from '../components/products/Products'

const Plist = () => {
  return (
    <div>
      <AnnouncMent/>
        <Navbar/>

        <h1 className="title">
          Dresses
        </h1>
        <div className="filterContainer d-flex justify-content-between">

          <div className="filter m-3">
            <span className="filterText me-3 fs-5 fw-bold">
              Filter Products :
            </span>
            <select name="" id="" className="select">
              <option disabled selected>Color</option>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Green</option>
            </select>

            <select className="select">
              <option disabled selected>Size</option>
              <option className='text-center'>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="filter m-3"><span className="filterText me-3 fs-5 fw-bold">
              Sort Products :
            </span>
            <select name="" id="" className="select">
              <option disabled selected>Newest</option>
              <option value="">Price (asc)</option>
              <option value="">Price (desc)</option>
            </select>
            </div>
        </div>
        <Products/>
        <NewSletter/>
        <Footer/>
    </div>
  )
}

export default Plist