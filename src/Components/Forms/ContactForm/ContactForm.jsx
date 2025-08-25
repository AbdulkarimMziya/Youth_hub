import { useState } from 'react';
import styles from './ContactForm.module.css';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        
        // Reset success state when user starts making changes
        if (submitSuccess) {
            setSubmitSuccess(false);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setIsSubmitting(true);
            
            setTimeout(() => {
                
                console.log('Contact form submitted:', formData);
                
                setIsSubmitting(false);
                setSubmitSuccess(true);
                
                // Reset form on success
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            }, 2000); 
        }
    };

    return (
        <div className={styles.formContainer}>
            {submitSuccess && (
                <div className={styles.successMessage}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Thank you for your message!</h3>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            )}
            
            <form onSubmit={handleSubmit} className={`${styles.form} ${submitSuccess ? styles.formHidden : ''}`}>
                <h2 className={styles.title}>Send us a Message</h2>
                <p className={styles.subtitle}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                
                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="firstName" className={styles.label}>
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                            placeholder="Enter your first name"
                            disabled={isSubmitting}
                        />
                        {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="lastName" className={styles.label}>
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                            placeholder="Enter your last name"
                            disabled={isSubmitting}
                        />
                        {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.label}>
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                        placeholder="Tell us how we can help you..."
                        rows="6"
                        disabled={isSubmitting}
                    />
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                <button 
                    type="submit" 
                    className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className={styles.buttonContent}>
                            <LoadingSpinner size="small" color="light" />
                            <span>Sending...</span>
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;