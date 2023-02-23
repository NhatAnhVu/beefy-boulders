import React, { useState } from 'react'
import logo from '../images/637f4050c50e553ac6234f18_beefylogoblack-p-500.png';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav>
      <div className='blank-space'></div>
      <nav className='navbar'>
        <NavLink className='navbar__logo' to='/'>
          <img src={logo} alt="beefy-boulder-logo" className='navbar__logo--img' />
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars />
        </div>
        <div className={`navbar__elements  ${showNavbar && 'active'}`}>
          <ul className='navbar__elements--list'>
            <li>
              <NavLink onClick={() => setShowNavbar(false)} to="/about">What's Bouldering?</NavLink>
            </li>
            <li >
              <NavLink onClick={() => setShowNavbar(false)} className='navbar__elements--classes' to="/classesevents" >Classes & Events</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowNavbar(false)} to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowNavbar(false)} to="/contact">Plan a Visit</NavLink>
            </li>
            <li>
            <NavLink onClick={() => setShowNavbar(false)} to="/account"><FaUserCircle /></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  )
}

export default Navbar