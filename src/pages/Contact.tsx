import React, { useState } from "react";
import "../App.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

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
                <h3>Location</h3>
                <p>
                  87 Motlopi Street
                  <br />
                  Ponong, Vosloorus
                  <br />
                  1475, South Africa
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-text">
                <h3>GitHub</h3>
                <p>
                  <a
                    href="https://github.com/Mluleki23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Mluleki23
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a
                href="https://github.com/Mluleki23"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <span>GitHub</span>
              </a>
              <a
                href="mailto:melokuhlemluleki02@gmail.com"
                className="social-link"
                title="Email"
              >
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
