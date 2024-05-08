import React, { useState } from 'react'
import { useLocation } from "react-router"
import AnnouncMent from '../components/announcMent/AnnouncMent'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import NewSletter from '../components/newSletter/NewSletter'
import Products from '../components/products/Products'

const Plist = () => {
  const location=useLocation()
  const cat=location.pathname.split("/")[2]
  const [filters,setfilters]=useState({})
  const [sort,setSort]=useState("newest")

  const handlefilters=(e)=>{
      const value=e.target.value;
      setfilters({
        ...filters,
        [e.target.name]:value
      })
  }
  return (
    <div>
      <AnnouncMent/>
        <Navbar/>

        <h1 className="title">
          {cat}
        </h1>
        <div className="filtersContainer d-flex justify-content-between">

          <div className="filters m-3">
            <span className="filtersText me-3 fs-5 fw-bold">
              filters Products :
            </span>
            <select name="color" onChange={handlefilters} className="select">
              <option disabled>Color</option>
              <option>white</option>
              <option>black</option>
              <option>red</option>
              <option>blue</option>
              <option>yellow</option>
              <option>green</option>
            </select>

            <select className="select" name="size" onChange={handlefilters}>
              <option disabled>Size</option>
              <option className='text-center'>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="filters m-3"><span className="filtersText me-3 fs-5 fw-bold">
              Sort Products :
            </span>
            <select onChange={e=>setSort(e.target.value)} className="select">
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
            </div>
        </div>
        <Products cat={cat} filters={filters} sort={sort}/>
        <NewSletter/>
        <Footer/>
    </div>
  )
}

export default Plist