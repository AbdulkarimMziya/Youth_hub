import styles from './SkeletonLoader.module.css';

/**
 * A versatile skeleton loader component for content that's loading
 * @param {Object} props
 * @param {string} props.type - The type of skeleton: 'card', 'text', 'image', 'button', 'circle'
 * @param {number} props.count - Number of skeleton items to display
 * @param {string} props.className - Additional CSS class to apply
 * @param {Object} props.style - Inline styles to apply
 * @param {number} props.height - Height of the skeleton
 * @param {number} props.width - Width of the skeleton
 */
const SkeletonLoader = ({ 
  type = 'text', 
  count = 1, 
  className = '', 
  style = {},
  height,
  width
}) => {
  // Helper function to render the appropriate skeleton type
  const renderSkeleton = (index) => {
    const skeletonStyle = {
      ...style,
      height: height ? `${height}px` : undefined,
      width: width ? `${width}px` : undefined
    };

    switch (type) {
      case 'card':
        return (
          <div 
            key={index} 
            className={`${styles.skeleton} ${styles.card} ${className}`} 
            style={skeletonStyle}
          >
            <div className={`${styles.skeleton} ${styles.image}`}></div>
            <div className={`${styles.skeleton} ${styles.title}`}></div>
            <div className={`${styles.skeleton} ${styles.text}`}></div>
            <div className={`${styles.skeleton} ${styles.text}`}></div>
          </div>
        );
      
      case 'image':
        return (
          <div 
            key={index} 
            className={`${styles.skeleton} ${styles.image} ${className}`} 
            style={skeletonStyle}
          ></div>
        );
      
      case 'button':
        return (
          <div 
            key={index} 
            className={`${styles.skeleton} ${styles.button} ${className}`} 
            style={skeletonStyle}
          ></div>
        );
      
      case 'circle':
        return (
          <div 
            key={index} 
            className={`${styles.skeleton} ${styles.circle} ${className}`} 
            style={skeletonStyle}
          ></div>
        );
        
      case 'text':
      default:
        return (
          <div 
            key={index} 
            className={`${styles.skeleton} ${styles.text} ${className}`} 
            style={skeletonStyle}
          ></div>
        );
    }
  };

  // Render multiple skeletons if count > 1
  return (
    <div className={styles.skeletonWrapper}>
      {Array(count).fill().map((_, index) => renderSkeleton(index))}
    </div>
  );
};

export default SkeletonLoader;
