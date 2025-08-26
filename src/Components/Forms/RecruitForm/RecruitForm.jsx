import { useState } from 'react';
import styles from './RecruitForm.module.css';

const RecruitForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        position: '',
        notes: ''
    });

    const [errors, setErrors] = useState({});

    const positions = [
        { value: '', label: 'Select a position' },
        { value: 'volunteer', label: 'Volunteer' },
        { value: 'mentor', label: 'Mentor' },
        { value: 'coordinator', label: 'Program Coordinator' },
        { value: 'facilitator', label: 'Workshop Facilitator' },
        { value: 'tutor', label: 'Tutor' },
        { value: 'counselor', label: 'Youth Counselor' },
        { value: 'organizer', label: 'Event Organizer' },
        { value: 'other', label: 'Other' }
    ];

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
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid phone number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.position) {
            newErrors.position = 'Please select a position';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Submit to Google Apps Script
            const url = 'https://script.google.com/macros/s/AKfycbz4oNXlCAB8Z9qG1KFbzPQj_WPbx2iCq4QmJr_dTwuKJ_AKDsphi_JRXACUsXHNKsDgxA/exec';
            const formDataToSend = new FormData();
            
            Object.keys(formData).forEach(key => {
                const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
                formDataToSend.append(capitalizedKey, formData[key]);
            });

            fetch(url, {
                method: 'POST',
                body: formDataToSend
            })
            .then(response => response.text())
            .then(result => {
                alert(result);
                // Reset form on success
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    position: '',
                    notes: ''
                });
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('There was an error submitting your application. Please try again later.');
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.title}>Join Our Team</h2>
            <p className={styles.subtitle}>Fill out the form below to apply for a position with Youth Prime Hub Society</p>
            
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
                    />
                    {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.inputGroup}>
                    <label htmlFor="phoneNumber" className={styles.label}>
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.phoneNumber ? styles.inputError : ''}`}
                        placeholder="(123) 456-7890"
                    />
                    {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
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
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="position" className={styles.label}>
                    Position of Interest *
                </label>
                <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`${styles.select} ${errors.position ? styles.inputError : ''}`}
                >
                    {positions.map(position => (
                        <option key={position.value} value={position.value}>
                            {position.label}
                        </option>
                    ))}
                </select>
                {errors.position && <span className={styles.error}>{errors.position}</span>}
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="notes" className={styles.label}>
                    Additional Notes
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Tell us about your experience, availability, or anything else you'd like us to know..."
                    rows="4"
                />
            </div>

            <button type="submit" className={styles.submitButton}>
                Submit Application
            </button>
        </form>
    );
};

export default RecruitForm;