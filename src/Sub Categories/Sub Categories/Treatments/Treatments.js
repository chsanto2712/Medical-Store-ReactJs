import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AllProducts from '../AllProducts';
function Treatments() {

  let [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const fetchTreatments = async () => {
      let response = await axios.get("http://localhost:8000/treatments");
      let treatmentsList = response.data;
      setTreatments(...treatments, treatmentsList);
    }
    fetchTreatments();
  }, [])
  return (
    <div className=' container-fluid '>
      <NavLink className='nav-link text-center' to="/brands/ourdaily">
        <img className='img-fluid rounded' src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1653417883_Ourdaily-Range-Banners-for-Marketing_1000x200.jpg" alt="" />
      </NavLink>
      <AllProducts products={treatments} />
    </div>
  )
}

export default Treatments