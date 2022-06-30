import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function Ayush() {

  let [ayush, setAyush] = useState([]);

  useEffect(() => {
    const fetchAyush = async () => {
      let response = await axios.get("http://localhost:8000/ayush");
      let ayushList = response.data;
      setAyush(...ayush, ayushList);
    }
    fetchAyush();
  }, [])
  return (
    <div className=' container-fluid '>
      <div className='text-center' to="/brands/revital">
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/category/481/ayush_0.jpg" alt="" />
      </div>
      <AllProducts products={ayush} />
    </div>
  )
}

export default Ayush