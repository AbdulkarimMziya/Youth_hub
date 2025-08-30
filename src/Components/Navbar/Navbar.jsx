import React, { useState, useEffect } from 'react';
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
          <div className="logo">Logo</div>
          {!isMobile && (
            <ul style={desktopNavLinksStyle}>
              <li style={desktopNavLinkItemStyle}><a style={desktopNavLinkAnchorStyle} href="#">About Us</a></li>
              <li style={desktopNavLinkItemStyle}><a style={desktopNavLinkAnchorStyle} href="#">Why Youth?</a></li>
              <li style={desktopNavLinkItemStyle}><a style={desktopNavLinkAnchorStyle} href="#">Plan of Action</a></li>
              <li style={desktopNavLinkItemStyle}><a style={desktopNavLinkAnchorStyle} href="#">Contact Us</a></li>
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
