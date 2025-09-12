import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
    const [activeTab, setActiveTab] = useState('youth');

    return (
        <div className="container">
            <div className="signup-container">
                <div className="hero">
                    <header>
                        <h1>Become a Member</h1>
                        <p>
                            At <strong>Youth Prime Hub Society</strong>, you can sign up as either a <strong>youth member</strong> or a <strong>staff member</strong>.
                            Whether you want to participate in our programs or help guide and support youth, we welcome you to join our community.
                        </p>
                    </header>

                    <div className="tab-section">
                        <button
                            className={activeTab === 'youth' ? 'active' : ''}
                            onClick={() => setActiveTab('youth')}
                        >
                            Youth Member
                        </button>
                        <button
                            className={activeTab === 'staff' ? 'active' : ''}
                            onClick={() => setActiveTab('staff')}
                        >
                            Staff Member
                        </button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'youth' && (
                            <div>
                                <h2>Youth Member</h2>
                                <p>If you are between the ages of 14 and 24 and want to take part in our empowering programs, please continue with the youth member application.</p>
                            </div>
                        )}
                        {activeTab === 'staff' && (
                            <div>
                                <h2>Staff Member</h2>
                                <p>If you are interested in joining our team to help guide and support youth, please continue with the staff member application.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="img-background">
                    <img src="/youth-skills-img.jpg" alt="Volunteer" />
                </div>
            </div>
        </div>
    );
}
