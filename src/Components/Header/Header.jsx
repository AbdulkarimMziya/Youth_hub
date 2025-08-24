import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo-transparent.png';
import { getNavRoutes } from '../../routes/routes';

const Header = () => {
  const location = useLocation();
  const navRoutes = getNavRoutes();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Youth Prime Hub Society" className={styles.logo} />
        </Link>
      </div>
      
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {navRoutes.map(route => (
            <li key={route.path}>
              <Link 
                to={route.path} 
                className={`${styles.navLink} ${
                  location.pathname === route.path ? styles.active : ''
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.menuContainer}>
        <Link to="/donate" className={`${styles.menuItem} ${styles.btn}`}>Donate</Link>
        <Link to="/join" className={`${styles.menuItem} ${styles.btn}`}>Join</Link>
      </div>

      {/* Hamburger Menu - separate from menuContainer for mobile */}
      <div className={styles.hamburgerContainer}>
        <button 
          className={`${styles.hamburgerBtn} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownOverlay} onClick={closeMenu}></div>
            <nav className={styles.dropdownNav}>
              {navRoutes.map(route => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className={`${styles.dropdownLink} ${
                    location.pathname === route.path ? styles.activeDropdown : ''
                  }`}
                  onClick={closeMenu}
                >
                  {route.name}
                </Link>
              ))}
              {/* Add mobile-only menu items */}
              <div className={styles.mobileMenuDivider}></div>
              <Link 
                to="/donate" 
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Donate
              </Link>
              <Link 
                to="/join" 
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Join
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
