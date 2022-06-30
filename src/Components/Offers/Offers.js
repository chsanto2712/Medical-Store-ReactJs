import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './Offers.css'
function Offers() {
    return (
        <div className='bg-white d-flex justify-content-between pb-5'>
            <div className="card border-secondary" style={{"width": "20rem","borderRadius":"12px","boxShadow": "0px 0px 100px lightgrey"}}>
                <NavLink to="medicine" className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg" className="nav-link img-fluid rounded-start w-100" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Order Medicine</h5>
                            <p className="card-text p1">Save upto 25% off</p>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="card text-dark border-secondary" style={{"width": "20rem","borderRadius":"12px","boxShadow": "0px 0px 100px lightgrey"}}>
                <NavLink to="/beauty" className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg" className="nav-link img-fluid rounded-start w-100" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Beauty</h5>
                            <p className="card-text p1">Save upto 40% off</p>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="card border-secondary" style={{"width": "20rem","borderRadius":"12px","boxShadow": "0px 0px 100px lightgrey"}}>
                <NavLink to="/wellness" className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg" className="nav-link img-fluid rounded-start w-100" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Wellness</h5>
                            <p className="card-text p1">Flat 15% off</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Offers