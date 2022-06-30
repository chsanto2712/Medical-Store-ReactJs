import React from 'react'
import './TopBrands.css'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function TrendingToday() {
    return (
        <div className='bg-white'>
            <div className='px-2'>
                <p className='h4 mb-4'>Top Brands</p>
            </div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "black",
                }}
                className="mySwiper mx-2 mr-2 mb-5"
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
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
                    <NavLink className="card cd" to="/brands/maxi">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/maxi.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title ">Maxi</h6>
                            <h6 className='card-content'>up to 50%</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/skin-elements">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/skin-elements.jpg" alt="" className='img pt-2 p-1 img-center rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Skin Elements</h6>
                            <h6 className='card-content'>up to 50%</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/dr-vaidyas">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dr-vaidyas.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Dr Vaidyas</h6>
                            <h6 className='card-content'>up to 20% off</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/dabur">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dabur.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Dabur</h6>
                            <h6 className='card-content'>up to 30%</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/accu-chek">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/accu-chek.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Accu Chek</h6>
                            <h6 className='card-content'>up to 25% off</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/novaherbs">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/novaherbs.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Novaherbs</h6>
                            <h6 className='card-content'>up to 20% off</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/origin-nutrition">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/origin-nutrition.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Origin Nutrition</h6>
                            <h6 className='card-content'>flat 15% off</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/durex">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/durex.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Durex</h6>
                            <h6 className='card-content'>up to 25% off</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/dettol">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/dettol.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Dettol</h6>
                            <h6 className='card-content'>up to 20% off</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/himalaya">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/himalaya.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Himalaya</h6>
                            <h6 className='card-content'>up to 39% off</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide>
                    <NavLink className="card cd" to="/brands/mamaearth">
                        <img src="https://www.netmeds.com/images/cms/wysiwyg/brand/v2/msite/mamaearth.jpg" alt="" className='img pt-2 p-1 rounded card-img-top' />
                        <div className="card-body">
                            <h6 className="ct card-title">Mamaearth</h6>
                            <h6 className='card-content'>up to 30% off</h6>
                        </div>
                    </NavLink>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default TrendingToday