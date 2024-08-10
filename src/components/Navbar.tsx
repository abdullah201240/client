import React from 'react';
import '../assets/css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logo.png';

export default function Navbar() {
  return (
    <div>
      <div className="contact-bar">
        <FontAwesomeIcon icon={faPhoneVolume} className="fa-icon" />
        <h1 style={{color:'white'}}>+8801896121201</h1>
        <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
        <h1 style={{color:'white'}}>service@interiobd.com</h1>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Logo} alt="Logo" className="navbar-logo" />
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item search-item">
              <div className="search-bar">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Help & Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">LOGIN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SIGN UP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
