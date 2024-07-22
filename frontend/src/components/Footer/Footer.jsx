import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets.js'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='logo' src={assets.logo} alt="" />
                    <p>description text</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In touch</h2>
                    <ul>
                        <li>+1-212-245-789</li>
                        <li>islam.salama.ie@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copright 2024 © dishdrift.com - All Right Reserved</p>
        </div>
    )
}

export default Footer
