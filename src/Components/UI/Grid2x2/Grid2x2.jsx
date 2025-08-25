import styles from './Grid2x2.module.css';

const Grid2x2 = ({ items, className }) => {
  return (
    <div className={`${styles.grid2x2} ${className ? className : ''}`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`${styles.gridItem} ${item.className ? item.className : ''}`}
          style={item.style}
        >
          {item.type === 'image' ? (
            <img 
              src={item.src} 
              alt={item.alt || `Grid item ${index + 1}`}
              className={styles.gridImage}
              loading="lazy"
            />
          ) : (
            <div className={styles.gridText}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid2x2;
