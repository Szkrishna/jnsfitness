import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">JNS Fitness</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sports-academy">Sports Academy</Link>
        <Link to="/fitness-club">Fitness Club</Link>
        <Link to="/coliving">Coliving</Link>
      </nav>
    </header>
  );
}

export default Header;
