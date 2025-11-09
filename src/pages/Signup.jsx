import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StaffForm from '../Components/StaffForm';
import Eligibility from '../Components/Eligibility/Eligibility';
import '../Components/Eligibility/Eligibility.css';
import './Signup.css';

export default function Signup() {
    const [activeTab, setActiveTab] = useState('youth');
    const navigate = useNavigate();
    const youthFormUrl = 'https://forms.gle/T8gaXYM3iWUMUeeG7'; // <-- replace with your Google Form link

    return (
        <div className="signup-hero">
            <header className="hero-header">
                <h1>Join the Youth</h1>
                <p>
                    Become a part of our vibrant community. Sign up as a <strong>Youth Member</strong> to participate in our programs, or as a <strong>Staff Member</strong> to help guide and support youth.
                </p>
            </header>
            <div className="tab-section">
                <button
                    className={`tab-btn${activeTab === 'youth' ? ' active' : ''}`}
                    onClick={() => setActiveTab('youth')}
                    type="button"
                >
                    Youth Member
                </button>
                <button
                    className={`tab-btn${activeTab === 'staff' ? ' active' : ''}`}
                    onClick={() => setActiveTab('staff')}
                    type="button"
                >
                    Staff Member
                </button>
            </div>
            <div className="tab-content">
                <div className={`tab-panel${activeTab === 'youth' ? ' active' : ''}`}
                    aria-hidden={activeTab !== 'youth'}>
                    <h2>Youth Member</h2>
                    <p>
                        If you are between the ages of 14 and 24 and want to take part in our empowering programs, please continue with the youth member application.
                    </p>

                    {/* Eligibility accordion (collapsed by default). Pass defaultOpen={true} if you want it expanded. */}
                    <Eligibility />

                    {/* External link to the Google Form (opens in a new tab) */}
                    <a
                        className="fill-form-btn"
                        href={youthFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Fill Youth Member Form
                    </a>
                </div>
                <div className={`tab-panel${activeTab === 'staff' ? ' active' : ''}`}
                    aria-hidden={activeTab !== 'staff'}>
                    <h2>Staff Member</h2>
                    <p>
                        If you are interested in joining our team to help guide and support youth, please continue with the staff member application.
                    </p>
                    <div className="staff-form">
                        <StaffForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
