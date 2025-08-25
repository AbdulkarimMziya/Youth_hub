import { useState, useEffect } from 'react';
import styles from './Events.module.css';
import TabNavigation from './components/TabNavigation';
import CategoryFilter from './components/CategoryFilter';
import EventsGrid from './components/EventsGrid';
import EventsGridSkeleton from './components/EventsGridSkeleton';
import { upcomingEvents, pastEvents, categories } from './data/eventsData';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  // Simulate fetching data from API
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API request delay
    const timer = setTimeout(() => {
      const data = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
      setEvents(data);
      setIsLoading(false);
    }, 1500); // 1.5 second delay to simulate network request
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Apply category filter
  const filteredEvents = () => {
    if (activeFilter === 'all') return events;
    return events.filter(event => event.category === activeFilter);
  };

  // Change tab handler with loading state
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
          setActiveTab={handleTabChange} 
          disabled={isLoading}
        />

        <CategoryFilter 
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          disabled={isLoading}
        />

        {isLoading ? (
          <EventsGridSkeleton count={6} />
        ) : (
          <EventsGrid 
            events={filteredEvents()}
            activeTab={activeTab}
          />
        )}
      </div>
    </div>
  );
};

export default Events;
