import styles from './EventCard.module.css';

const EventCard = ({ event, activeTab }) => {
  return (
    <div className={`${styles.eventCard} ${event.featured ? styles.featuredEvent : ''}`}>
      <div className={styles.eventHeader}>
        <span className={styles.eventCategory}>{event.category}</span>
        {event.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>
      
      <h3 className={styles.eventTitle}>{event.title}</h3>
      
      <div className={styles.eventDetails}>
        <div className={styles.eventDate}>
          <span className={styles.icon}>📅</span>
          {event.date}
        </div>
        <div className={styles.eventTime}>
          <span className={styles.icon}>⏰</span>
          {event.time}
        </div>
        <div className={styles.eventLocation}>
          <span className={styles.icon}>📍</span>
          {event.location}
        </div>
      </div>
      
      <p className={styles.eventDescription}>{event.description}</p>
      
      {activeTab === 'upcoming' && (
        <button className={styles.registerButton}>Register Now</button>
      )}
      
      {activeTab === 'past' && (
        <div className={styles.pastEventInfo}>
          <div className={styles.attendeeCount}>
            <span className={styles.icon}>👥</span>
            {event.attendees} attendees
          </div>
          <button className={styles.viewGalleryButton}>View Gallery</button>
        </div>
      )}
    </div>
  );
};

export default EventCard;
