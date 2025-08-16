import styles from './Home.module.css';
import Hero from './components/Hero/Hero';
import CertificationSection from './components/CertificationSection/CertificationSection';
import About from './components/About/About';
import Sponsorship from './components/Sponsorship/Sponsorship';
import Events from './components/Events/Events';

const Home = () => {
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
