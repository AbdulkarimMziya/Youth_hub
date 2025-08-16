import styles from './About.module.css';
import Grid2x2 from '../../../../components/UI/Grid2x2/Grid2x2';
import bannerImage from '../../../../assets/banner.jpg';
import img1 from '../../../../assets/img1.jpg';

const About = () => {
  const gridItems = [
    {
      type: 'image',
      src: bannerImage,
      alt: 'Youth Prime Hub Society Banner'
    },
    {
      type: 'text', 
      content: 'Building Communities'
    },
    {
      type: 'text',
      content: 'Creating Opportunities'
    },
    {
      type: 'image',
      src: img1,
      alt: 'Youth Hub Image 1'
    }
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.wrapper}>
        <div className={styles.textContent}>
          <h2 className={styles.aboutHeading}>About Us</h2>
          <p className={styles.aboutContent}>
            We are dedicated to empowering youth and building stronger communities 
            through education, mentorship, and opportunities for growth.
          </p>
        </div>
        <Grid2x2 items={gridItems} />
      </div>
    </section>
  );
};

export default About;
