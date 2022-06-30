import React from 'react'
import './NewArrivals.css'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function TrendingToday() {
  return (
    <div className='bg-white'>
      <div className='px-2'>
        <p className='h4 mb-4'>New Arrivals</p>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
        }}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mx-2 mr-2 mb-5"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <NavLink className="img-wrapper" to="/brands/palmist">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1652962011_Palmist_Web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="img-wrapper" to="/brands/dr-odin">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1652961665_Dr_Odin_web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="img-wrapper" to="/brands/skin-cottage">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1652961381_Skin-Cottage_web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="img-wrapper" to="/brands/lemme-be">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1652961075_Lemme-Be_web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default TrendingToday