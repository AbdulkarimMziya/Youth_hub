import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Desktop nav links styles
  const desktopNavLinksStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '450px',
    listStyle: 'none',
    marginLeft: '2rem',
    padding: 0
  };

  const desktopNavLinkItemStyle = {
    margin: '0 1.5rem 0 0',
    textAlign: 'center'
  };

  const desktopNavLinkAnchorStyle = {
    textDecoration: 'none',
    color: '#000'
  };

  return (
    <>
      {isMobile && <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}
      <nav className="navbar">
        <div className="navbar-left">
          {isMobile && <HamburgerIcon isOpen={menuOpen} onClick={toggleMenu} />}
          <Link to="/" className="logo">Logo</Link>
          {!isMobile && (
            <ul style={desktopNavLinksStyle}>
              <li style={desktopNavLinkItemStyle}><Link style={desktopNavLinkAnchorStyle} to="/about-us">About Us</Link></li>
              <li style={desktopNavLinkItemStyle}><Link style={desktopNavLinkAnchorStyle} to="/why-youth">Why Youth?</Link></li>
              <li style={desktopNavLinkItemStyle}><Link style={desktopNavLinkAnchorStyle} to="/plan-of-action">Plan of Action</Link></li>
            </ul>
          )}
        </div>
        <div className="navbar-right">
          <button className="donate-btn">Donate</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
