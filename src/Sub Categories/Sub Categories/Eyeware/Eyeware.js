import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function Eyeware() {

  let [eyeware, setEyeware] = useState([]);

  useEffect(() => {
    const fetchEyeware = async () => {
      let response = await axios.get("http://localhost:8000/eyewear");
      let eyewareList = response.data;
      setEyeware(...eyeware, eyewareList);
    }
    fetchEyeware();
  }, [])
  return (
    <div className=' container-fluid '>
      <div className='nav-link text-center'>
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/category/3052/eyewear_0.jpg" alt="" />
      </div>
      <AllProducts products={eyeware} />
    </div>
  )
}

export default Eyeware