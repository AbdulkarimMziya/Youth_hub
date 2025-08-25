import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './OptimizedBackground.module.css';

/**
 * OptimizedBackground component for efficiently loading background images
 */
const OptimizedBackground = ({ 
  src, 
  className, 
  children, 
  placeholderColor = '#e2e2e2',
  overlay = false,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  style = {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setError(false);

    // Preload the image
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setError(true);
    };

    return () => {
      // Clean up
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  const containerStyle = {
    ...style,
    position: 'relative',
    backgroundColor: placeholderColor,
    ...(isLoaded && !error && {
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      willChange: 'transform', // Helps with GPU acceleration
    }),
  };

  return (
    <div 
      className={`${styles.container} ${className || ''}`} 
      style={containerStyle}
    >
      {overlay && isLoaded && !error && (
        <div 
          className={styles.overlay} 
          style={{ backgroundColor: overlayColor }}
        />
      )}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

OptimizedBackground.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  placeholderColor: PropTypes.string,
  overlay: PropTypes.bool,
  overlayColor: PropTypes.string,
  style: PropTypes.object,
};

export default OptimizedBackground;
