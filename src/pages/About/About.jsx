import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <h1>About Youth Prime Hub Society</h1>
        <p>Empowering youth for a brighter future</p>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default About;
