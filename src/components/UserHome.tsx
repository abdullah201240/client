import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import AllCategories from './AllCategories';
import Categories from './Categories';
import WhyChooseInterio from './WhyChooseInterio';
import Steps from './Steps';
import HeroSection from './HeroSection';
import Logo from '../assets/img/logo.png'
import { UserNavLinks } from './UserNavlinks';
import JustForYou from './JustForYou';
import '../assets/css/slider.css'
import BestSellingProducts from './BestSellingProducts';

export default function UserHome() {
  return (
    <div>
      <Navbar
        phone="+8801896121201"
        email="service@interiobd.com"
        logo={Logo}
        searchPlaceholder="Search for products..."
        navLinks={UserNavLinks}
        showCartIcon={true}
      />
      <br></br>
      <div style={{ background: '#F1F1F1' }}>
        <Categories />
        <HeroSection />
        <AllCategories />
        <JustForYou />
        <BestSellingProducts />
        <WhyChooseInterio />

      </div>
      <Steps />

      <Footer />


    </div>
  )
}
