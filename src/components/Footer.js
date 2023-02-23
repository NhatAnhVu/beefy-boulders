import React from 'react';
import logo from '../images/637f4050c50e553ac6234f18_beefylogoblack-p-500.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__flexbox">
        <div className="footer__logo">
          <img src={logo} alt="beefy-boulder-logo" />
        </div>
        <div className="footer__follow">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/BeefyBoulders" target="_blank" >Facebook</a>
          <a href="https://www.instagram.com/beefyboulders/" target="_blank" >Instagram</a>
          <a href="https://www.youtube.com/@BeefyBoulders" target="_blank" >Youtube</a>
        </div>
        <div className="footer__link">
          <h4>Links</h4>
          <Link to="/contact">
            Contact
          </Link>
          <HashLink to="/#review">
            Reviews
          </HashLink>
          <HashLink to="/about#FAQ">
            F.A.Q
          </HashLink>
        </div>
      </div>
      <div className="footer__address">
        Address: 2QCM+FR3, Yên Hoà, Cầu Giấy, Hà Nội, Vietnam, Hanoi, Vietnam
      </div>
      <div className="footer__copyright">
        Copyright © 2022 Beefy Boulders. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer