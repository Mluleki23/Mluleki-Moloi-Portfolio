const CVPdf = new URL("../Images/Mluleki CV (3).pdf", import.meta.url).href;

const CV = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CVPdf;
    link.download = "Mluleki-Moloi-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv">
      <header className="cv-header">
        <h1>Mluleki Moloi</h1>
        <h2>Software Developer</h2>
        <div className="contact-info">
          <p>
            <a href="mailto:melokuhlemluleki02@gmail.com">
              melokuhlemluleki02@gmail.com
            </a>
          </p>
          <p>0791881002</p>
          <p>52 Oribi Road , Pelham , Pietermarizburg 3201</p>
          <p>2003-02-02</p>
          <p>South Africa</p>
          <p>Male</p>
          <p>
            <a
              href="https://github.com/Mluleki23"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Mluleki23
            </a>
          </p>
          <p>
            <a
              href="https://mluleki-moloi-portfolio.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mluleki-moloi-portfolio.onrender.com
            </a>
          </p>
        </div>
        <button onClick={downloadCV} className="download-btn">
          Download CV
        </button>
      </header>

      <section className="personal-info">
        <h3>Personal Information</h3>
        <div className="info-grid">
          <div className="info-item">
            <strong>Date of Birth:</strong>
            <span>2003-02-02</span>
          </div>
          <div className="info-item">
            <strong>Nationality:</strong>
            <span>South Africa</span>
          </div>
          <div className="info-item">
            <strong>Gender:</strong>
            <span>Male</span>
          </div>
          <div className="info-item">
            <strong>Address:</strong>
            <span>52 Oribi Road , Pelham , Pietermarizburg 3201</span>
          </div>
        </div>
      </section>

      <section className="objective">
        <h3>Profile</h3>
        <p>
          Motivated and dedicated Software Developer eager to apply and grow my technical skills. Strong problem-
          solving, communication, and teamwork abilities. Passionate about clean code, continuous learning, and
          building innovative solutions.
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
              <p className="duration">2025</p>
            </div>
          </div>
          <div className="education-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Higher Certificate in Information Technology</h4>
              <p className="institution">Durban University of Technology</p>
              <p className="duration">2021</p>
            </div>
          </div>
          <div className="education-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>Matric Certificate</h4>
              <p className="institution">Wetsie Secondary Schoool</p>
              <p className="duration">2020</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certificates">
        <h3>Certificates</h3>
        <div className="certificates-grid">
          <div className="certificate-card">
            <h4>Responsive Web Design</h4>
            <p className="cert-provider">freeCodeCamp</p>
          </div>
          <div className="certificate-card">
            <h4>JavaScript Algorithms And Data Structures</h4>
            <p className="cert-provider">freeCodeCamp</p>
          </div>
          <div className="certificate-card">
            <h4>Understanding Artificial Intelligence</h4>
            <p className="cert-provider">datacamp</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <div className="skills-container">
          <div className="skills-section">
            <h4>Languages & Frameworks</h4>
            <div className="skill-tags">
              <span className="skill-tag">C#</span>
              <span className="skill-tag">MVC</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
          </div>
          <div className="skills-section">
            <h4>Networking & Systems</h4>
            <div className="skill-tags">
              <span className="skill-tag">
                Computer Technology Fundamentals
              </span>
              <span className="skill-tag">Networking Essentials</span>
              <span className="skill-tag">Operating Systems</span>
            </div>
          </div>
          <div className="skills-section">
            <h4>Databases</h4>
            <div className="skill-tags">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>
          <div className="skills-section">
            <h4>Professional Strengths</h4>
            <div className="skill-tags">
              <span className="skill-tag">Excellent communication and teamwork</span>
              <span className="skill-tag">Strong time management and leadership abilities</span>
              <span className="skill-tag">Ability to work under pressure and meet deadlines</span>
              <span className="skill-tag">Analytical and problem-solving skills</span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <h3>Professional Experience</h3>
        <div className="experience-item">
          <h4>CodeTribe Digital Solutions Developer Trainee, mLab Southern Africa</h4>
          <p className="duration">07/2025 – 03/2026</p>
          <p className="location">Pietermarizburg, KZN</p>
          <ul>
            <li>Collaborate with other trainees as needed to define and develop requirements derived from discussions with the facilitator.</li>
            <li>Identify and collaborate with a local small business to define and develop requirements for a relevant digital solution.</li>
            <li>Learn to develop applications and code software applications to adhere to designs that support business requirements for external customers.</li>
            <li>Learn to write requirement specifications and design documents for a variety of development tasks including feature development, database design and system integrations.</li>
            <li>Attend to the required refactoring, debugging, and implementing of necessary changes.</li>
            <li>Document processes for specifications to ensure quality.</li>
            <li>Evaluate system specifications against client requirements.</li>
            <li>Participate in implementing new software features and maintain existing features.</li>
            <li>Assist in developing user guide/ manuals as necessary.</li>
            <li>Self-organise</li>
            <li>Plan and Design</li>
            <li>Complete projects, assignments, tasks and provide reports as and when needed.</li>
            <li>Participate in all Scrum events/ meeting (Stand up meeting, Planning, review, retrospective etc.).</li>
          </ul>
        </div>
      </section>

      <section className="languages">
        <h3>Languages</h3>
        <div className="language-list">
          <div className="language-item">
            <span className="language-name">Isizulu</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
          </div>
        </div>
      </section>

      <section className="references">
        <h3>References</h3>
        <p>Dlozi Mthethwa, Facilitator</p>
        <p>dlozi.mthethwa@gmail.com, 0763509451</p>
      </section>
    </div>
  );
};

export default CV;
