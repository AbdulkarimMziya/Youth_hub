import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import heroVideo from '../../../../assets/hero-video.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Load the video with low priority to improve initial page load
    if (videoRef.current) {
      // Set video attributes
      videoRef.current.setAttribute('preload', 'auto');
      
      // Start playing when ready
      videoRef.current.addEventListener('canplaythrough', () => {
        // Attempt to play and catch any errors
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Auto-play prevented:', error);
            // Add play button or other fallback if needed
          });
        }
      });
    }
    
    return () => {
      // Clean up event listeners
      if (videoRef.current) {
        videoRef.current.removeEventListener('canplaythrough', () => {});
      }
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.videoBgWrapper}>
        <video 
          ref={videoRef}
          className={styles.heroVideo} 
          loop 
          muted 
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
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
