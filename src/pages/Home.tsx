import { Link } from 'react-router-dom';
import profileImage from '../Images/1000453032.jpg';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Mluleki Moloi</span></h1>
            <h2 className="hero-subtitle">Software Developer</h2>
            <p className="hero-description">
              Passionate about creating innovative solutions and building impactful applications
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Multiple</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Mluleki Moloi" />
          </div>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Motivated and dedicated IT professional seeking a challenging role where I can apply and grow my technical
            skills to support organizational goals. I bring strong problem-solving abilities, excellent communication, and a
            collaborative mindset, with a proven ability to work effectively in team environments.
          </p>
          <p>
            Passionate about continuous learning and ready to take on new opportunities with focus, integrity, and a positive attitude.
            Currently pursuing a Diploma in ICT Application Development at Durban University of Technology.
          </p>
        </div>
      </section>

      <section className="skills-preview">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-icon">💻</div>
            <h3>Languages & Frameworks</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>C#</span>
              <span>ASP.NET</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>SQL</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-icon">🌐</div>
            <h3>Networking & Systems</h3>
            <div className="skill-tags">
              <span>Computer Technology Fundamentals</span>
              <span>Networking Essentials</span>
              <span>Packet Tracer</span>
            </div>
          </div>
          <div className="skill-category">
            <div className="skill-icon">🎯</div>
            <h3>Professional Strengths</h3>
            <div className="skill-tags">
              <span>Communication</span>
              <span>Teamwork</span>
              <span>Time Management</span>
              <span>Leadership</span>
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </section>

      <section className="education-preview">
        <h2>Education</h2>
        <div className="education-cards">
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <h3>Diploma in ICT Application Development</h3>
            <p className="institution">Durban University of Technology</p>
            <p className="duration">2022 - 2025</p>
          </div>
          <div className="education-card">
            <div className="education-icon">📜</div>
            <h3>Higher Certificate in IT</h3>
            <p className="institution">Durban University of Technology</p>
            <p className="duration">2021</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let's Work Together</h2>
        <p>I'm always interested in hearing about new opportunities and projects</p>
        <Link to="/contact" className="btn btn-primary">Contact Me</Link>
      </section>
    </div>
  );
};

export default Home;