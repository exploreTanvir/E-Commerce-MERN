import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="container">
        <div className="wrapper align-items-center justify-content-between d-flex">
            <div className="left col-4 d-flex align-items-center">
              <div className="language fs-5">EN
              </div>
              <div className="searchContainer p-1 ms-2 d-flex align-items-center border border-2">
                <input type="text" className='border-0' />
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="center col-4">
              center
            </div>
            <div className="right col-4">right</div>
        </div>
    </div>
  )
}

export default Navbar