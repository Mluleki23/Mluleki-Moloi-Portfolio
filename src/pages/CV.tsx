const CV = () => {
  const downloadCV = () => {
    window.print();
  };

  return (
    <div className="cv">
      <header className="cv-header">
        <h1>Mluleki Moloi</h1>
        <h2>Software Developer</h2>
        <div className="contact-info">
          <p>
            <span className="contact-icon">📧</span>
            <a href="mailto:melokuhlemluleki02@gmail.com">melokuhlemluleki02@gmail.com</a>
          </p>
          <p>
            <span className="contact-icon">📱</span>
            <a href="tel:+27791881002">079 188 1002</a>
          </p>
          <p>
            <span className="contact-icon">📍</span>
            <span>Vosloorus, South Africa</span>
          </p>
          <p>
            <span className="contact-icon">🔗</span>
            <a href="https://github.com/Mluleki23" target="_blank" rel="noopener noreferrer">github.com/Mluleki23</a>
          </p>
        </div>
        <button onClick={downloadCV} className="download-btn">Download CV</button>
      </header>

      <section className="personal-info">
        <h3>Personal Information</h3>
        <div className="info-grid">
          <div className="info-item">
            <strong>Date of Birth:</strong>
            <span>February 2, 2003</span>
          </div>
          <div className="info-item">
            <strong>Nationality:</strong>
            <span>South African</span>
          </div>
          <div className="info-item">
            <strong>Marital Status:</strong>
            <span>Single</span>
          </div>
          <div className="info-item">
            <strong>Gender:</strong>
            <span>Male</span>
          </div>
          <div className="info-item">
            <strong>Address:</strong>
            <span>87 Motlopi Street, Ponong, Vosloorus, 1475</span>
          </div>
        </div>
      </section>

      <section className="objective">
        <h3>Career Objective</h3>
        <p>
          Motivated and dedicated IT professional seeking a challenging role where I can apply and grow my technical
          skills to support organizational goals. I bring strong problem-solving abilities, excellent communication, and a
          collaborative mindset, with a proven ability to work effectively in team environments. Passionate about
          continuous learning and ready to take on new opportunities with focus, integrity, and a positive attitude.
        </p>
      </section>

      <section className="education">
        <h3>Education</h3>
        <div className="timeline">
          <div className="education-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Diploma in ICT Application Development</h4>
              <p className="institution">Durban University of Technology</p>
              <p className="duration">February 2022 – June 2025</p>
              <p className="description">Comprehensive program covering software development, database management, web technologies, and application design.</p>
            </div>
          </div>
          <div className="education-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Higher Certificate in Information Technology</h4>
              <p className="institution">Durban University of Technology</p>
              <p className="duration">February 2021 – November 2021</p>
              <p className="description">Foundation in IT fundamentals, programming basics, and computer systems.</p>
            </div>
          </div>
          <div className="education-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Matric Certificate</h4>
              <p className="institution">Wetsie Secondary School</p>
              <p className="duration">January 2016 – November 2020</p>
              <p className="description">Completed secondary education with focus on mathematics and science.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certificates">
        <h3>Professional Certificates</h3>
        <div className="certificates-grid">
          <div className="certificate-card">
            <div className="cert-icon">🎨</div>
            <h4>Responsive Web Design</h4>
            <p className="cert-provider">freeCodeCamp</p>
            <p className="cert-description">HTML, CSS, Flexbox, Grid, Responsive Design Principles</p>
            <a href="https://www.freecodecamp.org/certification/mlulekimoloi02/responsive-web-design" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
          </div>
          <div className="certificate-card">
            <div className="cert-icon">🌐</div>
            <h4>Introduction to Packet Tracer</h4>
            <p className="cert-provider">Cisco Networking Academy</p>
            <p className="cert-description">Network simulation, configuration, and troubleshooting</p>
          </div>
          <div className="certificate-card">
            <div className="cert-icon">⚡</div>
            <h4>JavaScript Algorithms and Data Structures</h4>
            <p className="cert-provider">freeCodeCamp</p>
            <p className="cert-description">ES6, Regular Expressions, OOP, Functional Programming</p>
            <a href="https://www.freecodecamp.org/certification/mlulekimoloi02/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
          </div>
          <div className="certificate-card">
            <div className="cert-icon">📊</div>
            <h4>Introduction to Data Science</h4>
            <p className="cert-provider">Cisco Networking Academy</p>
            <p className="cert-description">Data analysis, visualization, and interpretation</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h3>Technical Skills</h3>
        <div className="skills-container">
          <div className="skills-section">
            <h4>💻 Languages & Frameworks</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">ASP.NET</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>
          <div className="skills-section">
            <h4>🌐 Networking & Systems</h4>
            <div className="skill-tags">
              <span className="skill-tag">Computer Technology Fundamentals</span>
              <span className="skill-tag">Networking Essentials</span>
              <span className="skill-tag">Cisco Packet Tracer</span>
            </div>
          </div>
          <div className="skills-section">
            <h4>🎯 Professional Strengths</h4>
            <div className="skill-tags">
              <span className="skill-tag">Excellent Communication</span>
              <span className="skill-tag">Teamwork & Collaboration</span>
              <span className="skill-tag">Time Management</span>
              <span className="skill-tag">Leadership</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Adaptability</span>
            </div>
          </div>
        </div>
      </section>

      <section className="languages">
        <h3>Languages</h3>
        <div className="language-list">
          <div className="language-item">
            <span className="language-name">English</span>
            <div className="proficiency-bar">
              <div className="proficiency-fill" style={{width: '90%'}}></div>
            </div>
            <span className="proficiency-label">Fluent</span>
          </div>
          <div className="language-item">
            <span className="language-name">IsiZulu</span>
            <div className="proficiency-bar">
              <div className="proficiency-fill" style={{width: '100%'}}></div>
            </div>
            <span className="proficiency-label">Native</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;