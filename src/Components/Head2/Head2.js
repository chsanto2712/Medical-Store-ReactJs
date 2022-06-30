// Free Slider $$$$$$$$$$$$$$$$$$
import React from 'react'
import './Head2.css'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function Head2() {
    return (
        <div className='bg-white text-white'>
            {/* Categories */}
            <div className='head2 pb-3'>
                <ul className='ul row text-center'>
                    {/* Medicine */}
                    <li className='medicine col-3'>
                        <NavLink className="nl nav-link" to="medicine">
                            <img src="https://www.netmeds.com/assets/version1652203053/gloryweb/images/icons/medicine.svg" className='' alt="" />
                            Medicine
                        </NavLink>
                    </li>
                    {/* Wellness */}
                    <li className='wellness col-3'>
                        <NavLink className="nl nav-link" to="wellness">
                            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" className='' alt="" />
                            Wellness
                        </NavLink>
                    </li>
                    {/* Lab Tests */}
                    <li className='lab-tests col-3'>
                        <NavLink className="nl nav-link" to="lab-tests">
                            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" className='' alt="" />
                            Lab Tests
                        </NavLink>
                    </li>
                    {/* Beauty */}
                    <li className='beauty col-3'>
                        <NavLink className="nl nav-link" to="beauty">
                            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" className='' alt="" />
                            Beauty
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Sub categories */}
            <div className="container">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "black",
                    }}
                    slidesPerView={12}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mx-2 mr-2 mb-5"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 12,
                            spaceBetween: 10,
                        },
                    }}
                >
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="covid">COVID Essentials</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="diabetes">Diabetes</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="eyewear">Eyewear</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="ayush">Ayush</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="ayurvedic">Ayurvedic</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="homeopathy">Homeopathy</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="fitness">Fitness</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="mom-baby">Mom & Baby</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="devices">Devices</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="surgicals">Surgicals</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="sexual-wellness">Sexual Wellness</NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="nl nav-link" to="treatments">Treatments</NavLink>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Head2