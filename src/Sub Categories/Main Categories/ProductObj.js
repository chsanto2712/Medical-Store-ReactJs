import axios from 'axios';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
function ProductObj({ products }) {
	let navigate = useNavigate();
	const updateQuantity = async (data) => {
		console.log(data)
		let response = await axios.get(`http://localhost:8000/cart/${data.id}`);
		console.log(response.data.qty)
		let response1 = await axios.put(`http://localhost:8000/cart/${data.id}`, { ...response.data, qty: response.data.qty + 1 })
		console.log(response1.data)
		// navigate("/cart");
	}

	const sendCartItemsToUsersAccount = async () => {
		let currentUser = await axios.get("http://localhost:8000/currentLoggedInUser")
		let cartItems = await axios.get("http://localhost:8000/cart");
		let userData = { ...currentUser.data[0], cart: [...cartItems.data] };
		let postdata = await axios.put(`http://localhost:8000/users/${currentUser.data[0].id}`, userData);
	}

	const postData = async (data) => {
		await axios.post(`http://localhost:8000/cart`, { ...data, qty: 1 });
		// navigate("/cart");
		console.log(data)
		console.log("post : ", data)
		sendCartItemsToUsersAccount();
		window.location.reload()
	}

	const getData = async (data) => {
		let found = false;
		let response = await axios.get(`http://localhost:8000/cart`);
		// let cartItems = response.data;
		response.data.forEach((element) => {
			if (element.id === data.id) {
				updateQuantity(data);
				found = true;
				// break;
			}
		})
		if (found === false)
			postData(data);

		navigate("/cart");
		window.location.reload()
	}
	return (
		<div>
			<div>
				{
					products.map((data, key) =>
						<div key={key}>
							<div className="card mb-3" style={{ maxWidth: "70%" }}>
								<NavLink to={`/medicine/${data.id}`} className="row g-0">
									<div className="col-md-3  text-center">
										<img src={data.img} className="img-fluid mt-5 rounded w-50" alt={data.name} />
									</div>
									<div className="col-md-9">
										<div className="card-body">
											<h5 className="card-title">{data.name}</h5>
											<div className="card-text text-muted">
												<div className='h6'>Best Price* <span className='fw-bold' style={{ color: "#EF4281" }}>₹ {data.price}</span> </div>
												<div>Mrp:
													<span className='text-decoration-line-through'>
														₹ {data.mrp}
													</span>
													{data.mrp !== data.price && <span className='mx-2 text-uppercase text-success fw-bold h6'>get {(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}% off</span>}
												</div>
											</div>
											<div className='mt-3 text-muted'>
												<div>Origin: {data.origin}</div>
												<div className='fst-italic'>Mkt: {data.manufracture}</div>
											</div>
										</div>
									</div>
								</NavLink>
								<div className='text-end m-3'>
									{data.instock === "true" && <button type='submit' onClick={() => getData(data)} className='btn' style={{ backgroundColor: "#24aeb1", color: "white" }}>Add To Cart</button>}
									{(data.instock === "false" && data.available === "false") && <p className='btn text-white bg-secondary'><span className='fw-bold'>Not Available</span></p>}
									{(data.instock === "false" && data.available === "true") && <p className='btn text-white bg-secondary'><span className='fw-bold'>Out Of Stock</span></p>}
								</div>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
}
export default ProductObj