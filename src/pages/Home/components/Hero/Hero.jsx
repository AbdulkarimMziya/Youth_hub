import styles from './Hero.module.css';
import heroVideo from '../../../../assets/hero-video.mp4';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.videoBgWrapper}>
        <video 
          className={styles.heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          src={heroVideo}
        />
        <div className={styles.videoOverlay}></div>
      </div>
      <div className={styles.heroContent}>
        <h2 className={styles.companyName}>Youth Prime Hub Society</h2>
        <h1 className={styles.companySlogan}>Empower | Educate | Equip.</h1>
        <div className={styles.callToAction}>
          <div className={`${styles.btn} ${styles.primary}`}>Donate</div>
          <div className={`${styles.btn} ${styles.secondary}`}>Join Us</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
