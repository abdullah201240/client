import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from '../assets/img/logo.png';
import { NavLinks } from './NavLinks';
import Categories from './Categories';
import Interior from '../assets/img/Interior-design-pana.png';
import { Button } from 'react-bootstrap';
import '../assets/css/UserLogin.css'; 
import Glogo from '../assets/img/google-removebg-preview.png';

import { Link, useNavigate } from 'react-router-dom';

export default function UserLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const loginwithgoogle = ()=>{
        window.open("http://localhost:8080/api/user/auth/google/callback","_self")
    }

   
   

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
            <div className="user-login-background">
                <Categories />
                <p className="signup-text" style={{ paddingRight: '13%' }}>If you have no account, please <Link to='/user/register' className="highlight-text">SIGN UP</Link></p>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={Interior} alt="Interior" className="interior-image" />
                        </div>
                        <div className="col-md-6 login-form-container user-login-container">
                            <h5 className="welcome-text text-center">Welcome to <span className="highlight-text">Interio!</span> Please Login</h5>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <div className="password-container">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        name="password" 
                                        className="form-control" 
                                        placeholder="Enter your password" 
                                    />
                                    <button 
                                        type="button" 
                                        className="toggle-password-visibility" 
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                                <a href="#" className="forgot-password">Forgot Password?</a>
                            </div>
                           <Link to='/user-home'> <Button type="submit" className="login-button">LOGIN</Button></Link>
                            <p className="or-text">Or</p>
                            <button type="submit" className="google-button" onClick={loginwithgoogle}>
                                <img src={Glogo} alt='Google logo' width={30} /> Sign in with Google
                            </button>
                        
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
