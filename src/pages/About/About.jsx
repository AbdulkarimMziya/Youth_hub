import styles from './About.module.css';
import img1 from '../../assets/img1.jpg';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <h1>About Youth Prime Hub Society</h1>
        <p>Empowering youth for a brighter future</p>
      </section>

      {/* Our Story Section */}
      <section className={styles.ourStory}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.btnJoin}>Join Us</button>
                <button className={styles.btnDonate}>Donate</button>
              </div>
            </div>
            <div className={styles.storyGrid}>
              <div className={styles.skewedGrid}>
                <div className={styles.gridItem}>
                  <img src={img1} alt="Youth activities" />
                </div>
                <div className={styles.gridItem}>
                  <img src={img1} alt="Community engagement" />
                </div>
                <div className={styles.gridItem}>
                  <img src={img1} alt="Youth development" />
                </div>
                <div className={styles.gridItem}>
                  <img src={img1} alt="Leadership training" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={styles.ourMission}>
        <div className={styles.container}>
          <div className={styles.missionHeader}>
            <h2>Our Mission</h2>
            <p>Empowering youth through comprehensive programs that foster growth, leadership, and community engagement.</p>
          </div>
          <div className={styles.missionCards}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>🤝</div>
              <h3>Mentorship</h3>
              <div className={styles.cardOverlay}>
                <p>We provide one-on-one mentoring with experienced professionals who guide youth through personal and career development, offering insights, support, and networking opportunities.</p>
              </div>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>💡</div>
              <h3>Development</h3>
              <div className={styles.cardOverlay}>
                <p>Through workshops, training programs, and hands-on projects, we help youth develop technical skills, soft skills, and entrepreneurial mindset needed for success.</p>
              </div>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>👑</div>
              <h3>Leadership</h3>
              <div className={styles.cardOverlay}>
                <p>We cultivate future leaders through leadership camps, community service projects, and opportunities to take on responsibility in our programs and initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className={styles.theTeam}>
        <div className={styles.container}>
          <h2>The Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={img1} alt="Team Member" />
                <div className={styles.memberInfo}>
                  <h3>Sarah Johnson</h3>
                  <p>Executive Director</p>
                </div>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={img1} alt="Team Member" />
                <div className={styles.memberInfo}>
                  <h3>Michael Chen</h3>
                  <p>Program Coordinator</p>
                </div>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={img1} alt="Team Member" />
                <div className={styles.memberInfo}>
                  <h3>Emily Rodriguez</h3>
                  <p>Youth Mentor</p>
                </div>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={img1} alt="Team Member" />
                <div className={styles.memberInfo}>
                  <h3>David Thompson</h3>
                  <p>Community Outreach</p>
                </div>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={img1} alt="Team Member" />
                <div className={styles.memberInfo}>
                  <h3>Lisa Park</h3>
                  <p>Skills Development Lead</p>
                </div>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <img src={img1} alt="Team Member" />
                <div className={styles.memberInfo}>
                  <h3>James Wilson</h3>
                  <p>Volunteer Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
