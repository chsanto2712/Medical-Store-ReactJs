import React from 'react'
import { useForm } from 'react-hook-form'
import './LabTests.css'
function LabTests() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onFormSubmit = (data) => {
		console.log(data);
		document.getElementById("success").innerHTML="Thank you for registering!";
		document.getElementById("myForm").reset();
	}
	return (
		<div className='mb-5 p-4'>
			<div className="row">
				<div className="col-12 col-md-12 col-lg-8 col-sm-12">
					<img className='img-fluid mb-2' src="https://www.netmeds.com/images/cms/wysiwyg/cms/1635266868_WhatsApp_Image_2021-10-26_at_21.56.07.jpg" alt="" />
				</div>
				<div className="card col-12 col-md-12 col-lg-4 col-sm-12">
					<form onSubmit={handleSubmit(onFormSubmit)} className="p-2">
						<span>Please fill in your details</span>
						<div className='w-100 mb-3' style={{}}>
							<label className='label'>Name</label>
							<input className='ip form-control' type="text" name="name" id="name" maxLength="50" {...register("name", { required: "true" })} />
							{errors.name?.type === "required" && <p className='h6' style={{ color: "#E34340" }}>Please enter your Name!</p>}
						</div>
						<div className='w-100 mb-3' style={{ fontWeight: "600" }}>
							<label className='label'>Mobile Number</label>
							<input type="tel" className='ip form-control' name="phoneno" id="phoneno" maxLength="10" {...register("phoneno", { required: "true", minLength: 10 })} />
							{errors.phoneno?.type === "required" && <p className='h6' style={{ color: "#E34340" }}>Please enter your Mobile number!</p>}
							{errors.phoneno?.type === "minLength" && <p className='h6' style={{ color: "#E34340" }}>Please enter a valid Mobile number!</p>}
						</div>
						<div className='w-100 mb-3' style={{ fontWeight: "600" }}>
							<label className='label'>Pincode</label>
							<input type="tel" className='ip form-control' name="pincode" id="pincode" maxLength="6" {...register("pincode", { required: "true", minLength: 6 })} />
							{errors.pincode?.type === "required" && <p className='h6' style={{ color: "#E34340" }}>Please enter the Pincode!</p>}
							{errors.pincode?.type === "minLength" && <p className='h6' style={{ color: "#E34340" }}>Please provide a valid Pincode!</p>}
						</div>
						<div className='w-100 mb-3' style={{ fontWeight: "600" }}>
							<label className='label w-100'>Choose Package</label>
							<select className='w-100 form-select' name="package" id="package" {...register("package", { required: "true" })}>
								<option disabled value="0">Select</option>
								<option value="1">Netmeds Swasthya</option>
								<option value="2">Fever Profile</option>
								<option value="3">Netmeds Cough-Fever Cold Package</option>
								<option value="4">Anaemia Profile</option>
								<option value="5">Thyroid Tests</option>
								<option value="6">Basic Allergy Package</option>
								<option value="7">Netmeds Healthy Heart</option>
								<option value="8">Advanced Heart Care</option>
								<option value="9">Netmeds Diabetic Checkup</option>
								<option value="10">Vitamin Tests</option>
								<option value="11">Netmeds Advanced Care</option>
								<option value="12">Covid Antibody GT Profile</option>
								<option value="13">Covid Antibody IGG</option>
								<option value="14">Covid Antibody Total</option>
							</select>
						</div>
						<div className='w-100 mb-3' style={{ fontWeight: "600" }}>
							<input type="checkbox" name="agree" id="agree" {...register("agree", { required: true })} />
							<label htmlFor='agree' className='mx-1'>I agree to Netmeds Terms and Conditions.</label>
							{errors.agree?.type === "required" && <p className='h6' style={{ color: "#E34340" }}>Please Agree Netmeds Terms and Conditions</p>}
						</div>
						<div>
							<button type="submit" className='btn w-100 text-white' style={{ backgroundColor: "#32AEB1" }}>Book Now</button>
						</div>
						<div className='mt-3'>
							<p style={{color:"#6E9333"}} id='success'></p>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LabTests