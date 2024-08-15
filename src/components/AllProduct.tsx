import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from '../assets/img/logo.png';
import Categories from './Categories';
import { NavLinks } from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/bestSellingProducts.css';
import P1 from '../assets/img/P1.png';
import P2 from '../assets/img/P2.png';
import P3 from '../assets/img/P3.png';
import P4 from '../assets/img/P4.png';
import P5 from '../assets/img/P5.png';
import P6 from '../assets/img/P6.png';
import P7 from '../assets/img/P7.png';
import P8 from '../assets/img/P8.png';
import { Link } from 'react-router-dom';
export default function AllProduct() {
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
        <div style={{background:'#F1F1F1'}}>
        <Categories /> 
          <div className="container my-5">
            <h4 className="mb-4"><FontAwesomeIcon icon={faHouse} /> Home/Mikasa Ply/Fire Guardian</h4>
            <div className="row"> 
                <div className="col-md-3 mb-3">
                    <div className="card h-100">
                        <img className="card-img-top" src={P1} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Product 1</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p style={{ color: 'orange' }}>10,000 BDT</p>

                            <Link to='/product-details' className="see-all-btn">See Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={P2} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Product 2</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p style={{ color: 'orange' }}>10,000 BDT</p>

                            <Link to='/product-details' className="see-all-btn">See Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={P3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Product 3</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p style={{ color: 'orange' }}>10,000 BDT</p>

                            <Link to='/product-details' className="see-all-btn">See Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={P4} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Product 4</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p style={{ color: 'orange' }}>10,000 BDT</p>

                            <Link to='/product-details' className="see-all-btn">See Details</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={P5} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Product 5</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p style={{ color: 'orange' }}>10,000 BDT</p>

                            <Link to='/product-details' className="see-all-btn">See Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={P6} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Product 6</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p style={{ color: 'orange' }}>10,000 BDT</p>

                            <Link to='/product-details' className="see-all-btn">See Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={P7} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Product 7</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p style={{ color: 'orange' }}>10,000 BDT</p>

                            <Link to='/product-details' className="see-all-btn">See Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={P8} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Product 8</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p style={{ color: 'orange' }}>10,000 BDT</p>

                            <Link to='/product-details' className="see-all-btn">See Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />


      
    </div>
  )
}
