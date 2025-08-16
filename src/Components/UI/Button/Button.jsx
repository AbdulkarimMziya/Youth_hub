import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const buttonClasses = [
    styles.btn,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
