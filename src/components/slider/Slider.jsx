import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { sliderItems } from './../../data';
import "./slider.css";

const Slider = () => {
  const [slide,setSlide]=useState(0)
  const handleClick=(direction)=>{
    if (direction === "left") {
      setSlide(slide > 0 ? slide - 1 : 2);
    } else {
      setSlide(slide < 2 ? slide + 1 : 0);
    }
  }
  return (
    <div className="containers overflow-hidden  d-flex">
      <div className=' slider position-relative '>
            <div onClick={()=>handleClick("left")} className="icons left rounded-circle position-absolute " direction="left">
                <ArrowLeftOutlined/>  
            </div>

            <div className="wrapper d-flex" style={{ transform: `translateX(-${slide * 100}vw)` }} slide={slide}>

            {
              sliderItems.map(item=>(
                
                <div style={{background:item.bg}} className="slide row  align-items-center " bg={item.bg}>
                <div className="imgContainer text-center col-6">
                  <img src={item.img} alt="" />
                </div>
                <div className="infoContainer p-5 col-6">
                  <h1 className="title">
                  {item.title}
                  </h1>
                  <p className="desc mt-5 mb-5 fw-bold">
                  {item.desc}
                  </p>
                  <button className='p-2 bg-transparent fs-5 pointer-event'>SHOP NOW</button>
                </div>
              </div>
              ))
            }

            </div>
              

            <div onClick={()=>handleClick()} className="icons right rounded-circle position-absolute" direction="right">
                <ArrowRightOutlined/>
            </div>
      </div>
    </div>
  )
}

export default Slider