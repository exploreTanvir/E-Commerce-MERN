import React from 'react'
import AnnouncMent from '../components/announcMent/AnnouncMent'
import Catagori from '../components/catagories/Catagori'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
    <div>

<AnnouncMent/>
      <Navbar/>
      <Slider/>
      <Catagori/>
    </div>
  )
}

export default Home