import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function Surgicals() {

  let [surgicals, setSurgicals] = useState([]);

  useEffect(() => {
    const fetchSurgicals = async () => {
      let response = await axios.get("http://localhost:8000/surgicals");
      let surgicalsList = response.data;
      setSurgicals(...surgicals, surgicalsList);
    }
    fetchSurgicals();
  }, [])
  return (
    <div className=' container-fluid '>
      <div className='text-center'>
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/category/3081/surgical_0.jpg" alt="" />
      </div>
      <AllProducts products={surgicals} />
    </div>
  )
}

export default Surgicals