import React, { useState } from 'react';
import './PlanOfAction.css';

  const stagesData = [
    {
      index: 0,
      title: "Discovery & Foundation",
      subtitle: "Year 1",
      summary: "Personalized guidance and life skills help each youth discover their strengths and set a strong foundation for growth.",
      message: "This stage builds the groundwork for growth by giving every young person a clear sense of who they are and where they want to go."
    },
    {
      index: 1,
      title: "Mentorship & Guided Practice",
      subtitle: "Year 2",
      summary: "Mentorship, practical learning, and focused support help youth gain real-world experience and prepare for success.",
      message: "Here, youth begin to see what is possible and start practicing for the real world."
    },
    {
      index: 2,
      title: "Paid Experience & Growth",
      subtitle: "Year 3",
      summary: "With paid work, financial skills, and leadership training, youth gain the confidence and ability to step into leadership roles.",
      message: "At this stage, youth move beyond preparation and start actively shaping their future."
    },
    {
      index: 3,
      title: "Establishment & Independence",
      subtitle: "Year 4",
      summary: "Youth launch into careers or entrepreneurship, equipped with confidence and a passion to inspire others.",
      message: "By this stage, youth are thriving and ready to help lift up the next generation."
    }
  ];

function PlanOfAction() {
  const [openIndex, setOpenIndex] = useState(null);

  // Example background images for each stage (replace with your own if needed)
  const stageImages = [
    'https://images.unsplash.com/photo-1460500063983-994d4c27756c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=27c2758e7f3aa5b8b3a4a1d1f1812310',
    'https://images.unsplash.com/photo-1460378150801-e2c95cb65a50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=1b5934b990c027763ff67c4115b6f32c',
    'https://images.unsplash.com/photo-1458400411386-5ae465c4e57e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=47756f965e991bf72aa756b410929b04',
    'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c28fd5ea58ed2262a83557fea10a6e87'
  ];



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


      {/* Horizontal Accordion Section Only */}
      <section className="stages">
        <h2 className="stages-title">Your Journey: 4 Stages to Success</h2>
        <div className="accordion">
          <div className="accordion-flex">
            {stagesData.map((stage, idx) => {
              const expanded = openIndex === idx;
              return (
                <div
                  key={stage.index}
                  className={`stage-accordion-item${expanded ? ' expanded' : ''}`}
                  style={{
                    backgroundImage: `url(${stageImages[stage.index]})`,
                    flex: openIndex === null ? 1 : expanded ? 5 : 1,
                    transition: 'flex 0.5s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  onMouseEnter={() => setOpenIndex(idx)}
                  onMouseLeave={() => setOpenIndex(null)}
                  tabIndex={0}
                  onFocus={() => setOpenIndex(idx)}
                  onBlur={() => setOpenIndex(null)}
                  role="button"
                  aria-expanded={expanded}
                >
                  <div className="stage-header always-center">
                    <span className="stage-subtitle">{stage.subtitle}</span>
                    <span className="stage-title">{stage.title}</span>
                  </div>
                  {expanded && (
                    <div className="stage-content-box" aria-hidden={!expanded}>
                      <div className="stage-summary">{stage.summary}</div>
                      <p className="stage-message">{stage.message}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
