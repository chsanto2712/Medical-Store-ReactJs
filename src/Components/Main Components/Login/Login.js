import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router';
const Login = () => {
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm()
	const [users, setusers] = useState([]);
	const [data,setdata]=useState();
	const onFormSubmit = (userData) => {
		let found = false;
		setdata(userData)
		// console.log(users)
		users.map((user) => {
			if (user.phoneno === userData.phoneno) {
				found = true;
			}
		})
		if (found === true) {
			navigate('/user/login');
		}
		else {
			navigate('/new-user/login')
		}
	}
	const getUsers = async () => {
		let getUsers = await axios.get("http://localhost:8000/users");
		let usersData = getUsers.data;
		setusers(usersData);
		// console.log(usersData)
	}
	useEffect(() => {
		getUsers();
	}, [])

	return (
		<div className='container'>
			<div className='m-5 shadow row p-4' style={{ borderRadius: "20px" }}>
				<div className="col-12 col-md-12 col-lg-7 col-sm-12">
					<img className='img-fluid mb-2' src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="" />
				</div>
				<div className="col-12 col-md-12 col-lg-5 col-sm-12">
					<h3>Sign In / Sign Up</h3>
					<p className='text-muted'>Sign up or Sign in to access your orders, special offers, health tips and more!</p>
					<br />
					<div>
						<span className='fs-6 text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Phone Number</span>
						<br />
						<form onSubmit={handleSubmit(onFormSubmit)} className='row'>
							<div className='col-1'>
								<label htmlFor='phoneno' className='fw-light' style={{ fontSize: "25px" }}>+91|</label>
							</div>
							<div className='col-11'>
								<input type="text" className='ps-1 pe-5 mx-2 mt-2 w-75 ips form-control' autoComplete='off' placeholder='Enter Phone Number no' name="phoneno" id="phoneno" maxLength="10" {...register("phoneno", { required: "true", minLength: 10 })} />
							</div>
							{errors.phoneno?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your Phone No!</span>}
							<br />
							<button className='mt-5 text-uppercase fw-bold w-100 btn' style={{ backgroundColor: "#32AEB1", color: "white", letterSpacing: "2px" }} type="submit">Validate</button>
						</form>
					</div>
				</div>
			</div>
			<div>
				<p className='text-center text-muted'>By continuing you agree to our Terms of service
					<br />and Privacy & Legal Policy.</p>
			</div>
		</div>
	)
};

export default Login;
