import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function Homeopathy() {

  let [homeopathy, setHomeopathy] = useState([]);

  useEffect(() => {
    const fetchHomeopathy = async () => {
      let response = await axios.get("http://localhost:8000/homeopathy");
      let homeopathyList = response.data;
      setHomeopathy(...homeopathy, homeopathyList);
    }
    fetchHomeopathy();
  }, [])
  return (
    <div className=' container-fluid '>
      <AllProducts products={homeopathy} />
    </div>
  )
}

export default Homeopathy