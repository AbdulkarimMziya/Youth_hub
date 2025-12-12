
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  const [showPartners, setShowPartners] = useState(false);
  const partners = [
    'Interior Academy',
    'Kamloops Film Society ED',
    'CMHA',
    'BGC',
    'Foundry Kamloops',
    'A New Tomorrow',
    'United Way BC',
    'Children Therapy'
  ];
  // values for the Core Values cards
  const values = [
    {
      title: 'Purpose',
      text: 'We help youth discover direction and meaning, guiding them to make intentional choices that shape their future.'
    },
    {
      title: 'Resilience',
      text: 'We build strength from challenges, teaching young people to adapt, stand tall, and keep striving despite obstacles.'
    },
    {
      title: 'Innovation',
      text: 'We encourage creativity and fresh thinking—opening doors to new ideas, solutions, and ways of learning or earning.'
    },
    {
      title: 'Mentorship & Community',
      text: 'We believe growth happens together. Through one-to-one and group mentorship, youth connect with role models and a community that truly cares.'
    },
    {
      title: 'Excellence',
      text: 'We promote high standards—pushing young people to believe in themselves, work hard, and consistently show up as their best.'
    },
    {
      title: 'Discipline',
      text: 'We foster consistency, focus, and positive habits that help young people stay committed to their goals and show up for themselves every day.'
    }
  ];

  // refs for each card
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // optionally unobserve once visible
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // observe each card element
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
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
            <h2>Mission</h2>
            <p>
              To empower young people ages 14 to 24, especially those in and transitioning out of care, through mentorship, skills development, and meaningful community connections that build confidence, purpose, and long term resilience.
            </p>
          </div>
          <div className="aboutus-mv-block aboutus-mv-vision">
            <h2>Vision</h2>
            <p>
              A community where every young person feels supported, equipped, and inspired to reach their fullest potential and thrive in life, work, and society.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="aboutus-values">
        <h2 className="aboutus-values-title">PRIMED Core Values</h2>
        <div className="aboutus-values-cards">
          {values.map((value, index) => (
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="aboutus-value-card"
              key={index}
            >
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="aboutus-team">
        <h2 className="aboutus-team-title">Leadership Team</h2>
        <div className="aboutus-team-subtitle">Meet our dedicated board and coordinators</div>
        <div className="aboutus-team-grid">
          <div className="aboutus-team-member">
            <img src="/youth-leadership-img.jpg" alt="Valentine Uwakwe" className="aboutus-team-photo" />
            <div className="aboutus-team-name">Valentine Uwakwe</div>
            <div className="aboutus-team-role">Founder / Executive Director</div>
          </div>
        </div>
      </section>

      {/* Partners Button & List */}
      <section className="aboutus-partners" style={{ textAlign: 'center', margin: '2rem 0' }}>
        <button
          className="aboutus-partners-btn"
          onClick={() => setShowPartners((prev) => !prev)}
        >
          {showPartners ? 'Hide Partners' : 'View Partners'}
        </button>
        <ul className={`aboutus-partners-list ${showPartners ? 'slide-show' : 'slide-hide'}`}>
          {partners.map((partner, idx) => (
            <li key={idx}>{partner}</li>
          ))}
        </ul>
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
