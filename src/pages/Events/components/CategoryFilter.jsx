import styles from './CategoryFilter.module.css';
import { useState, useRef, useEffect } from 'react';

const CategoryFilter = ({ categories, activeFilter, setActiveFilter, disabled = false }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectCategory = (category) => {
    if (!disabled) {
      setActiveFilter(category);
      setDropdownOpen(false);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.filterTitle}>Filter by Category:</h3>
      
      {/* Regular buttons for larger screens */}
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
      
      {/* Dropdown for mobile view */}
      <div className={styles.filterDropdownContainer} ref={dropdownRef}>
        <button 
          className={`${styles.dropdownToggle} ${disabled ? styles.disabled : ''} ${activeFilter !== 'all' ? styles.activeDropdownToggle : ''}`}
          onClick={() => !disabled && setDropdownOpen(!dropdownOpen)}
          disabled={disabled}
          aria-disabled={disabled}
          aria-expanded={dropdownOpen}
        >
          {activeFilter === 'all' ? 'All Events' : activeFilter} <span className={`${styles.dropdownArrow} ${dropdownOpen ? styles.dropdownArrowOpen : ''}`}>▼</span>
        </button>
        
        {dropdownOpen && (
          <div className={styles.dropdownMenu}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.dropdownItem} ${activeFilter === category ? styles.activeDropdownItem : ''}`}
                onClick={() => handleSelectCategory(category)}
              >
                {category === 'all' ? 'All Events' : category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
