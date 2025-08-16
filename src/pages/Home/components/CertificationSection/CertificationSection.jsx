import styles from './CertificationSection.module.css';

const CertificationSection = () => {
  return (
    <section className={styles.certificationSection}>
      <div className={styles.certificate}>Certificate 1</div>
      <div className={styles.certificate}>Certificate 2</div>
      <div className={styles.certificate}>Certificate 3</div>
    </section>
  );
};

export default CertificationSection;
