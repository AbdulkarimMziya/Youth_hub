import React, { useState } from 'react';
import './PlanOfAction.css';

const stagesData = [
  {
    title: "Discovery & Foundation (Year 1)",
    details: [
      "One-on-One Counseling: Personalized sessions to uncover passions, strengths, and dreams.",
      "Life Skills Training: Discipline, emotional intelligence, communication, and problem-solving.",
      "Self-Development Activities: Confidence, resilience, and critical thinking exercises.",
      "Passion Revisit: Reviewing goals to confirm focus before moving forward."
    ],
    message: "This stage lays the foundation for growth by giving youth a clear picture of who they are and where they want to go."
  },
  {
    title: "Mentorship & Guided Practice (Year 2)",
    details: [
      "Tailored Mentorship: Each youth is paired with a peer mentor and an experienced professional.",
      "Hands-On Learning: Real exposure through workshops, community projects, and shadowing.",
      "Skill Sharpening: Focused training aligned with career or entrepreneurial goals.",
      "Progress Monitoring: Regular check-ins for accountability and support."
    ],
    message: "Here, youth begin to see what’s possible—and start practicing for the real world."
  },
  {
    title: "Paid Experience & Growth (Year 3)",
    details: [
      "Work Placement / Apprenticeship: Paid opportunities with partner organizations.",
      "Financial Literacy & Savings: Guidance on managing income and building independence.",
      "Advanced Training: Leadership, entrepreneurship, and higher-level skills.",
      "Confidence Building: Transitioning from learners into leaders."
    ],
    message: "At this stage, youth are no longer just preparing—they are actively shaping their future."
  },
  {
    title: "Establishment & Independence (Year 4)",
    details: [
      "Independence Launch: Entering careers as skilled employees or self-employed professionals.",
      "Support & Oversight: Continued guidance from the society and mentors.",
      "Equipped for Success: With discipline, confidence, savings, and practical tools for life.",
      "Community Role Model: Graduates return to inspire and mentor others."
    ],
    message: "By this stage, youth are not only thriving themselves, but helping to lift up the next generation."
  }
];

function PlanOfAction() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container">
      <div className="hero">
        <header>
          <h1>Plan of Action</h1>
          <p>
            At <strong>Youth Prime Hub Society</strong>, every young person’s journey is unique. 
            From the start, our focus has been on guiding youth in Kamloops through the challenges of adolescence toward stable, independent, and thriving futures.
          </p>
        </header>
      </div>

      <section className="approach">
        <div className="wrapper">
          <h2>Our Approach</h2>
          <div className="content">
            <p>
              We don’t believe in one-size-fits-all programs. Instead, we design a <strong>progressive pathway</strong> that combines life skills, mentorship, real-world opportunities, and long-term support.
            </p>
            <p>
              But our work doesn’t end when the workshops are over or when a youth gets their first job.<br/>We stay committed to:
            </p>
            <div className="core-values">
              <span className="icon">
                <h4>Mentorship</h4>
              </span>
              <span className="icon">
                <h4>Accountability</h4>
              </span>
              <span className="icon">
                <h4>Community</h4>
              </span>
            </div>
          </div>  
        </div>
      </section>

      <section className="stages">
        <h2 className="stages-title">Your Journey: 4 Stages to Success</h2>
        <div className="stages-accordion">
          {stagesData.map((stage, idx) => (
            <div className="stage-card" key={idx}>
              <button
                className={`stage-header${openIndex === idx ? ' open' : ''}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`stage-details-${idx}`}
              >
                {stage.title}
              </button>
              {openIndex === idx && (
                <div className="stage-details" id={`stage-details-${idx}`}>
                  <ul>
                    {stage.details.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  <p className="stage-message">{stage.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="commitment-section">
        <h2 className="commitment-title">Our Commitment</h2>
        <div className="commitment-content">
          <ul>
            <li>
              <div className="commitment-list-title"><strong>Discipline & Consistency</strong></div>
              <div className="commitment-list-desc">Zero tolerance for indiscipline; commitment is non-negotiable.</div>
            </li>
            <li>
              <div className="commitment-list-title"><strong>Continuous Support</strong></div>
              <div className="commitment-list-desc">Even after graduation, Youth Prime Hub Society remains a family of accountability.</div>
            </li>
            <li>
              <div className="commitment-list-title"><strong>Lifelong Impact</strong></div>
              <div className="commitment-list-desc">Every youth leaves not just with skills, but with the mindset and network to thrive.</div>
            </li>
          </ul>
          <div className="commitment-actions">
            <button className="btn">Join the Journey</button>
            <button className="btn btn-secondary">Donate Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlanOfAction;
