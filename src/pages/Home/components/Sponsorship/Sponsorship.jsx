import styles from './Sponsorship.module.css';
import logo from '../../../../assets/logo-transparent.png';

const Sponsorship = () => {
  return (
    <section className={styles.sponsorshipSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.sponsorshipHeading}>Our Sponsors</h2>
        <div className={styles.sponsorsGrid}>
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index} className={styles.sponsorItem}>
              <img src={logo} alt={`Sponsor ${index + 1}`} className={styles.sponsorLogo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
