import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/navbar.css';

interface NavLink {
  label: string;
  to?: string;
  href?: string;
  isDropdown?: boolean;
  dropdownItems?: { label: string; to: string; icon: React.ReactNode; }[];
}

interface NavbarProps {
  phone: string;
  email: string;
  logo: string;
  searchPlaceholder?: string;
  navLinks: NavLink[];
  showCartIcon?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  phone,
  email,
  logo,
  searchPlaceholder = 'Search',
  navLinks,
  showCartIcon = true,
}) => {
  return (
    <div>
      <div className="contact-bar">
        <FontAwesomeIcon icon={faPhoneVolume} className="fa-icon" />
        <h1 style={{ color: 'white' }}>{phone}</h1>
        <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
        <h1 style={{ color: 'white' }}>{email}</h1>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/'> <img src={logo} alt="Logo" className="navbar-logo" /> </Link>
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item search-item">
              <div className="search-bar">
                <input className="form-control" type="search" placeholder={searchPlaceholder} aria-label="Search" />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </div>
            </li>
            {navLinks.map((link, index) => (
              <li key={index} className={`nav-item ${link.isDropdown ? 'dropdown' : ''}`}>
                {link.isDropdown ? (
                  <>
                    <a className="nav-link dropdown-toggle" href="#" id={`navbarDropdown${index}`} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {link.label}
                    </a>
                    <div className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                      {link.dropdownItems?.map((item, i) => (
                        <Link key={i} className="dropdown-item" to={item.to}>
                          {item.icon}
                          <span style={{ marginLeft: '10px' }}>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  link.to ? (
                    <Link className="nav-link" to={link.to}>{link.label}</Link>
                  ) : (
                    <a className="nav-link" href={link.href}>{link.label}</a>
                  )
                )}
              </li>
            ))}
            {showCartIcon && (
              <li className="nav-item">
                <Link className="nav-link" to="#"><FontAwesomeIcon icon={faCartShopping} /></Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
