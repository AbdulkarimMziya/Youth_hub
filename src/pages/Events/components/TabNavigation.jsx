import styles from './TabNavigation.module.css';

const TabNavigation = ({ activeTab, setActiveTab, disabled = false }) => {
  return (
    <div className={styles.tabNavigation}>
      <button 
        className={`${styles.tabButton} ${activeTab === 'upcoming' ? styles.activeTab : ''} ${disabled ? styles.disabled : ''}`}
        onClick={() => !disabled && setActiveTab('upcoming')}
        disabled={disabled}
        aria-disabled={disabled}
      >
        Upcoming Events
      </button>
      <button 
        className={`${styles.tabButton} ${activeTab === 'past' ? styles.activeTab : ''} ${disabled ? styles.disabled : ''}`}
        onClick={() => !disabled && setActiveTab('past')}
        disabled={disabled}
        aria-disabled={disabled}
      >
        Past Events
      </button>
    </div>
  );
};

export default TabNavigation;
