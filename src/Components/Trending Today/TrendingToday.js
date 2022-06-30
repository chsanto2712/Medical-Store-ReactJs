import React from 'react'
import './TrendingToday.css'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function TrendingToday() {
  return (
    <div className='bg-white'>
      <div className='px-2'>
        <p className='h4 mb-4'>Trending Today</p>
      </div>
      <Swiper
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
          <NavLink className="img-wrapper" to="/brands/health-vit">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1652120515_Healthvit-Upto-web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="img-wrapper" to="/brands/skin-elements">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1641490492_Skin-Elements_web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="img-wrapper" to="/brands/spray-mintt">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1637218765_Spary-Mint_web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="img-wrapper" to="/brands/mintveda">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1652422751_Mintveda_web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="img-wrapper" to="/brands/dr-odin">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1652423578_Dr_Odin_web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink className="img-wrapper" to="brands/netmeds">
            <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1634972793_Netmeds-masks_Mini_Banner__Web.jpg" className="d-block w-100  rounded" alt="..." />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default TrendingToday