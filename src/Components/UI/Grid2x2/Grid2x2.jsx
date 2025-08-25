import PropTypes from 'prop-types';
import styles from './Grid2x2.module.css';

const Grid2x2 = ({ items }) => {
  return (
    <div className={styles.grid2x2}>
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item.type === 'image' ? (
            item.render ? 
              item.render(item.src, item.alt || `Grid item ${index + 1}`) : 
              <img 
                src={item.src} 
                alt={item.alt || `Grid item ${index + 1}`}
                className={styles.gridImage}
                loading="lazy" // Add lazy loading to images
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

Grid2x2.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'text']).isRequired,
      src: PropTypes.string,
      alt: PropTypes.string,
      content: PropTypes.node,
      render: PropTypes.func
    })
  ).isRequired
};

export default Grid2x2;
