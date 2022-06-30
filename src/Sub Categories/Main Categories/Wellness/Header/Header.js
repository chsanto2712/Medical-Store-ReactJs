import React from 'react'
import PopularCategories from '../Popular Categories/PopularCategories'
import Supplements from '../Supplements/Supplements'
// import { Route, Routes, NavLink } from 'react-router-dom'
function Header() {
  return (
    <div>
        <PopularCategories />
        <Supplements />
    </div>
  )
}

export default Header