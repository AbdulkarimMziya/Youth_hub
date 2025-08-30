import React from 'react';
import './HamburgerIcon.css';

function HamburgerIcon({ isOpen, onClick }) {
  return (
    <div className={`hamburger-icon ${isOpen ? 'active' : ''}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburgerIcon;
