import styles from './Events.module.css';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Youth Leadership Summit",
      date: "September 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Community Center Hall",
      description: "Join us for a full day of leadership workshops, networking, and skill-building activities designed specifically for young leaders.",
      category: "Leadership",
      featured: true
    },
    {
      id: 2,
      title: "Digital Skills Workshop",
      date: "September 22, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Tech Hub Building",
      description: "Learn essential digital skills including coding basics, digital marketing, and online collaboration tools.",
      category: "Technology"
    },
    {
      id: 3,
      title: "Community Service Day",
      date: "October 5, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "Various Locations",
      description: "Make a difference in our community through various volunteer activities and service projects.",
      category: "Community"
    }
  ];

  return (
    <section className={styles.eventsSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.eventsTitle}>Upcoming Events</h2>
        <p className={styles.eventsSubtitle}>
          Join us in our upcoming events and activities that empower youth and strengthen community bonds.
        </p>
        
        <div className={styles.eventsGrid}>
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className={`${styles.eventCard} ${event.featured ? styles.featuredEvent : ''}`}
            >
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
              <Link to={`/events/${event.id}`} className={styles.registerButton}>Register Now</Link>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllEvents}>
          <Link to="/events" className={styles.viewAllButton}>View All Events</Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
