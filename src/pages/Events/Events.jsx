import styles from './Events.module.css';
import EventsSection from '../Home/components/Events/Events';

const Events = () => {
  return (
    <div className={styles.eventsPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Our Events</h1>
        <p className={styles.pageDescription}>
          Join us in our upcoming events and community activities. Together, we create meaningful experiences 
          that empower youth and strengthen our community bonds.
        </p>
      </div>
      <EventsSection />
    </div>
  );
};

export default Events;
