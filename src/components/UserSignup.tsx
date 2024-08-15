import React, { useState } from 'react';
import Interior from '../assets/img/Interior-design-pana.png';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo from '../assets/img/logo.png';
import Categories from './Categories';
import Glogo from '../assets/img/google-removebg-preview.png';
import { NavLinks } from './NavLinks';
import { Button } from 'react-bootstrap';
import '../assets/css/UserSignup.css';
import { Link } from 'react-router-dom';

export default function UserSignup() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
            <div className="user-signup-background">
                <Categories />
                <p className="signup-text" style={{ paddingRight: '21%' }}>
                    If you have an account, please <Link to='/user/login' className="highlight-text">Login</Link>
                </p>

                <div className="container user-signup-container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="welcome-text">
                                Create your <span className="highlight-text">Interio!</span> Account
                            </h5>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter your name" />
                            </div>
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
                                <p style={{ color: 'red', fontSize: 'small' }}>
                                    Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (@#$%^)
                                </p>
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" name="dob" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <br />
                                <select name="gender" className="form-control">
                                    <option value="">Please select one…</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="non-binary">Non-Binary</option>
                                    <option value="other">Other</option>
                                    <option value="prefer-not-to-answer">Prefer not to answer</option>
                                </select>
                            </div>
                            <Button type="submit" className="signup-button">Submit</Button>
                        </div>
                        <div className="col-md-6 signup-form-container">
                            <img src={Interior} alt="Interior" className="interior-image" />
                            <div className="form-group">
                                <label>Email Verification Code</label>
                                <input type="text" name="code" className="form-control" placeholder="6 digits code" />
                            </div>
                            <Button type="submit" className="signup-button">SIGN UP</Button>
                            <p className="or-text">Or</p>
                            <button type="submit" className="google-button">
                                <img src={Glogo} alt='Google logo' width={30} /> Sign Up with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
