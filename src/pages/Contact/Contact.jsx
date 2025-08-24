import ContactForm from '../../Components/Forms/ContactForm/ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <section className={styles.pageHeader}>
        <h1 className="pageTitle">Contact Us</h1>
        <p className={styles.pageDescription}>Get in touch with our team</p>
      </section>
      
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            {/* First Half - Quote, Image Background, and Contact Details */}
            <div className={styles.leftHalf}>
              <div className={styles.quoteSection}>
                <h2 className={styles.quoteHeading}>Connect With Us</h2>
                <blockquote className={styles.quote}>
                  "Together, we can empower the next generation to create positive change in our communities and beyond."
                </blockquote>
              </div>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div className={styles.contactDetails}>
                    <h3>Email</h3>
                    <p>info@youthprimehub.org</p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📞</div>
                  <div className={styles.contactDetails}>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div className={styles.contactDetails}>
                    <h3>Address</h3>
                    <p>123 Youth Center Street<br />Community District, City 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Half - Contact Form */}
            <div className={styles.rightHalf}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
