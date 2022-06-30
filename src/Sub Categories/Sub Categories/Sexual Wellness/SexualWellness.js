import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function SexualWellness() {

  let [sexualwellness, setSexualWellness] = useState([]);

  useEffect(() => {
    const fetchSexualWellness = async () => {
      let response = await axios.get("http://localhost:8000/sexualwellness");
      let sexualwellnessList = response.data;
      setSexualWellness(...sexualwellness, sexualwellnessList);
    }
    fetchSexualWellness();
  }, [])
  return (
    <div className=' container-fluid '>
      <div className='text-center'>
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/category/v1/3251/sexual_wellness.jpg" alt="" />
      </div>
      <AllProducts products={sexualwellness} />
    </div>
  )
}

export default SexualWellness