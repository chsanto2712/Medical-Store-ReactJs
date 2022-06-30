import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import {faXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserAccount() {

  let {register,handleSubmit} = useForm()
  let [user, setUser] = useState({});
  let [cart, setCart] = useState(0);
  
  const getUser = async () => {
    let response = await axios.get("http://localhost:8000/currentLoggedInUser");
    setUser(response.data[0]);
  }

  let [inputType,setInputType] = useState("password")
  let [invalidOldPassword,setInvalidOldPassword] = useState(false)
  let [togglePassword,setTogglePassword] = useState(false)
  let [passwordUpdated,setPasswordUpdated] = useState(false)
  const changeInputType = () =>{
    if(inputType==="password")
      setInputType("text")
    else
      setInputType("password")
  }

  const getCart = async () => {
    let response=await axios.get("http://localhost:8000/cart");
    setCart(response.data.length)
  }

  useEffect(() => {
    getUser();
    getCart();
  }, [])

  const updatePassword = (passwordObject) =>{
    if(passwordObject.oldPassword !== user.password)
    {
      setInvalidOldPassword(true)
      setTimeout(() => {
        setInvalidOldPassword(false)
      }, 4000);
    }
    else
    {
      let response = axios.put(`http://localhost:8000/users/${user.id}`,{...user, password : passwordObject.newPassword})
      let response2 = axios.put(`http://localhost:8000/currentLoggedInUser/${user.id}`,{...user, password : passwordObject.newPassword})
      setPasswordUpdated(true)
      setTimeout(()=>{
        setPasswordUpdated(false)
        window.location.reload()
      },4000)
    }
  }

  return (
    <div className='container mb-5'>
      <p className='h4 mb-3'>Your Account</p>
      <div className="row">
        <div className="col-4 card rounded p-3 h-50">
          <div className="row">
            <div className="col-2">
              <img src="https://www.netmeds.com/msassets/images/icons/profile-icon.svg" alt="" />
            </div>
            <div className="col-10">
              <p>
                <span className='h4 text-uppercase'>{user.firstname + " " + user.lastname}</span>
                <br />
                <span className='text-italic text-muted'>{user.email}</span>
                <br />
                <span className='text-muted'>+91-{user.phoneno}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7 card border-none rounded p-2">
          <div className="row">
            <div className="col-5">
              <p className='text-uppercase text-muted'>Login Information</p>
              <p>
                <span className='text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Email</span>
                <br />
                <span style={{ fontWeight: "400" }}>{user.email}</span>
                <hr />
                <br />
                <span className='text-uppercase fs-6' style={{ color: "#32AEB1", fontWeight: "500" }}>Mobile Number</span>
                <p>+91 - {user.phoneno}</p>
                <hr />
                <br />
              </p>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              <p className='text-uppercase text-muted'>Personal Information</p>
              <p>
                <span className='text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Full Name</span>
                <br />
                <span className='text-uppercase' style={{ fontWeight: "400" }}>{user.firstname + " " + user.lastname}</span>
                <hr />
                <br />
                <span className='text-uppercase fs-6' style={{ color: "#32AEB1", fontWeight: "500" }}>No Of Items In Cart</span>
                <p>{cart}</p>
                <hr />
                <br />
              </p>
              
            </div>
            
          </div>
        </div>
      </div>
      <p className='text-uppercase text-muted'>User Settings</p>
      {togglePassword===false && <button type='button' className="btn btn-dark" onClick={()=>setTogglePassword(true)}>Change Password</button>
      }
      {
        togglePassword===true && 
        <form onSubmit={handleSubmit(updatePassword)}>
          <div className='d-flex justify-content-between'>
            <p className='text-uppercase text-muted fs-6 my-auto'>Change Password</p>
            <button type='button' className='btn btn-secondary btn-sm' onClick={()=>setTogglePassword(false)}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
          </div>
          <br />
          <input type="password" className="fs-5 form-control " id="floatingConfirmPassword" placeholder="Old Password" {...register("oldPassword")}/>
          <br />
          <div className='input-group mt-3 mb-3'>
            <input type={inputType} className="form-control fs-5" id="floatingConfirmPassword" placeholder="New Password" {...register("newPassword")}/>
            <button type="button" onClick={changeInputType} className="input-group-btn btn btn-dark">
            {
              inputType==="password" 
              ?<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
              :<FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
            }
            </button>
          </div>
          <br />
          {invalidOldPassword && <p className='text-danger'>Please re-enter current password correctly</p>}
          {passwordUpdated && <p className='text-success'>Password Updated Successfully</p>}
          <button type='submit' className='btn btn-success'>Save</button>
        </form>
      }
    </div>
  )
}

export default UserAccount