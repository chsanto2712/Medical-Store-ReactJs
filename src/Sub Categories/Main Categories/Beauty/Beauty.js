import React from 'react'
import { NavLink } from 'react-router-dom'
import FeaturedBrands from './FeaturedBrands'
function Beauty() {
  return (
    <div className='container-fluid'>
      <NavLink to="/brands/street-wear">
        <img className='img-fluid mb-5 rounded' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1653373219_Streetwear_web.jpg" alt="" />
      </NavLink>
      <div className='px-2'>
        <p className='h4 mb-4'>In The Spotlight</p>
      </div>
      <NavLink to="/brands/plum">
        <img className='img-fluid rounded mb-4' src="https://www.netmeds.com/images/cms/section/images/1647857476_1680x320_Web.jpg" alt="" />
      </NavLink>
      <FeaturedBrands />
    </div>
  )
}

export default Beauty