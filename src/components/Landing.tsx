import Navbar from './Navbar';
import Footer from './Footer';
import AllCategories from './AllCategories';
import Categories from './Categories';
import WhyChooseInterio from './WhyChooseInterio';
import BestSellingProducts from './BestSellingProducts';
import Steps from './Steps';
import HeroSection from './HeroSection';
import '../assets/css/slider.css'
import Logo from '../assets/img/logo.png'
import { NavLinks } from './NavLinks'
export default function Landing() {
   
    return (
        <div>
            <Navbar
        phone="+8801896121201"
        email="service@interiobd.com"
        logo={Logo}
        searchPlaceholder="Search for products..."
        navLinks={NavLinks}
        showCartIcon={true}
      />
            <br></br>
            <div style={{ background: '#F1F1F1' }}>
                <Categories />
                <HeroSection/>
                <AllCategories/>
                <BestSellingProducts/>
                <WhyChooseInterio/>

            </div>
            <Steps/>

            <Footer />
        </div>
    );
}
