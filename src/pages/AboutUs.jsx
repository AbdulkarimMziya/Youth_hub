
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';


function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-overlay">
          <h1 className="aboutus-hero-title">Empowering, Educate, and Equip.</h1>
          <Link to="/signup">
            <button className="aboutus-hero-cta">Join the Movement</button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="aboutus-stats">
        <div className="aboutus-stats-grid">
          <div className="aboutus-stat">
            <div className="aboutus-stat-number">100+</div>
            <div className="aboutus-stat-label">youth mentored</div>
          </div>
          <div className="aboutus-stat">
            <div className="aboutus-stat-number">10+</div>
            <div className="aboutus-stat-label">community partners</div>
          </div>
          <div className="aboutus-stat">
            <div className="aboutus-stat-number">4-year</div>
            <div className="aboutus-stat-label">pathway of growth</div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="aboutus-story">
        <img 
          src="/youth-leadership-img.jpg" 
          alt="Valentine Uwakwe - Founder" 
          className="aboutus-leader-img"
          style={{ width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block', border: '5px solid #008080' }}
        />
        <blockquote className="aboutus-story-quote">
            “We exist to turn What ifs into I can...”
        </blockquote>
        <h2 className="aboutus-story-title">Our Story</h2>
        <p className="aboutus-story-text">
          In 2022, Valentine Uwakwe saw too many young people losing their potential to the streets. Out of compassion and urgency, he founded Youth Prime Hub Society — a place where dreams find direction and every young voice is heard.
        </p>
        <p className="aboutus-story-text">
          What started as a vision to give hope has grown into a movement that turns “What ifs” into “I can,” and “someday” into “today.” Today, we walk alongside youth as they build confidence, resilience, and independence — lighting the way to brighter futures.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="aboutus-mission-vision">
        <div className="aboutus-mv-container">
          <div className="aboutus-mv-block aboutus-mv-mission">
            <h2>Our Mission</h2>
            <p>
              To empower youth with the skills, confidence, and opportunities they need to become leaders in their communities and beyond.
            </p>
          </div>
          <div className="aboutus-mv-block aboutus-mv-vision">
            <h2>Our Vision</h2>
            <p>
              A world where every young person is inspired and equipped to reach their full potential and drive positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="aboutus-values">
        <h2 className="aboutus-values-title">Our Core Values</h2>
        <div className="aboutus-values-cards">
          <div className="aboutus-value-card">
            <h3>Purpose</h3>
            <p>We foster self-motivation, focus, and accountability in all we do.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Resilience</h3>
            <p>We equip youth with tools and confidence to lead and succeed.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Innovation</h3>
            <p>We strive for the highest standards in our programs and impact.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Mentorship</h3>
            <p>We build strong, supportive networks for collective growth.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Excellence</h3>
            <p>We act with honesty, transparency, and respect at all times.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Discipline</h3>
            <p>We act with honesty, transparency, and respect at all times.</p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="aboutus-team">
        <h2 className="aboutus-team-title">Leadership Team</h2>
        <div className="aboutus-team-subtitle">Meet our dedicated board and coordinators</div>
        <div className="aboutus-team-grid">
          {/* Board Members */}
          <div className="aboutus-team-member">
            <img src="/youth-leadership-img.jpg" alt="Valentine Uwakwe" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Valentine Uwakwe</div>
            <div className="aboutus-team-role">Founder<br/>Interior Academy, Kamloops Film Society ED, CMHA</div>
          </div>
          
          {/* Coordinators */}
          <div className="aboutus-team-member">
            <img src="/youth-growth-img.jpg" alt="Abdul Mziya" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Abdul Mziya</div>
            <div className="aboutus-team-role">Media & Communications Coordinator<br/>Branding, social media, website, publicity, storytelling</div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer Banner */}
      <footer className="aboutus-cta-footer">
        <div className="aboutus-cta-footer-content">
          <img src="/logo-transparent-bg.png" alt="Youth Hub Logo" className="aboutus-cta-footer-logo" />
          <span className="aboutus-cta-footer-text">Together, we’re creating confident leaders for tomorrow.</span>
          <Link to="/donate" style={{ textDecoration: 'none' }}>
            <button className="aboutus-cta-footer-btn">
              <img src="/logo-transparent-bg.png" alt="Youth Hub Logo" className="aboutus-cta-footer-btn-logo" />
              <span>Get Involved</span>
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}


export default AboutUs;
