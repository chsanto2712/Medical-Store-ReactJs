import React from 'react'
import { Route, Routes } from 'react-router-dom';
// Header
import Head1 from '../Head1/Head1';
import Head2 from '../Head2/Head2';
// Home Page
import Home from '../Home/Home';
import Cart from '../Main Components/Cart/Cart';
import UploadBill from '../Main Components/UploadBill';
import Login from '../Main Components/Login/Login';
import CreateUser from '../Main Components/Login/CreateUser';
import UserLogin from '../Main Components/Login/UserLogin';
import UserAccount from '../Main Components/Login/UserAccount';
// Main Categories
import Medicine from '../../Sub Categories/Main Categories/Medicine/Medicine';
import Wellness from '../../Sub Categories/Main Categories/Wellness/Main/Wellness';
import LabTests from '../../Sub Categories/Main Categories/Lab Tests/LabTests';
import Beauty from '../../Sub Categories/Main Categories/Beauty/Beauty';
// Sub Categories
import Covid from '../../Sub Categories/Sub Categories/Covid/Covid';
import Diabetes from '../../Sub Categories/Sub Categories/Diabetes/Diabetes';
import Eyeware from '../../Sub Categories/Sub Categories/Eyeware/Eyeware';
import Ayush from '../../Sub Categories/Sub Categories/Ayush/Ayush';
import Ayurvedic from '../../Sub Categories/Sub Categories/Ayurvedic/Ayurvedic';
import Homeopathy from '../../Sub Categories/Sub Categories/Homeopathy/Homeopathy';
import Fitness from '../../Sub Categories/Sub Categories/Fitness/Fitness';
import MomAndBaby from '../../Sub Categories/Sub Categories/Mom & Baby/MomAndBaby'
import Devices from '../../Sub Categories/Sub Categories/Devices/Devices';
import Surgicals from '../../Sub Categories/Sub Categories/Surgicals/Surgicals';
import SexualWellness from '../../Sub Categories/Sub Categories/Sexual Wellness/SexualWellness';
import Treatments from '../../Sub Categories/Sub Categories/Treatments/Treatments';
import Product from '../../Sub Categories/Main Categories/Product';
import BrandProduct from '../../Sub Categories/Brands/BrandProduct';
// Error Page
import ErrorPage from '../ErrorPage';

function Header() {
  return (
    <div className='bg-white'>
      <Head1 />
      <Head2 />
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home />} />
        <Route path='/upload-bill' element={<UploadBill />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/customer/login/*' element={<Login />} />
        <Route path='/new-user/login' element={<CreateUser />} />
        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/user/account' element={<UserAccount />} />
        {/* Main categories */}
        <Route path='/medicine' element={<Medicine />} />
        <Route path='/wellness' element={<Wellness />} />
        <Route path='/lab-tests' element={<LabTests />} />
        <Route path='/beauty' element={<Beauty />} />

        {/* Sub Categories */}
        <Route path='/covid' element={<Covid />} />
        <Route path='/diabetes' element={<Diabetes />} />
        <Route path='/eyewear' element={<Eyeware />} />
        <Route path='/ayush' element={<Ayush />} />
        <Route path='/ayurvedic' element={<Ayurvedic />} />
        <Route path='/homeopathy' element={<Homeopathy />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/mom-baby' element={<MomAndBaby />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/surgicals' element={<Surgicals />} />
        <Route path='/sexual-wellness' element={<SexualWellness />} />
        <Route path='/treatments' element={<Treatments />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/brands/:category' element={<BrandProduct />} />
        <Route path='/:category/:id' element={<Product />} />
      </Routes>


    </div>
  )
}

export default Header