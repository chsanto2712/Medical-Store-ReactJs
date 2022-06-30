import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductObj from '../ProductObj'
function Medicine() {

	let [medicine, setMedicines] = useState([])

	useEffect(() => {
		const fetchMedicines = async () => {
			let response = await axios.get("http://localhost:8000/medicine")
			let medicineList = response.data;
			setMedicines(...medicine, medicineList);
		}
		fetchMedicines();
	}, [])
	return (

		<div className='container-fluid'>
			<p className='h4 mb-4'>Popular Medicines</p>
			<ProductObj products={medicine} />
		</div>


	)
}

export default Medicine