import React, { useState } from 'react';
import './Home.css';

const programs = [
	{
		title: 'Personal Growth',
		content: (
			<ul>
				<li>
					<strong>Mentorship & Coaching:</strong> One-on-one guidance from mentors in areas of passion.
				</li>
				<li>
					<strong>Life Skills Training:</strong> Financial literacy, communication, decision-making, and confidence-building.
				</li>
			</ul>
		),
		backgroundImage: '/youth-growth-img.jpg',
	},
	{
		title: 'Skills & Education',
		content: (
			<ul>
				<li>
					<strong>Workshops & Bootcamps:</strong> Training in leadership, entrepreneurship, digital skills, and trades.
				</li>
				<li>
					<strong>Peer Learning & Scholarships:</strong> Collaborative learning plus access to scholarships and internships.
				</li>
			</ul>
		),
		backgroundImage: '/youth-skills-img.jpg',
	},
	{
		title: 'Leadership & Community',
		content: (
			<ul>
				<li>
					<strong>Youth Councils & Projects:</strong> Hands-on leadership through decision-making and real initiatives.
				</li>
				<li>
					<strong>Volunteer Opportunities:</strong> Building responsibility and giving back to the community.
				</li>
			</ul>
		),
		backgroundImage: '/youth-leadership-img.jpg',
	},
	{
		title: 'Economic Empowerment',
		content: (
			<ul>
				<li>
					<strong>Industry Training:</strong> Real-world experience with professionals, trades, and mentors.
				</li>
			</ul>
		),
		backgroundImage: '/youth-empower-img.jpg',
	},
];

function Home() {
	const [active, setActive] = useState(0);

	return (
		<div className="container">
			<section className="hero-section">
				<h2>Youth Prime Social Hub</h2>
				<div className="hero-content">
					<h1 className="hero-title">Empowering Youth. Shaping Futures.</h1>
					<p className="hero-tagline">
						At Youth Prime Hub Society, we empower, educate, and equip young people to turn their dreams into reality — and no one has to do it alone.
					</p>
					<a href="#" className="hero-cta btn">
						Start your journey today
					</a>
				</div>
			</section>

			<section className="about-section">
				<h2 className="about-title">About Us</h2>
				<p className="about-desc">Youth Prime Hub Society is a community-driven space for young people ages 14–24.</p>
				<ul className="about-list">
					<li>
						<strong>Dream boldly</strong> with vision and purpose.
					</li>
					<li>
						<strong>Grow knowledge</strong> through education and skills training.
					</li>
					<li>
						<strong>Gain experience</strong> with mentorship and industry opportunities.
					</li>
					<li>
						<strong>Lead change</strong> in their communities.
					</li>
				</ul>
				<p className="about-message">
					Together, we’re raising a generation of confident, resilient leaders shaping a brighter tomorrow.
				</p>
			</section>

			<section className="programs-section">
				<h2 className="programs-title">Our Programs &amp; Services</h2>
				<div className="programs-wrapper">
					<div className="program-tab-container">
						{programs.map((program, index) => (
							<button
								key={index}
								className={`programs-tab ${active === index ? 'active' : ''}`}
								onClick={() => setActive(index)}
							>
								{program.title}
							</button>
						))}
					</div>
									<div className="programs-content">
									  <div className="program-card">
									    <h3 className="program-title">{programs[active].title}</h3>
									    <div className="program-details">{programs[active].content}</div>
									  </div>
									  <div className="program-background">
										<img src={programs[active].backgroundImage} alt="background" srcSet="" />
									  </div>
									</div>
				</div>
			</section>					

			<section className="promise-section">
				<h2 className="promise-title">Our Promise</h2>
				<ul className="promise-list">
					<li>
						<span className="promise-icon promise-icon-star" aria-label="Star">★</span>
						<span className="promise-text"><strong>Discover</strong> their passions and talents.</span>
					</li>
					<li>
						<span className="promise-icon promise-icon-mentor" aria-label="Mentor">🎓</span>
						<span className="promise-text"><strong>Gain</strong> hands-on experience with mentors and industries.</span>
					</li>
					<li>
						<span className="promise-icon promise-icon-growth" aria-label="Growth">🌱</span>
						<span className="promise-text"><strong>Build</strong> confidence, skills, and independence for a brighter future.</span>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default Home;
