import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
function Wellness() {
  return (
    <div>
      <div className='container-fluid'>
        <NavLink to='/brands/accu-chek'>
          <img className='p-2 mb-3 img-fluid' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1645554707_Guide-1680px-x-320_Web.png" alt="" />
        </NavLink>
        <div>
          <Header />
        </div>
       
      </div>
    </div>
  )
}

export default Wellness