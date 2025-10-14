import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mluleki Moloi</h3>
          <p>Software Developer passionate about creating innovative solutions</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul className="footer-links">
            <li><a href="https://github.com/Mluleki23" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="mailto:melokuhlemluleki02@gmail.com">Email</a></li>
            <li><a href="tel:+27791881002">Phone</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Mluleki Moloi. All rights reserved.</p>
        <p className="footer-tagline">Built with React & TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;