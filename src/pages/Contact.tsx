import React from "react";
import "../App.css";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <p className="contact-subtitle">
        I'm always open to discussing new projects, opportunities, or
        partnerships
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-text">
                <h3>Email</h3>
                <p>
                  <a href="mailto:melokuhlemluleki02@gmail.com">
                    melokuhlemluleki02@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-text">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+27791881002">079 188 1002</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-text">
                <h3>LinkedIn</h3>
                <p>
                  <a
                    href="https://www.linkedin.com/in/mluleki-moloi-0998a0375/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/mluleki-moloi-0998a0375/
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a
                href="mailto:melokuhlemluleki02@gmail.com"
                className="social-link"
                title="Email"
              >
                <span>Gmail</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mluleki-moloi-0998a0375/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <span>LinkedIn</span>
              </a>
              <a href="tel:+27791881002" className="social-link" title="Phone">
                <span>Phone</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
