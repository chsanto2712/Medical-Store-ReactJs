import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
function Cart() {
  let navigate = useNavigate();
  let done = false
  const [usercart, setCart] = useState([]);
  let [totalMRP, setTotalMRP] = useState(0);
  let [totalDiscount, setTotalDiscount] = useState(0);
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  // var userLoggedIn = false;
  const changeRoute = () => {
    navigate("/");
  }
  // const loggedInUser = async () => {
  //   let response = await axios.get("http://localhost:8000/currentLoggedInUser")
  //   // console.log()
  //   let Data = response.data;
  //   if (Data[0].firstname !== null)
  //     userLoggedIn = true;
  //   else
  //     userLoggedIn = false;
  // }
  // const sendCartItemsToUsersAccount = async () => {
  //   let currentUser = await axios.get("http://localhost:8000/currentLoggedInUser")
  //   if (currentUser.data.length === 1) {
  //     // let userData = { ...currentUser.data[0], cart: [cartItems.data] };
  //     let postdata = await axios.post(`http://localhost:8000/users/${currentUser.data[0].id}`, { ...currentUser.data[0], cart: [cart] });
  //   }
  // }

  // const post = async (data) => {
  //   let currentUser = await axios.get("http://localhost:8000/currentLoggedInUser")
  //   console.log(data[0])
  //   await axios.post(`http://localhost:8000/cart`, data);
  // }

  // const postData = async () => {
  //   let currentUser = await axios.get("http://localhost:8000/currentLoggedInUser")
  //   let cartItems = currentUser.data[0].cart;
  //   console.log(cartItems.length)
  //   if (cartItems.length > 0 && done === false) {
  //     // let response = await axios.post("http://localhost:8000/cart", {...currentUser.data[0].cart});\
  //     console.log("hello")
  //     let Data=currentUser.data[0].cart;
  //     console.log(Data)
  //     done = true;
  //     await axios.post(`http://localhost:8000/cart`, Data);
  //     // post(currentUser.data[0].cart);
  //     // console.log(response)
  //     // await axios.post("http://localhost:8000/cart", currentUser.data[0].cart);
  //   }
  // }

  // const postDataToCart = async () => {
  //   let currentUser = await axios.get("http://localhost:8000/currentLoggedInUser")
  //   postData()
  //   // currentUser.data.map((element) => {

  //   // })
  //   let Data = currentUser.data;
  //   // let user = await axios.get(`http://localhost:8000/users/${currentUser.data[0].id}`);
  //   // console.log(user)
  //   // let userCartData = {};
  //   // console.log(userCartData);
  //   // setCart(userCartData);
  //   // console.log(usercart)
  //   // if()
  // }

  const fetchCartItems = async () => {
    let response1 = await axios.get("http://localhost:8000/currentLoggedInUser")
    let Data = response1.data;
    console.log(Data)
    // if (Data.length > 0) {
    //   postDataToCart();
    //   // postData();
    // }
    // loggedInUser();
    let response = await axios.get("http://localhost:8000/cart");
    let cartItems = response.data;
    setCart(cartItems)
    response.data.map(data => totalMRP = totalMRP + ((+data.mrp) * (+data.qty)))
    response.data.map(data => totalDiscount = totalDiscount + (data.price - data.mrp) * data.qty)
    setTotalMRP(totalMRP);
    setTotalDiscount(-totalDiscount);
    // sendCartItemsToUsersAccount();
  }

  useEffect(() => {
    fetchCartItems();
  }, [])

  const deleteItem = async (data) => {
    await axios.delete(`http://localhost:8000/cart/${data.id}`);
    // sendCartItemsToUsersAccount(data);
    window.location.reload()
  }

  return (
    <div className='container'>
      {usercart.length === 0 &&
        <div className=''>
          <p className='h4 mb-4'>My Cart</p>
          <div className='mt-5 mb-5 container text-center'>
            <img className=' img-fluid' style={{ width: "15rem" }} src="https://www.netmeds.com/msassets/images/emptycart.svg" alt="" />
            <p className='fs-5'>Your Cart is empty!</p>
            <p className='fs-6 mb-4 text-muted'>You have no items added in the cart.
              <br />
              Explore and add products you like!</p>
            <button onClick={changeRoute} className='px-5 fw-bold text-uppercase btn' style={{ backgroundColor: "#32AEB1", color: "white", width: "350px" }}>Add Products</button>
          </div>
        </div>
      }
      {usercart.length !== 0 &&
        <div>
          <p className='h4 mb-4'>Order Summary</p>
          <div id="carouselExampleIndicators" className="shadow carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators" style={{ color: "#32AEB1" }}>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654275506_569x90.jpg" className="img-fluid rounded d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654018707_Cart_Bannerdsfgsd.jpg" className="img-fluid rounded d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654018800_Cart_Bannersip.jpg" className="img-fluid rounded d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1654020514_Cart_Bannersip.jpg" className="img-fluid rounded d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className='row mt-5'>
            <div className="rounded shadow col-12 col-sm-12 col-md-6 col-lg-7">
              {
                usercart.map((data, key) =>
                  <div key={key} className='row p-3' >
                    <div className='col-4'>
                      <img className='img-fluid ' src={data.img} alt="" />
                    </div>

                    <div className='col-8 card-title'>
                      <p className='h6 mb-4'>{data.name}</p>
                      <p className='text-muted mb-4 fst-italic'>Mfr: {data.manufracture}</p>
                      <div className='text-muted'>
                        <span className='fw-bold' style={{ color: "#EF4482" }}>Rs.{data.price}</span>
                        <span className='text-muted px-2 text-decoration-line-through'>Rs.{data.mrp}</span>
                        {data.mrp !== data.price && <span className='mx-2 text-uppercase text-success fw-bold h6'>get {(((data.mrp - data.price) / data.mrp) * 100).toPrecision(2)}% off</span>}
                      </div>
                      <div>QTY:{data.qty}</div>
                      <div>
                        <button className="btn float-end text-uppercase" onClick={() => deleteItem(data)} style={{ backgroundColor: "#F6F6F7" }}>Remove</button>
                      </div>
                    </div>
                    <hr />
                  </div>
                )
              }
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-5 mt-4 mb-4'>
              <div className="card shadow rounded p-4">
                <p className='h6 mb-4 text-uppercase text-muted'>Payment Details</p>
                <div className='d-flex justify-content-between'>
                  <p className='fs-6'>MRP Total</p>
                  <p className='fs-6'>Rs.{(totalMRP).toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='fs-6'>Netmeds Discount</p>
                  <p className='fs-6'>-Rs.{(totalDiscount).toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className='fs-6 fw-bold'>Total Amount *</p>
                  <p className='fs-6'>Rs.{((totalMRP - totalDiscount)).toFixed(2)}</p>
                </div>
                <div className='w-100 mb-3' style={{ backgroundColor: "#F3F8EC" }}>
                  <p className='p-1 ps-2 pt-2 text-uppercase' style={{ color: "#3F9438", fontWeight: "500" }}>Total Savings Rs.{(totalDiscount).toFixed(2)}</p>
                </div>
                <div className='row'>
                  <div className="col-5">
                    <p className='fs-6 text-muted'>Total Amount </p>
                    <span className='h5 fw-bold'>Rs.{((totalMRP - totalDiscount)).toFixed(2)}</span>
                  </div>
                  <div className="col-7">
                    <button className='w-100 btn p-2' style={{ backgroundColor: "#24AEB1", color: "white" }}>Proceed</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart