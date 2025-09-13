import React, { useState } from 'react';
import './StaffForm.css';

const POSITIONS = [
  'Mentor',
  'Program Coordinator',
  'Workshop Facilitator',
  'Counselor',
  'Event Organizer',
  'Communications',
  'Fundraising',
  'Volunteer',
  'Other',
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!form.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = 'Enter a valid email.';
  if (!form.phone.trim()) errors.phone = 'Phone number is required.';
  else if (!/^\+?\d{7,15}$/.test(form.phone.replace(/\s+/g, ''))) errors.phone = 'Enter a valid phone number.';
  if (!form.position) errors.position = 'Please select a position.';
  if (!form.motivation.trim()) errors.motivation = 'Please tell us why you want to join.';
  return errors;
}

export default function StaffForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    motivation: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setTouched({ ...touched, [e.target.name]: true });
        setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
        const fieldErrors = validate({ ...form, [e.target.name]: e.target.value });
        setErrors((prev) => ({ ...prev, [e.target.name]: fieldErrors[e.target.name] }));
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(form);

        setErrors(validationErrors);
        setTouched({ name: true, email: true, phone: true, position: true, motivation: true });

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
        }
  };

  if (submitted) {
    return <div className="staff-form-success">Thank you for your application!</div>;
  }

  return (
    <form className="staff-form" onSubmit={handleSubmit} noValidate>
      <h3>Staff Application</h3>
      <label>
        Full Name
        <input   
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'error' : ''}
            required
        />
        {errors.name && touched.name && <span className="form-error">{errors.name}</span>}
      </label>
      <label>
        Email
        <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'error' : ''}
            required
        />
        {errors.email && touched.email && <span className="form-error">{errors.email}</span>}
      </label>
      <label>
        Phone Number
        <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? 'error' : ''}
            required
        />
        {errors.phone && touched.phone && <span className="form-error">{errors.phone}</span>}
      </label>
      <label>
        Position Interested In
        <select
            name="position"
            value={form.position}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.position && touched.position ? 'error' : ''}
            required
        >
          <option value="" disabled>Select a position...</option>
          {POSITIONS.map((pos) => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
        {errors.position && touched.position && <span className="form-error">{errors.position}</span>}
      </label>
      <label>
        Why do you want to join?
        <textarea
            name="motivation"
            value={form.motivation}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.motivation && touched.motivation ? 'error' : ''}
            required
        />
        {errors.motivation && touched.motivation && <span className="form-error">{errors.motivation}</span>}
      </label>
      <button type="submit">Submit Application</button>
    </form>
  );
}
