import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from '../assets/img/logo.png';
import { NavLinks } from './NavLinks';
import Categories from './Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
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
      <Categories />

      <div className="container my-5">
          <FontAwesomeIcon icon={faHouse} className="me-2 text-secondary" />
          <span className="mx-2 text-secondary">Home</span> / <span className="text-primary mx-2">Contact Us</span>

        <div className="row my-5">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4 text-primary">Hi there!</h2>
            <p className="mb-4 text-muted">
              We welcome your feedback on our customer service, merchandise,
              website, or any other topics you wish to share with us. Your
              comments and suggestions are greatly appreciated.
            </p>

            <div className="contact-info">
              <div className="mb-4">
                <FontAwesomeIcon icon={faPhoneVolume} className="me-2 text-secondary" /> 
                <strong className='text-primary'>Call Us:</strong> 
                <span className='ms-2 text-muted'>+8801896121201</span> <br />
                <small className="text-muted">(10:00 am - 6:00 pm)</small>
              </div>

              <div className="mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-secondary" />
                <strong className='text-primary'>Email Us:</strong> 
                <span className='ms-2 text-muted'>service@interiobd.com</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="text-primary mb-3">
              <FontAwesomeIcon icon={faLocationDot} className="me-2 text-secondary" /> 
              Office Address
            </h3>
            <p className="mb-4 text-muted">Lane- 01, House- 141 (4A), Baridhara DOHS, Dhaka- 1206</p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.094111885213!2d90.40748097999!3d23.81525223119368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c734aabf4565%3A0x4a0c852d9ab982e7!2sDigirib!5e0!3m2!1sen!2sbd!4v1723380884298!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: '2px solid #ddd', borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
