import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">Fatou Diallo</NavLink>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/apropos" className={({ isActive }) => isActive ? 'active' : ''}>À propos</NavLink></li>
        <li><NavLink to="/projets" className={({ isActive }) => isActive ? 'active' : ''}>Projets</NavLink></li>
        <li><NavLink to="/competences" className={({ isActive }) => isActive ? 'active' : ''}>Compétences</NavLink></li>
        <li><NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''}>CV</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;