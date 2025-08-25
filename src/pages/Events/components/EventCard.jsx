import PropTypes from 'prop-types';
import styles from './EventCard.module.css';
import OptimizedImage from '../../../Components/UI/OptimizedImage/OptimizedImage';

const EventCard = ({ event, activeTab }) => {
  return (
    <div className={`${styles.eventCard} ${event.featured ? styles.featuredEvent : ''}`}>
      {event.image && (
        <div className={styles.eventImageContainer}>
          <OptimizedImage 
            src={event.image} 
            alt={`${event.title} event`} 
            className={styles.eventImage}
            placeholderColor="#e0e0e0"
          />
        </div>
      )}
      
      <div className={styles.eventContent}>
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
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    featured: PropTypes.bool,
    image: PropTypes.string,
    attendees: PropTypes.number
  }).isRequired,
  activeTab: PropTypes.string.isRequired
};

export default EventCard;
