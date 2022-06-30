import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import BrandProducts from './BrandProducts';
function Maxi() {

  let [maxi, setMaxi] = useState([]);
  const fetchMaxi = async () => {
    let response = await axios.get("http://localhost:8000/maxi");
    console.log(response);
    let ayurvedicList = response.data;
    setMaxi(...maxi, ayurvedicList);
  }
  useEffect(() => {
    fetchMaxi();
  }, [])
  return (
    <div className=' container-fluid '>
      <BrandProducts products={maxi} />
    </div>
  )
}

export default Maxi