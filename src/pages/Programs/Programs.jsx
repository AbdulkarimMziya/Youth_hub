import styles from './Programs.module.css';

const Programs = () => {
  return (
    <div className={styles.programsPage}>
      <section className={styles.pageHeader}>
        <h1 className="pageTitle">Programs</h1>
        <p className={styles.pageDescription}>Explore our youth programs</p>
      </section>
      {/* Add program components as needed */}
    </div>
  );
};

export default Programs;
