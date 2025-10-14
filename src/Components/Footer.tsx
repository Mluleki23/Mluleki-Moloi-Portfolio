import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
      </ul>
      <p>&copy; 2025</p>
    </footer>
  );
};

export default Footer;