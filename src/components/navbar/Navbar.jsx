import { ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
        <div className="wrapper align-items-center justify-content-between d-flex">
            <div className="left col-4 d-flex align-items-center">
              <div className="language fs-5">EN
              </div>
              <div className="searchContainer rounded p-1 ms-2 d-flex align-items-center border border-2">
                <input type="text" placeholder='search item ....' className='border-0' />
                <i style={{color:"gray"}} class="fs-6 fa-solid  fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="center col-4 text-center">
              <h3 className="logo fw-bold">MTHR</h3>
            </div>
            <div className="right d-flex  align-items-center justify-content-end col-4" style={{cursor:"pointer"}}>
              <div className="menuItem me-2">
                register
              </div>
              <div className="menuItem me-2">
                sing in
              </div>
              <div className="menuItem">
              <Badge badgeContent={5} color="primary">
        <ShoppingCartOutlined/> 
      </Badge>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar