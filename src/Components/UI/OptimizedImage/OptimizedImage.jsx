import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage component with lazy loading, placeholder, and progressive loading
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  placeholderColor = '#e2e2e2',
  style = {},
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  const placeholderStyle = {
    backgroundColor: placeholderColor,
    width: width || '100%',
    height: height || '100%',
    display: isLoaded ? 'none' : 'block',
    borderRadius: 'inherit',
  };

  const imageStyle = {
    ...style,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    width: width || '100%',
    height: height || '100%',
    objectFit: 'cover',
    display: error ? 'none' : 'block',
  };

  return (
    <div style={{ position: 'relative', width: width, height: height }}>
      <div style={placeholderStyle} aria-hidden="true" />
      {!error && (
        <img
          src={src}
          alt={alt}
          className={className}
          style={imageStyle}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          width={width}
          height={height}
        />
      )}
      {error && (
        <div 
          style={{ 
            ...style, 
            width: width || '100%', 
            height: height || '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f8f8',
            color: '#666',
            fontSize: '14px',
            borderRadius: 'inherit',
          }}
        >
          {alt || 'Image failed to load'}
        </div>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholderColor: PropTypes.string,
  style: PropTypes.object,
  loading: PropTypes.oneOf(['lazy', 'eager', 'auto']),
};

export default OptimizedImage;
