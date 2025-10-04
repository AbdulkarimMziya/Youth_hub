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
          <Link to="/" className="logo">
            <img src="/logo-transparent-bg.png" alt="Logo" style={{ height: '50px', width: 'auto' }} />
          <div style={{ fontWeight: 600, fontSize: '0.7rem', marginTop: '0.1rem', color: '#008080', letterSpacing: '0.05em' }}>
            Empower.Educate.Equip
          </div>
          </Link>
          {!isMobile && (
            <ul style={desktopNavLinksStyle}>
              <li style={desktopNavLinkItemStyle}><Link style={desktopNavLinkAnchorStyle} to="/about-us">About Us</Link></li>
              <li style={desktopNavLinkItemStyle}><Link style={desktopNavLinkAnchorStyle} to="/why-youth">Why Youth?</Link></li>
              <li style={desktopNavLinkItemStyle}><Link style={desktopNavLinkAnchorStyle} to="/plan-of-action">Plan of Action</Link></li>
            </ul>
          )}
        </div>
        <div className="navbar-right">
          <Link to="/donate" className="donate-btn">Donate</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
