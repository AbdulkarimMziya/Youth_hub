import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logo-transparent.png';
import { getNavRoutes } from '../../routes/routes';

const Header = () => {
  const location = useLocation();
  const navRoutes = getNavRoutes();

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
        <div className={`${styles.menuItem} ${styles.btn}`}>Join</div>
        <div className={`${styles.menuItem} ${styles.btn}`}>Menu</div>
      </div>
    </header>
  );
};

export default Header;
