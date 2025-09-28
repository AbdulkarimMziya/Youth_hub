
import React from 'react';
import './Donate.css';

export default function Donate() {
  return (
    <div className="donate-container">
      <h2>Support the Youth</h2>
      <p className="donate-desc">
        Your donation empowers youth with skills, mentorship, and opportunities. Every contribution helps us reach more young people and create lasting impact.
      </p>
      <div className="donate-card">
        <div className="donate-amounts">
          <button className="donate-amount-btn">$10</button>
          <button className="donate-amount-btn">$25</button>
          <button className="donate-amount-btn">$50</button>
          <button className="donate-amount-btn">Other</button>
        </div>
        <button className="donate-main-btn">Donate Now</button>
        <p className="donate-note">100% of your donation goes to youth programs. Thank you for your generosity!</p>
      </div>
    </div>
  );
}
