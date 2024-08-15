import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../assets/css/AdminNavbar.css'
function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="btn btn-orange text-white" href="#">Create Sub Admin</a>
            </li>
            <li className="nav-item active ml-3">
              <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
