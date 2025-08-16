import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.wrapper}>
          <h2 className={styles.footerHeading}>Together, we can make a difference.</h2>
          <p className={styles.footerContent}>
            At Youth Prime Hub Society, we believe every young person deserves the opportunity to reach their full potential. 
            Through education, empowerment, and community support, we're building pathways to success for the next generation. 
            Your support doesn't just fund our programs—it transforms lives, creates opportunities, and builds a stronger future 
            for our youth and community. Join us in making a lasting impact that will echo for generations to come.
          </p>
          <div className={styles.footerCta}>
            <div className={`${styles.btn} ${styles.accent}`}>Donate Now</div>
            <div className={`${styles.btn} ${styles.secondary}`}>Join Cause</div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.wrapper}>
          <div className={styles.spaceBetween}>
            <div className={styles.logo}>
              <span className={styles.highlight}>YOU</span>TH PRI<span className={styles.highlight}>ME</span> H<span className={styles.highlight}>U</span>B <span className={styles.highlight}>S</span>OCIETY
            </div>
            <nav className={styles.footerNav}>
              <ul className={styles.navList}>
                <li><a href="#" className={styles.navLink}>Our Organization</a></li>
                <li><a href="#" className={styles.navLink}>Location</a></li>
                <li><a href="#" className={styles.navLink}>Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2025 Youth Prime Hub Society. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
