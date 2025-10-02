import React from 'react';
import './WhyYouth.css';

function WhyYouthPage() {
  return (
    <>
      <div className="container">
        <div className="hero">
            <header>
                <h1>Why Youth?</h1>
                <p>For young people in Kamloops, mentorship, guidance, and opportunity can change everything.</p>
                <p><em>Watch the Video</em></p>
            </header>
        </div>

        {/* Sub-Introduction */}
        <section className="sub-intro">
            <h2 className="stat title-bg">73% of Canadian youth aged 15–24 <br /> report drinking alcohol in the past year.</h2>
            <p>
                That's nearly 3 in 4
                young people. For many, alcohol becomes more than just a social activity—it's a distraction
                from their goals, a gateway to risky choices, and sometimes a step toward dependency.
            </p>
            <p><strong>But positive outlets, mentorship, and safe spaces can help youth grow with resilience and purpose.</strong></p>
        </section>

        {/* Highlight Section */}
        <section className="highlight">
            <div className="highlight-wrapper">
                <h2 className="highlight-title">Youth support changes everything.</h2>
                <div className="highlight-content">
                    <div className="highlight-item">
                        <h3>Health</h3>
                        <h4>53% increase in opioid hospitalizations among youth aged 15–24.</h4>
                        <p>
                            This rise was faster than in any other age group. Behind every number is a teenager or young adult 
                            whose life was suddenly in danger.
                        </p>
                    </div>

                    <div className="highlight-item">
                        <h3>Time</h3>
                        <h4>28% of youth reported vaping in the last 30 days.</h4>
                        <p>
                            For many, it's not just a habit—it's hours of distraction and health risks that keep them from sports, school, or passions that could shape their lives.
                        </p>
                    </div>
                                            
                    <div className="highlight-item">
                        <h3>Education</h3>
                        <h4>48% of Canadian youth reported cannabis use in the past year.</h4>
                        <p>
                            Nearly half experiment without awareness of long-term risks. These choices can impact focus, school performance, and future opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* How We Tackle */}
        <section className="crisis">
            <div className="crisis-wrapper">
                <h2>How do we tackle the youth crisis?</h2>
                <p>
                We work directly with youth, mentors, and community leaders in Kamloops to build safe, supportive 
                environments where young people can thrive. From life skills programs and positive activities 
                to mentorship and leadership training, our mission is to empower youth to rise, lead, and inspire.
                </p>
                <p>
                And with every program, we focus not just on activities but also on resilience, mental health, 
                and long-term sustainability—ensuring support that lasts.
                </p>
            </div>
        </section>


            {/* {Call to actions} */}
            <section className="call-to-action video-bg-section">
                <video className="video-bg" autoPlay loop muted playsInline>
                    <source src="/youth-mentor-clip.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="cta-content">
                    <h2>You can help transform lives.</h2>
                    <p>Every hour of mentorship, every safe space created, every opportunity given helps youth rise above risks and thrive.</p>
                    <a href="#" className="btn">Get Involved</a>
                </div>
            </section>

      </div>
    </>
  )
}

export default WhyYouthPage;
