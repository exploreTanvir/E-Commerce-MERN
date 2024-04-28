import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import "./slider.css"

const Slider = () => {
  return (
    <div className=' slider position-relative'>
            <div className="icons left rounded-circle position-absolute ">
                <ArrowLeftOutlined/>
            </div>
            <div className="icons right rounded-circle position-absolute">
                <ArrowRightOutlined/>
            </div>
    </div>
  )
}

export default Slider