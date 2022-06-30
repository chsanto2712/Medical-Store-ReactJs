import React from 'react'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function PopularCategories() {
    return (
        <div>
            <div className='bg-white'>
                <div className='px-2'>
                    <p className='h4 mb-4'>Popular Categories</p>
                </div>
                <Swiper
                    className="mySwiper mx-2 mr-2 mb-5"
                    style={{
                        "--swiper-navigation-color": "black",
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <NavLink className="card cd mb-4 card-rounded" to="/covid" style={{ borderRadius: "3%" }}>
                            <img src="https://www.netmeds.com/images/category/3055/thumb/covid_essentials_1.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                            <div className="card-body">
                                <h6 className="ct card-title ">Covid Essentials</h6>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="card cd" to="/sexual-wellness" style={{ borderRadius: "3%" }}>
                            <img src="https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg" alt="" className='img pt-2 p-1 img-center rounded card-img-top' />
                            <div className="card-body">
                                <h6 className="ct card-title">Sexual Wellness</h6>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="card cd" to="/fitness" style={{ borderRadius: "3%" }}>
                            <img src="https://www.netmeds.com/images/category/3222/thumb/vitamins_and_supplements_1.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                            <div className="card-body">
                                <h6 className="ct card-title">Fitness</h6>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="card cd" to="/homeopathy" style={{ borderRadius: "3%" }}>
                            <img src="https://www.netmeds.com/images/category/491/thumb/homeopathy_1.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                            <div className="card-body">
                                <h6 className="ct card-title">Homeopathy</h6>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink className="card cd" to="/ayurvedic" style={{ borderRadius: "3%" }}>
                            <img src="https://www.netmeds.com/images/category/482/thumb/ayurvedic_1.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                            <div className="card-body">
                                <h6 className="ct card-title">Ayurvedic</h6>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default PopularCategories