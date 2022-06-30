import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import AllProducts from '../AllProducts';
function Ayurvedic() {

  let [ayurvedic, setAyurvedic] = useState([]);
  const fetchAyurvedic = async () => {
    let response = await axios.get("http://localhost:8000/ayurvedic");
    console.log(response);
    let ayurvedicList = response.data;
    setAyurvedic(...ayurvedic, ayurvedicList);
  }
  useEffect(() => {
    fetchAyurvedic();
  }, [])
  return (
    <div className=' container-fluid '>
      <AllProducts products={ayurvedic} />
    </div>
  )
}

export default Ayurvedic