import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function Fitness() {

  let [fitness, setFitness] = useState([]);

  useEffect(() => {
    const fetchFitness = async () => {
      let response = await axios.get("http://localhost:8000/fitness");
      let fitnessList = response.data;
      setFitness(...fitness, fitnessList);
    }
    fetchFitness();
  }, [])
  return (
    <div className=' container-fluid '>
      <NavLink className='nav-link text-center' to="/brands/revital">
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1651776805_Category_web.jpg" alt="" />
      </NavLink>
      <AllProducts products={fitness} />
    </div>
  )
}

export default Fitness