import React from 'react';
import '../assets/css/Footer.css';
import LogoWhite from '../assets/img/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AmerLogo from '../assets/img/AmarPay.png'
export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <img src={LogoWhite} alt="logo" className="footer-logo" />
            <ul className="footer-links">
              <li><a href="#">About Interio</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">What We Offer</a></li>
              <li><a href="#">Why Choose Interio?</a></li>
              <li><a href="#">Our Commitment</a></li>
              <li><a href="#">Join the Interio Community</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund and Return Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h6 className="footer-heading">Contact Information</h6>
            <p>We welcome your feedback on our customer service, merchandise, website, or any other topics you wish to share with us. Your comments and suggestions are greatly appreciated.</p>
            <p className="contact-details"><FontAwesomeIcon icon={faPhoneVolume} /> +8801896121201 (10:00 am - 6:00 pm)</p>
            <h6 className="contact-details"><FontAwesomeIcon icon={faEnvelope} /> service@interiobd.com</h6>
            <h4 style={{ color: 'white' }}>Payment Methods: <img src={AmerLogo} alt='Amerpay Logo' height={30} /></h4>
          </div>

          <div className="footer-column">
            <h6 className="footer-heading">Our Office Address</h6>
            <p>Lane- 01, House- 141 (4A), Baridhara <br/> DOHS, Dhaka- 1206</p>
            <br/><br/><br/>
            <h6 className="footer-heading">Social</h6>
            <div className="social-icons">
              <a className="social-icon" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a className="social-icon" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>All Rights Reserved by <a href="https://digirib.com/" className="text-white">Digirib</a> | {year}</p>
        </div>
      </div>
    </footer>
  );
}
