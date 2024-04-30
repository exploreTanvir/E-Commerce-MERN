import React from 'react';
import { categories } from '../../data';
import CatagoriItem from '../catagoriItem/CatagoriItem';
import "./catagori.css";


const Catagori = () => {
  return (
    <div className='container-fluid justify-content-between d-flex p-5' >
      {
        categories.map(item=>(
          <CatagoriItem item={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Catagori