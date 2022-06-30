import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function Covid() {

  let [diabetes, setDiabetes] = useState([]);

  useEffect(() => {
    const fetchDiabetes = async () => {
      let response = await axios.get("http://localhost:8000/diabetes");
      let diabetesList = response.data;
      setDiabetes(...diabetes, diabetesList);
    }
    fetchDiabetes();
  }, [])
  return (
    <div className=' container-fluid '>
      <NavLink className='nav-link text-center' to="/brands/dr-vaidyas">
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1652377082_Category-Banners-Web-1000X200.jpg" alt="" />
      </NavLink>
      <AllProducts products={diabetes} />
    </div>
  )
}

export default Covid