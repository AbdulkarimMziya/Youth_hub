import RecruitForm from '../../Components/Forms/RecruitForm/recruitForm';
import styles from './Join.module.css';

const Join = () => {
  return (
    <div className={styles.joinPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Join Youth Prime Hub Society</h1>
          <p>Be part of our mission to empower youth and create positive change in our community</p>
        </div>
      </section>
      
      <section className={styles.formSection}>
        <RecruitForm />
      </section>
      
      <section className={styles.whyJoin}>
        <div className={styles.container}>
          <h2>Why Join Our Team?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Make a Difference</h3>
              <p>Directly impact the lives of young people in your community</p>
            </div>
            <div className={styles.benefit}>
              <h3>Develop Skills</h3>
              <p>Gain valuable experience in leadership, mentoring, and community engagement</p>
            </div>
            <div className={styles.benefit}>
              <h3>Build Network</h3>
              <p>Connect with like-minded individuals passionate about youth development</p>
            </div>
            <div className={styles.benefit}>
              <h3>Flexible Commitment</h3>
              <p>Choose roles and schedules that work with your availability</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
