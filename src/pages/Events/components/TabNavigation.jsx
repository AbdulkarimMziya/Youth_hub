import styles from './TabNavigation.module.css';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabNavigation}>
      <button 
        className={`${styles.tabButton} ${activeTab === 'upcoming' ? styles.activeTab : ''}`}
        onClick={() => setActiveTab('upcoming')}
      >
        Upcoming Events
      </button>
      <button 
        className={`${styles.tabButton} ${activeTab === 'past' ? styles.activeTab : ''}`}
        onClick={() => setActiveTab('past')}
      >
        Past Events
      </button>
    </div>
  );
};

export default TabNavigation;
