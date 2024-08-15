import Navbar from './Navbar';
import Footer from './Footer';
import Logo from '../assets/img/logo.png';
import Categories from './Categories';
import '../assets/css/Shipping.css'
import { NavLinks } from './NavLinks';

export default function Terms() {
  

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
              <br/>

       <Categories />
       <br></br>
      <div className="container container2 py-4" style={{ backgroundColor: 'rgb(242, 238, 232)' }}>
       
        <h2 className="my-4">Terms & Conditions</h2>
        <br></br>
        <br></br>

        <p className="text-justify">
        Welcome to Interiobd.com also hereby known as “we”, “us” or “Interio”. Please read these Terms & Conditions carefully before using this Site. By using the Site, you hereby accept these terms and conditions and represent that you agree to comply with these terms and conditions (the “User Agreement”). This User Agreement is deemed effective upon your use of the Site which signifies your acceptance of these terms. If you do not agree to be bound by this User Agreement please do not access, register with, or use this Site. This Site is owned and operated by Interio. (Registration number: TRAD/DNCC/089234/2024)
        </p>
        
        <p className="text-justify">
        The Site reserves the right to change, modify, add, or remove portions of these Terms and Conditions at any time without any prior notification. Changes will be effective when posted on the Site with no other notice provided. Please check these Terms and Conditions regularly for updates. Your continued use of the Site following the posting of changes to the Terms and Conditions of use constitutes your acceptance of those changes.           </p>
       
      </div>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}
