import styles from './LoadingSpinner.module.css';

/**
 * A loading spinner component for asynchronous operations
 * @param {Object} props
 * @param {string} props.size - 'small', 'medium', or 'large'
 * @param {string} props.color - Color for the spinner
 * @param {string} props.text - Optional text to display below spinner
 * @param {string} props.className - Additional CSS class
 */
const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary', 
  text = '', 
  className = '' 
}) => {
  const spinnerSize = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  }[size] || styles.medium;

  const spinnerColor = {
    primary: styles.primary,
    secondary: styles.secondary,
    light: styles.light
  }[color] || styles.primary;

  return (
    <div className={`${styles.spinnerContainer} ${className}`}>
      <div className={`${styles.spinner} ${spinnerSize} ${spinnerColor}`}></div>
      {text && <p className={styles.spinnerText}>{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
