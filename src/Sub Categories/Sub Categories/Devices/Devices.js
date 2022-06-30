import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function Devices() {

  let [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      let response = await axios.get("http://localhost:8000/devices");
      let devicesList = response.data;
      setDevices(...devices, devicesList);
    }
    fetchDevices();
  }, [])
  return (
    <div className=' container-fluid '>
      <NavLink className='nav-link text-center' to="/brands/volini">
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1649491766_Category_web.jpg" alt="" />
      </NavLink>
      <AllProducts products={devices} />
    </div>
  )
}

export default Devices