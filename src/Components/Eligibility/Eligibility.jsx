import React from 'react';
import './Eligibility.css';

export default function Eligibility({ defaultOpen = false }) {
  return (
    <section className="eligibility" aria-labelledby="eligibility-heading">
      <h3 id="eligibility-heading" className="eligibility-title">Eligibility & Why We Exist</h3>

      <details className="eligibility-details" open={defaultOpen}>
        <summary className="eligibility-summary">🎯 Eligibility criteria (click to expand)</summary>

        <div className="eligibility-content">
          <h4>Youth Prime Hub Society (YPHS) supports youth ages 14–24 who meet one or more of the following:</h4>
          <ol>
            <li>At risk or vulnerable youth, including those facing or recovering from challenges such as homelessness, substance use, family breakdown, or behavioral struggles.</li>
            <li>Youth transitioning out of care, those leaving foster care, group homes, or other care systems who require mentorship, life skills, and emotional support to build stability and independence.</li>
            <li>Youth currently in care, young people still in foster or group care who need early preparation, goal setting, and confidence building before aging out of the system.</li>
            <li>Unemployed or underemployed youth, individuals not currently in full time work or education, or working in roles that do not match their potential.</li>
            <li>Youth disconnected from school or training, those who have dropped out, are uncertain about post secondary options, or seeking alternative, hands on learning paths.</li>
            <li>Newcomer, refugee, or Indigenous youth, young people requiring culturally relevant mentorship, community integration, and career guidance.</li>
            <li>Youth seeking direction and personal growth, individuals motivated to improve their confidence, social connections, and employable skills, even if not in crisis.</li>
          </ol>

          <hr />

          <h4>The Gap YPHS Fills</h4>
          <p>
            Youth Prime Hub Society exists to bridge the transition gap faced by many young people who are no longer supported by youth care systems yet not fully ready for adult independence.
          </p>
          <p>
            Without intentional mentorship, many face heightened risks of:
          </p>
          <ul>
            <li>Homelessness or housing instability</li>
            <li>Substance use or criminal involvement</li>
            <li>Social isolation and poor mental health</li>
            <li>Cycles of unemployment and poverty</li>
          </ul>

          <p>
            YPHS provides a safe, empowering bridge, offering one on one and group mentorship, life and employability skill development, and community connection to help youth build confidence, self reliance, and purpose.
          </p>

          <hr />

          <h4>🚫 Not primarily eligible</h4>
          <p>To ensure resources reach those most in need, YPHS programs are not primarily designed for:</p>
          <ul>
            <li>Youth already employed full-time and earning a stable income</li>
            <li>Youth currently enrolled full-time in post-secondary or apprenticeship programs</li>
            <li>Youth who already receive similar supports through other funded employment or training programs</li>
          </ul>
        </div>
      </details>
    </section>
  );
}
