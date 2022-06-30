import axios from 'axios';
import React from 'react';
// import './BrandProduct.css';
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom';

function BrandProduct() {
    let navigate = useNavigate();
    const { category } = useParams();
    const [product, setProduct] = useState([]);
    const getProduct = async () => {
        let response = await axios.get(`http://localhost:8000/${category}`);
        console.log(response)
        let productList = response.data;
        setProduct(productList);
        console.log(productList)
    }
    useEffect(() => {
        getProduct();
    }, [])

    const updateQuantity = async (data) => {
        console.log(data)
        let response = await axios.get(`http://localhost:8000/cart/${data.id}`);
        let updatedQty = response.data.qty
        let response1 = await axios.put(`http://localhost:8000/cart/${data.id}`, { ...response.data, qty: updatedQty + 1 })
        navigate("/cart");
    }

    const sendCartItemsToUsersAccount = async () => {
        let currentUser = await axios.get("http://localhost:8000/currentLoggedInUser")
        let cartItems = await axios.get("http://localhost:8000/cart");
        let userData = { ...currentUser.data[0], cart: [...cartItems.data] };
        let postdata = await axios.put(`http://localhost:8000/users/${currentUser.data[0].id}`, userData);
    }

    const postData = async (data) => {
        data.qty = 1;
        await axios.post(`http://localhost:8000/cart`, data)
        sendCartItemsToUsersAccount();
        navigate("/cart");
        console.log("post : ", data)
        window.location.reload()
    }

    const getData = async (data) => {
        let found = false;
        let response = await axios.get(`http://localhost:8000/cart`);
        // let cartItems = response.data;
        response.data.forEach((element) => {
            if (element.id === data.id) {
                updateQuantity(data);
                found = true;
                // break;
            }
        })
        if (found === false)
            postData(data);

        navigate("/cart");
        window.location.reload()
    }

    return (
        <div className='mx-5 row'>
            <div>
                <p className='h4 mb-4 mx-3 text-capitalize'>Brand:{category} All Products</p>
            </div>
            {
                product.map((data, key) =>
                    <div key={key} className='text-start col-10 col-sm-6 col-md-4 col-lg-3'>
                        <div className="card cd border-dark m-3" >
                            <div>
                                <NavLink to={`/${data.category}/${data.id}`}>
                                    <div className="card-title">
                                        {data.mrp !== data.price && <span className='mx-2 mt-2 badge text-uppercase fw-small' style={{ backgroundColor: "#84BE52", position: "absolute" }}>{(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}%off</span>}
                                        <img src={data.img} style={{ maxHeight: "150px" }} className='w-75 img pt-2 p-1 rounded card-img-top' />
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
                                    </div>
                                </NavLink>
                                <button className="mt-1 btn w-100 fw-bold text-uppercase" onClick={() => getData(data)} style={{ backgroundColor: "#24AEB1", color: "white" }}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BrandProduct