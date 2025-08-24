import EventCard from './EventCard';
import styles from './EventsGrid.module.css';

const EventsGrid = ({ events, activeTab }) => {
  if (events.length === 0) {
    return (
      <div className={styles.noEvents}>
        <h3>No events found</h3>
        <p>Try selecting a different category or check back later for new events.</p>
      </div>
    );
  }

  return (
    <div className={styles.eventsGrid}>
      {events.map((event) => (
        <EventCard 
          key={event.id} 
          event={event} 
          activeTab={activeTab} 
        />
      ))}
    </div>
  );
};

export default EventsGrid;
