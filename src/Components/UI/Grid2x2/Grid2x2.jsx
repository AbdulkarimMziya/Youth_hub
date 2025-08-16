import styles from './Grid2x2.module.css';

const Grid2x2 = ({ items }) => {
  return (
    <div className={styles.grid2x2}>
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item.type === 'image' ? (
            <img 
              src={item.src} 
              alt={item.alt || `Grid item ${index + 1}`}
              className={styles.gridImage}
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
