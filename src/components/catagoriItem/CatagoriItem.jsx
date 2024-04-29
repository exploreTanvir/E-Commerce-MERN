import React from 'react'
import "./catagoriItem.css"

const CatagoriItem = ({item}) => {
  return (
    <div className='container-fluid catagoriesItem'>
        <img  className='w-100 catagoriImg' src={item.img} alt="" />
        <div className="info">
            <h1 className='text-white mb-4'>{item.title}</h1>
            <button className='border-0 p-2 bg-white pointer-event fw-bold'>SHOP NOW</button>
        </div>
        <div className="posi">
            
        </div>
    </div>
  )
}

export default CatagoriItem