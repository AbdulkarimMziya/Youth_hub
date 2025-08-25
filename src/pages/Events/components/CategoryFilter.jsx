import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories, activeFilter, setActiveFilter, disabled = false }) => {
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Filter by Category:</h3>
      <div className={styles.filterButtons}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterButton} ${activeFilter === category ? styles.activeFilter : ''} ${disabled ? styles.disabled : ''}`}
            onClick={() => !disabled && setActiveFilter(category)}
            disabled={disabled}
            aria-disabled={disabled}
          >
            {category === 'all' ? 'All Events' : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
