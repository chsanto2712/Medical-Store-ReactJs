import React from 'react'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function FeaturedBrands() {
    return (
        <div>
            <div className='px-2'>
                <p className='h4 mb-4'>Featured Brands</p>
            </div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "black",
                }}
                className="mySwiper mx-2 mr-2 mb-5"
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                pagination={{
                    clickable: true,
                }}
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
                    <NavLink className="card cd" to="/brands/maybelline">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/maybelline.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title ">Maybelline</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/garnier">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/garnier.jpg" alt="" className='img pt-2 p-1 img-center rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Garnier</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/myglamm">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/myglamm.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Myglamm</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/colorbar">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/colorbar.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Colorbar</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/plum">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/plum.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Plum</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default FeaturedBrands