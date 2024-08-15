import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Terms from './Terms';
import Landing from './Landing';
import Refund from './Refund';
import Shipping from './Shipping';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import Cart from './Cart';
import SubCategories from './SubCategories';
import AllProduct from './AllProduct';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Product from './Product';
import UserHome from './UserHome';
import AdminHome from './AdminHome';
export default function NavigationStack() {
  return (
    <div>
        <Routes>

        <Route path='/' element={<Landing />} /> 
        <Route path='/terms-conditions' element={<Terms />} /> 
        
        <Route path='/shipping-delivery' element={<Shipping />} /> 
        
        <Route path='/refund-returns' element={<Refund />} /> 
        <Route path='/user/login' element={<UserLogin />} /> 
       
        <Route path='/user/register' element={<UserSignup />} /> 
        
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/product-category' element={<SubCategories />} /> 
      
        <Route path='/product' element={<AllProduct />} /> 
        <Route path='/about-us' element={<AboutUs />} /> 
        
        <Route path='/contact-us' element={<Contact />} /> 
        <Route path='/product-details' element={<Product />} /> 
        
        <Route path='/user-home' element={<UserHome />} /> 
        <Route path='/admin-home' element={<AdminHome />} /> 

        

        <Route path='*' element={<Navigate to="/" />} />

      
        </Routes>
      
    </div>
  )
}
