import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Supplements.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import axios from 'axios';
function Supplements() {
    const postData = async(data) => {
        await axios.post(`http://localhost:8000/cart`, data);
        console.log(data);
    }
    let [supplement, setSupplement] = useState([])

    useEffect(() => {
        const fetchMedicines = async () => {
            let response = await axios.get("http://localhost:8000/wellness");
            let supplementList = response.data;
            setSupplement(...supplement, supplementList);
        }
        fetchMedicines();
    }, [])
    return (
        <div>
            <div className='bg-white'>
                <div className='px-2'>
                    <p className='h4 mb-4'>Supplement of the week</p>
                </div>
                {supplement.length === 0 && <p className='h3 text-warning text-center'>Data Loading...</p>}
                <Swiper
                    style={{
                        "--swiper-navigation-color": "black",
                    }}
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mx-2 mr-2 mb-5"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }}
                >

                    {
                        supplement.map((data, key) =>
                            <SwiperSlide key={key} className='text-start'>
                                {data.length === 0 && <p className=''>Data Loading</p>}
                                <NavLink className="card cd border-dark g-0" to={`/${data.category}/${data.id}`} style={{ height: "23rem", width: "14rem" }}>
                                    <div className="card-title">
                                        {data.mrp !== data.price && <span className='mx-2 mt-2 badge text-uppercase fw-small' style={{ backgroundColor: "#84BE52", position: "fixed" }}>{(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}%off</span>}
                                        <img src={data.img} style={{ maxHeight: "150px" }} className=' w-75 img pt-2 p-1 rounded card-img-top' />
                                    </div>
                                    <div className="card-body ellipsis">
                                        <h6 className="ct card-title " style={{ lineHeight: "1.5em", height: "3em", overflow: "hidden" }}>{data.name}</h6>
                                        <div className='text-muted fs-6 fst-italic' style={{ overflow: "hidden", whiteSpace: "nowrap" }}>Mkt: {data.manufracture}</div>
                                        <div className='text-muted h6'>Best Price* <span className='fw-bold' style={{ color: "#EF4482" }}>₹ {data.price}</span> </div>
                                        <div className='text-muted'>Mrp
                                            <span className='px-2 text-decoration-line-through'>
                                                ₹{data.mrp}
                                            </span>
                                        </div>
                                        <button onClick={() => postData(data)} className="btn w-100 fw-bold text-uppercase" style={{ backgroundColor: "#24AEB1", color: "white" }}>Add To Cart</button>
                                    </div>
                                </NavLink>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Supplements