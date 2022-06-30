import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
const UserLogin = () => {
  const navigate = useNavigate();
  const [unsuccessfulValidation, setunsuccefulValidation] = useState(false);
  const [successfulValidation,setSuccessfulValidation] = useState(false);
  let [currUser, setCurrUser] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm()

  // const postData = async () => {
  //   let currentUser = await axios.get("http://localhost:8000/currentLoggedInUser")
  //   console.log(cartItems.length)
  //   if (cartItems.length > 0 && done === false) {
  //     // let response = await axios.post("http://localhost:8000/cart", {...currentUser.data[0].cart});\
  //     console.log("hello")
  //     let Data = currentUser.data[0].cart;
  //     console.log(Data)
  //     done = true;
  //     await axios.post(`http://localhost:8000/cart`, Data);
  //     // post(currentUser.data[0].cart);
  //     // console.log(response)
  //     // await axios.post("http://localhost:8000/cart", currentUser.data[0].cart);
  //   }
  // }

  const PostProductItem = async (pData) => {
    console.log(pData)
    let res = await axios.post(`http://localhost:8000/cart`, pData)
  }

  const postData = async (loginData) => {
    let response = await axios.post("http://localhost:8000/currentLoggedInUser", loginData)
    console.log(loginData.cart)
    let Data = loginData.cart
    console.log(response)
    Data.map((element) => {
      PostProductItem(element);
    })

    // let cartItems = currentUser.data[0].cart;
  }

  const getData = async () => {
    let response = await axios.get("http://localhost:8000/currentLoggedInUser");
    let data = response.data[0];
    setCurrUser(...currUser, data)
  }

  // const sendCartItemsToUsersAccount = async () => {
  //   getData();
  //   let currentUser = await axios.get("http://localhost:8000/currentLoggedInUser")
  //   let currentUserId = currentUser.data;
  //   // console.log(currentUserId[0].id)
  //   let cartItems = await axios.get("http://localhost:8000/cart");
  //   let postdata = await axios.post(`http://localhost:8000/users/${currentUserId[0].id}`, { ...currentUserId[0], cart: [...cartItems.data] });
  // }

  const validateUser = async (loginData) => {
    let found = false;
    let response = await axios.get("http://localhost:8000/users");
    response.data.map((element) => {
      if (element.email === loginData.email && element.password === loginData.password) {
        found = true;
        postData(element)
        // sendCartItemsToUsersAccount();
        // console.log(loggedInuser)
      }
    })
    if (found === true) {
      // postData(loginData)
      setSuccessfulValidation(true)
      setTimeout(() => {
        navigate('/')
        window.location.reload();  
      }, 3000);
    }
    else
    {
      setunsuccefulValidation(true)
      setTimeout(() => {
        setunsuccefulValidation(false)
      }, 5000);
    }
  }
  const onFormSubmit = (loginData) => {
    validateUser(loginData)
  }
  return (
    <div className='container'>
      <div className='m-5 shadow row p-4' style={{ borderRadius: "20px" }}>
        <div className="col-12 col-md-12 col-lg-7 col-sm-12">
          <img className='img-fluid mb-2' src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="" />
        </div>
        <div className="col-12 col-md-12 col-lg-5 col-sm-12">
          <h3>Login</h3>
          <p className='text-muted'>Log in to access your orders, special offers, health tips and more!</p>
          <br />
          <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className='mb-4'>
                <label htmlFor='email' className='fs-6 text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Email</label>
                <input type="email" autoComplete='off' className='pe-5 mx-2 mt-2 w-100 ips form-control' placeholder='Your Email' name="email" id="email" {...register("email", { required: "true" })} />
                {errors.email?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your Email!</span>}
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='fs-6 text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Password</label>
                <input type="password" autoComplete='off' className='pe-5 mx-2 mt-2 w-100 ips form-control' placeholder='Your Password' name="password" id="password" {...register("password", { required: "true" })} />
                {errors.password?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your Password!</span>}
              </div>
              {unsuccessfulValidation && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Invalid Email or Password</span>}
              {successfulValidation && <span className='h6 fst-italic text-success' style={{ color: "#E34340" }}>Login Successful ! Redirecting to Home Page...</span>}
              <button className='mt-5 text-uppercase fw-bold w-100 btn' style={{ backgroundColor: "#32AEB1", color: "white", letterSpacing: "2px" }} type="submit">Verify</button>
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

export default UserLogin;
