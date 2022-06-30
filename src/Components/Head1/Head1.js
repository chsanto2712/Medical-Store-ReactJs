import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Head1.css'
import { NavLink } from 'react-router-dom';
function Head1() {
	const navigate = useNavigate();
	let [noOfItemsInCart, setnoOfItemsInCart] = useState(0);
	const [loggedInUser, setLoggedInUser] = useState([]);

	const fetchCartItems = async () => {
		let response = await axios.get("http://localhost:8000/cart");
		console.log(response.data.length);
		setnoOfItemsInCart(response.data.length);
	}

	const fetchLoggedInUser = async () => {
		let response = await axios.get("http://localhost:8000/currentLoggedInUser");
		if (response.data.length === 1) {
			setLoggedInUser(response.data);
		}
	}

	const navigateToAccount = () => {
		navigate('/user/account');
	}

	const removeItem = async (id) => {
		let removeitem = await axios.delete(`http://localhost:8000/cart/${id}`);
		console.log(removeitem)
	}

	const emptyCartItems = async () => {
		let cartitems = await axios.get("http://localhost:8000/cart");
		console.log(cartitems);
		if (loggedInUser[0].cart.length === 0) {
			let data = { ...loggedInUser[0], cart: cartitems.data }
			let response = await axios.put(`http://localhost:8000/users/${loggedInUser[0].id}`, data);
			console.log(response)
		}
		else {
			let data = { ...loggedInUser[0], cart: [] }
			let response1 = await axios.put(`http://localhost:8000/users/${loggedInUser[0].id}`, data);
			console.log(response1)
			let data1 = { ...loggedInUser[0], cart: cartitems.data }
			let response2 = await axios.put(`http://localhost:8000/users/${loggedInUser[0].id}`, data1);
			// console.log(response1)
			console.log(response2)
		}
		console.log(cartitems)
		cartitems.data.map((element) => {
			console.log(element)
			removeItem(element.id);
		})
	}

	const logOut = async () => {
		let response = await axios.get("http://localhost:8000/currentLoggedInUser")
		emptyCartItems();
		let logoutUser = await axios.delete(`http://localhost:8000/currentLoggedInUser/${response.data[0].id}`);
		navigate('/');
		window.location.reload();
	}

	useEffect(() => {
		fetchCartItems();
		fetchLoggedInUser();
	}, [])
	return (
		// Head1		
		<nav className="p-3 pt-3 head sticky-top navbar navbar-dark navbar-expand-xl ">
			<div className="container-fluid">
				{/* Logo */}
				<NavLink className="navbar-brand" to="">
					<div className='logo'>
						<img className='' src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="netmeds" />
					</div>
				</NavLink>
				{/* Search Bar */}
				<div className="search-bar p-2 ms-5">
					<div className='pin-code pe-2 pt-1'>
						<span>Deliver to <span style={{ color: "rgb(89, 218, 221)", fontFamily: "sans-serif", fontSize: "16px", fontWeight: "bold" }}>110002</span></span>
					</div>
					<div className='vl'></div>
					<div className='search'>
						<form className="form my-2 my-lg-0">
							<input className="form-control inp" type="search" placeholder="Search for medicine & wellness products" aria-label="Search" />
						</form>
					</div>
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
						{/* Upload Bill */}
						<li className="nav-item text-right ">
							<div className=' upload-bill'>
								<NavLink className="p1 active nav-link" to="upload-bill">
									<img src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg" alt="" />
									Upload
								</NavLink>
							</div>
						</li>
						{/* Cart */}
						<li className="nav-item text-right">
							<div className='cart'>
								<NavLink className='p1 active nav-link position-relative' to="cart">
									<img src="https://www.netmeds.com/assets/gloryweb/images/icons/cart_icon.svg" alt="" />
									Cart
									<span className="position-absolute end-50 translate-middle badge rounded-pill bg-danger">
										{noOfItemsInCart}
									</span>
								</NavLink>
							</div>
						</li>
						{/* Login/Signup */}
						<li className="nav-item text-right ">
							<div className='login-signup'>
								<span className='p1'>
									{
										loggedInUser.length === 1 &&
										<span>
											<Dropdown>
												<Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold text-white'>
													<img src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg" alt="" />
													{loggedInUser[0].firstname + " " + loggedInUser[0].lastname}
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item onClick={navigateToAccount}>Account</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</span>
									}
									{
										loggedInUser.length === 0 &&
										<span>
											<NavLink className="active" style={{ color: "white" }} to="/customer/login">
												<img src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg" alt="" />
												Sign In / Sign Up
											</NavLink>
										</span>}
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Head1;