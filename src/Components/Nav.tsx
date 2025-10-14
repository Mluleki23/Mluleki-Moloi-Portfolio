import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <span className="brand-name">Mluleki Moloi</span>
            <span className="brand-title">Software Developer</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/cv" className={location.pathname === '/cv' ? 'active' : ''}>CV</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;