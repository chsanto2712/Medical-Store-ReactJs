import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function MomAndBaby() {

  let [momandbaby, setMomAndBaby] = useState([]);

  useEffect(() => {
    const fetchMomAndBaby = async () => {
      let response = await axios.get("http://localhost:8000/momandbaby");
      let momandbabyList = response.data;
      setMomAndBaby(...momandbaby, momandbabyList);
    }
    fetchMomAndBaby();
  }, [])
  return (
    <div className=' container-fluid '>
      <NavLink className='nav-link text-center' to="/brands/maxi">
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1649356712_WEB_Mom__baby-1000X200.png" alt="" />
      </NavLink>
      <AllProducts products={momandbaby} />
    </div>
  )
}

export default MomAndBaby