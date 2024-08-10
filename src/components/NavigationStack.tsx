import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Terms from './Terms';
import Landing from './Landing';
import Refund from './Refund';
import Shipping from './Shipping';
export default function NavigationStack() {
  return (
    <div>
        <Routes>

        <Route path='/' element={<Landing />} /> 
        <Route path='/terms-conditions' element={<Terms />} /> 
        
        <Route path='/shipping-delivery' element={<Shipping />} /> 
        
        <Route path='/refund-returns' element={<Refund />} /> 
        <Route path='*' element={<Navigate to="/" />} />


        </Routes>
      
    </div>
  )
}
