import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Explore a world of culinary delights at KIET Cafe. Indulge your taste buds with our exquisite dishes and unwind in our inviting ambiance. Experience culinary bliss today!</p>
                <div className='footer-social-icons'>
                    <a href="https://www.facebook.com/kiet.edu/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.facebook_icon} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/kiet_edu?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitter_icon} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/school/kiet-group-of-institutions/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkedin_icon} alt="" />
                    </a>
                    

                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <a href="#navbar">
                        <li>Home</li>
                    </a>
                    <a href="https://www.kiet.edu/" target='_blank'>
                        <li>About us</li>
                    </a>
                    <a>
                        <li>Delivery</li>
                    </a>
                    <a href="#footer-copyright">
                        <li>Privacy Policy</li>
                    </a>
                    
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+111-222-333</li>
                    <li>contact@kiet@kiet.edu</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright' id='footer-copyright'>Copyright 2023 © KIET.com- All Right Reserved.</p>
    </div>
  )
}

export default Footer