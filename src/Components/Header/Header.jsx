import styles from './Header.module.css';
import logo from '../../assets/logo-transparent.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.menuContainer}>
        <div className={`${styles.menuItem} ${styles.btn}`}>Donate</div>
        <div className={`${styles.menuItem} ${styles.btn}`}>Join</div>
        <div className={`${styles.menuItem} ${styles.btn}`}>Menu</div>
      </div>
    </header>
  );
};

export default Header;
