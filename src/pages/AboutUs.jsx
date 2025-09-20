
import React from 'react';
import './AboutUs.css';


function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-overlay">
          <h1 className="aboutus-hero-title">Empowering Youth. Shaping Futures.</h1>
          <button className="aboutus-hero-cta">Join the Movement</button>
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
          style={{ width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block' }}
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
            <h3>Discipline</h3>
            <p>We foster self-motivation, focus, and accountability in all we do.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Empowerment</h3>
            <p>We equip youth with tools and confidence to lead and succeed.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Excellence</h3>
            <p>We strive for the highest standards in our programs and impact.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Community</h3>
            <p>We build strong, supportive networks for collective growth.</p>
          </div>
          <div className="aboutus-value-card">
            <h3>Integrity</h3>
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
            <img src="/youth-leadership-img.jpg" alt="Barr Morgan" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Barr Morgan</div>
            <div className="aboutus-team-role">Executive Director / Founder<br/>Interior Academy, Kamloops Film Society ED, CMHA</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-growth-img.jpg" alt="Bryce Colin" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Bryce Colin</div>
            <div className="aboutus-team-role">Venture Kamloops</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-skills-img.jpg" alt="Jim Chris" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Jim Chris</div>
            <div className="aboutus-team-role">Financial Advisor</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-empower-img.jpg" alt="Julie Holmes" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Julie Holmes</div>
            <div className="aboutus-team-role">Board Member</div>
          </div>
          {/* Coordinators */}
          <div className="aboutus-team-member">
            <img src="/youth-leadership-img.jpg" alt="Programs & Training Coordinator" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Programs & Training Coordinator</div>
            <div className="aboutus-team-role">Oversees mentorship, workshops, bootcamps, and all youth development programs</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-growth-img.jpg" alt="Abdul Mziya" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Abdul Mziya</div>
            <div className="aboutus-team-role">Media & Communications Coordinator<br/>Branding, social media, website, publicity, storytelling</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-skills-img.jpg" alt="Finance & Fundraising Coordinator" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Finance & Fundraising Coordinator</div>
            <div className="aboutus-team-role">Manages finances, budgeting, fundraising campaigns, donor relations</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-empower-img.jpg" alt="Legal & Compliance Coordinator" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Legal & Compliance Coordinator</div>
            <div className="aboutus-team-role">Ensures the society follows regulations, policies, and ethical standards</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-leadership-img.jpg" alt="Community Engagement & Partnerships Coordinator" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Community Engagement & Partnerships Coordinator</div>
            <div className="aboutus-team-role">Builds relationships with schools, industries, organizations, sponsors</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-growth-img.jpg" alt="Youth Engagement & Welfare Coordinator" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Youth Engagement & Welfare Coordinator</div>
            <div className="aboutus-team-role">Talent discovery, counseling, inclusion, and well-being of youth</div>
          </div>
          <div className="aboutus-team-member">
            <img src="/youth-skills-img.jpg" alt="Events & Outreach Coordinator" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Events & Outreach Coordinator</div>
            <div className="aboutus-team-role">Plans and coordinates community events, campaigns, outreach activities</div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer Banner */}
      <footer className="aboutus-cta-footer">
        <div className="aboutus-cta-footer-content">
          <img src="/logo-transparent-bg.png" alt="Youth Hub Logo" className="aboutus-cta-footer-logo" />
          <span className="aboutus-cta-footer-text">Together, we’re creating confident leaders for tomorrow.</span>
          <button className="aboutus-cta-footer-btn">
            <img src="/logo-transparent-bg.png" alt="Youth Hub Logo" className="aboutus-cta-footer-btn-logo" />
            <span>Get Involved</span>
          </button>
        </div>
      </footer>
    </div>
  );
}


export default AboutUs;
