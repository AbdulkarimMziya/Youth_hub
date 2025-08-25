import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Hero from './components/Hero/Hero';
import CertificationSection from './components/CertificationSection/CertificationSection';
import About from './components/About/About';
import Sponsorship from './components/Sponsorship/Sponsorship';
import Events from './components/Events/Events';
import HomeSkeleton from './HomeSkeleton';

const Home = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <HomeSkeleton />;
  }
  
  return (
    <div className={styles.home}>
      <Hero />
      <CertificationSection />
      <About />
      <Events />
      <Sponsorship />
    </div>
  );
};

export default Home;
