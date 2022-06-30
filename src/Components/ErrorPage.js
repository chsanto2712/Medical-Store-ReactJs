import React from 'react'
import { useNavigate } from 'react-router-dom'
function ErrorPage() {
  const navigate=useNavigate();
  const navigateToHome = () => {
    navigate("/");
  }
  return (
    <div className='container text-center'>
      <div className="row pb-5">
        <div className="col-8 text-end">
          <img className='img-fluid' src="https://www.netmeds.com/assets/gloryweb/images/404.png" alt="" />
        </div>
        <div className="col-4">
          <p className='pt-5 mt-5' style={{ fontWeight: "bold" }}>It looks like you are lost</p>
          <p className='text-muted'>
            The page you are looking for no longer exist.
            <br />
            Don’t stress, we have a way out for you
          </p>
          <button onClick={navigateToHome} className="btn text-uppercase fw-bold w-75" style={{ backgroundColor: "#32AEB1", color: "white" }}>Go To Home</button>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <img className='img-fluid' src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" alt="" />
        </div>
        <div className="col-10">

        </div>
      </div>
    </div>
  )
}

export default ErrorPage