import { useState } from 'react';
import styles from './Events.module.css';
import TabNavigation from './components/TabNavigation';
import CategoryFilter from './components/CategoryFilter';
import EventsGrid from './components/EventsGrid';
import { upcomingEvents, pastEvents, categories } from './data/eventsData';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredEvents = (events) => {
    if (activeFilter === 'all') return events;
    return events.filter(event => event.category === activeFilter);
  };

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className={styles.eventsPage}>
      <div className={styles.pageHeader}>
        <h1 className="pageTitle">Events</h1>
        <p className={styles.pageDescription}>
          Join us in our upcoming events and community activities. Together, we create meaningful experiences 
          that empower youth and strengthen our community bonds.
        </p>
      </div>

      <div className={styles.eventsContainer}>
        <TabNavigation 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        <CategoryFilter 
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <EventsGrid 
          events={filteredEvents(currentEvents)}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
};

export default Events;
