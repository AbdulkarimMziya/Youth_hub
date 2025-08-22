import { useState } from 'react';

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
            // Form is valid, process the data
            console.log('Form submitted:', formData);

            // Submit to Google Apps Script
            const url = 'https://script.google.com/macros/s/AKfycbz4oNXlCAB8Z9qG1KFbzPQj_WPbx2iCq4QmJr_dTwuKJ_AKDsphi_JRXACUsXHNKsDgxA/exec';
            const formDataToSend = new FormData();
            formDataToSend.append('FirstName', formData.firstName);
            formDataToSend.append('LastName', formData.lastName);
            formDataToSend.append('PhoneNumber', formData.phoneNumber);
            formDataToSend.append('Email', formData.email);
            formDataToSend.append('Position', formData.position);
            formDataToSend.append('Notes', formData.notes);

            fetch(url, {
                method: 'POST',
                body: formDataToSend
            }).then(response => response.text()).then(result => {
                alert(result);
            }).catch(error => {
                console.error('Error submitting form:', error);
                alert('There was an error submitting your application. Please try again later.');
            });
            
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                position: '',
                notes: ''
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.title}>Join Our Team</h2>
            <p style={styles.subtitle}>Fill out the form below to apply for a position with Youth Prime Hub Society</p>
            
            <div style={styles.row}>
                <div style={styles.inputGroup}>
                    <label htmlFor="firstName" style={styles.label}>
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={{
                            ...styles.input,
                            ...(errors.firstName ? styles.inputError : {})
                        }}
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && <span style={styles.error}>{errors.firstName}</span>}
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="lastName" style={styles.label}>
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={{
                            ...styles.input,
                            ...(errors.lastName ? styles.inputError : {})
                        }}
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && <span style={styles.error}>{errors.lastName}</span>}
                </div>
            </div>

            <div style={styles.row}>
                <div style={styles.inputGroup}>
                    <label htmlFor="phoneNumber" style={styles.label}>
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        style={{
                            ...styles.input,
                            ...(errors.phoneNumber ? styles.inputError : {})
                        }}
                        placeholder="(123) 456-7890"
                    />
                    {errors.phoneNumber && <span style={styles.error}>{errors.phoneNumber}</span>}
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="email" style={styles.label}>
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            ...styles.input,
                            ...(errors.email ? styles.inputError : {})
                        }}
                        placeholder="your.email@example.com"
                    />
                    {errors.email && <span style={styles.error}>{errors.email}</span>}
                </div>
            </div>

            <div style={styles.inputGroup}>
                <label htmlFor="position" style={styles.label}>
                    Position of Interest *
                </label>
                <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    style={{
                        ...styles.select,
                        ...(errors.position ? styles.inputError : {})
                    }}
                >
                    {positions.map(position => (
                        <option key={position.value} value={position.value}>
                            {position.label}
                        </option>
                    ))}
                </select>
                {errors.position && <span style={styles.error}>{errors.position}</span>}
            </div>

            <div style={styles.inputGroup}>
                <label htmlFor="notes" style={styles.label}>
                    Additional Notes
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder="Tell us about your experience, availability, or anything else you'd like us to know..."
                    rows="4"
                />
            </div>

            <button type="submit" style={styles.submitButton}>
                Submit Application
            </button>
        </form>
    );
};

const styles = {
    form: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.5rem',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: '1rem',
        color: '#666',
        marginBottom: '2rem',
        textAlign: 'center'
    },
    row: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem'
    },
    inputGroup: {
        flex: 1,
        marginBottom: '1rem'
    },
    label: {
        display: 'block',
        fontSize: '0.9rem',
        fontWeight: '600',
        color: '#333',
        marginBottom: '0.5rem'
    },
    input: {
        width: '100%',
        padding: '0.75rem',
        border: '2px solid #ddd',
        borderRadius: '5px',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box'
    },
    select: {
        width: '100%',
        padding: '0.75rem',
        border: '2px solid #ddd',
        borderRadius: '5px',
        fontSize: '1rem',
        backgroundColor: '#fff',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box'
    },
    textarea: {
        width: '100%',
        padding: '0.75rem',
        border: '2px solid #ddd',
        borderRadius: '5px',
        fontSize: '1rem',
        resize: 'vertical',
        fontFamily: 'Arial, sans-serif',
        transition: 'border-color 0.3s ease',
        boxSizing: 'border-box'
    },
    inputError: {
        borderColor: '#ff4444'
    },
    error: {
        color: '#ff4444',
        fontSize: '0.8rem',
        marginTop: '0.25rem',
        display: 'block'
    },
    submitButton: {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#667eea',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: '1rem'
    }
};

export default RecruitForm;