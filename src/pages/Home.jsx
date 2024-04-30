import React from 'react'
import AnnouncMent from '../components/announcMent/AnnouncMent'
import Catagori from '../components/catagories/Catagori'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import NewSletter from '../components/newSletter/NewSletter'
import Products from '../components/products/Products'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
    <div>

<AnnouncMent/>
      <Navbar/>
      <Slider/>
      <Catagori/>
      <Products/>
      <NewSletter/>
      <Footer/>
    </div>
  )
}

export default Home