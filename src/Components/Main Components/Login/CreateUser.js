import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './Login.css'
import { useNavigate } from 'react-router';
const CreateUser = () => {
    var para = document.getElementById("para");
    para = "Hello"
    const navigate = useNavigate();
    const [found, setFound] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const postData = async (data) => {
        let response = await axios.post("http://localhost:8000/users", { ...data, cart: [] });
        navigate("/user/login");
        // console.log(response.data)
    }
    const validateUser = async (data) => {
        let found = false;
        let response = await axios.get("http://localhost:8000/users");

        response.data.map((element) => {
            if (element.email === data.email || element.phoneno === data.phoneno) {
                found = true;
                setFound(true);
            }

        })
        if (found !== true) {
            postData(data)
        }

    }
    const onFormSubmit = (data) => {
        // console.log(data)
        validateUser(data);
    }
    return (
        <div className='container'>
            <p className='para'></p>
            <div className='m-5 shadow row p-4' style={{ borderRadius: "20px" }}>
                <div className="col-12 col-md-12 col-lg-7 col-sm-12">
                    <img className='img-fluid mb-2' src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="" />
                </div>
                <div className="col-12 col-md-12 col-lg-5 col-sm-12">
                    <h3>Create Account</h3>
                    <br />
                    <div>
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <div className='mb-4'>
                                <label htmlFor='firstname' className='fs-6 text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>First Name</label>
                                <input type="text" autoComplete='off' className='pe-5 mx-2 mt-2 w-100 ips form-control' placeholder='Your First Name' name="firstname" id="firstname" {...register("firstname", { required: "true" })} />
                                {errors.firstname?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your First Name</span>}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='lastname' className='fs-6 text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Last Name</label>
                                <input type="text" autoComplete='off' className='pe-5 mx-2 mt-2 w-100 ips form-control' placeholder='Your Last Name' name="lastname" id="lastname" {...register("lastname", { required: "true" })} />
                                {errors.lastname?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your Last Name</span>}
                            </div>
                            <div className='mt-4 mb-4'>
                                <label htmlFor='email' className='fs-6 text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Email Id</label>
                                <input type="email" autoComplete='off' className='pe-5 mx-2 mt-2 w-100 ips form-control' placeholder='Enter Email Id' name="email" id="email" {...register("email", { required: "true" })} />
                                {errors.email?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your E-mail ID!</span>}
                            </div>
                            <div className="mb-4 row">
                                <span className='fs-6 text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Phone Number</span>
                                <br />
                                <div className='col-1'>
                                    <label htmlFor='phoneno' autoComplete='off' className='fw-light' style={{ fontSize: "25px" }}>+91|</label>
                                </div>
                                <div className='col-11'>
                                    <input type="text" autoComplete='off' className='pe-5 mx-2 mt-2 w-75 ips form-control' placeholder='Enter Phone Number no' name="phoneno" id="phoneno" maxLength="10" {...register("phoneno", { required: "true", minLength: 10 })} />
                                </div>
                                {errors.phoneno?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your Phone No!</span>}

                            </div>
                            <div className='mb-2'>
                                <label htmlFor='password' className='fs-6 text-uppercase' style={{ color: "#32AEB1", fontWeight: "500" }}>Password</label>
                                <input type="password" autoComplete='off' className='pe-5 mx-2 mt-2 w-100 ips form-control' placeholder='Enter Your Password' name="password" id="password" {...register("password", { required: "true", minLength: 8, maxLength: 16 })} />
                                {errors.password?.type === "required" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Please enter your Password</span>}
                                {errors.password?.type === "minLength" && <span className='h6 fst-italic text-danger' style={{ color: "#E34340" }}>Password must be minimum 8 Characters in length</span>}
                            </div>
                            {found === true && <p className='h6 fst-italic text-danger'>This Account exists already with given Email or Phone No</p>}
                            <button className='mt-5 text-uppercase fw-bold w-100 btn' style={{ backgroundColor: "#32AEB1", color: "white", letterSpacing: "2px" }} type="submit">Verify</button>
                        </form>
                    </div>
                </div>
                <p id="invalidAccount"></p>
            </div>
            <div>
                <p className='text-center text-muted'>
                    By continuing you agree to our Terms of service
                    <br />
                    and Privacy & Legal Policy.</p>
            </div>
        </div>
    )
};

export default CreateUser;
