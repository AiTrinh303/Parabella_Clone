import { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/'); // State to track active link

  const handleClick = (path) => {
    setActiveLink(path); // Update the active link
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <span role="img" aria-label="tree">🌳</span> Parabella
        </a>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className={activeLink === '/' ? 'underline' : ''}
          onClick={() => handleClick('/')}
        >
          Home
        </Link>
        <Link
          to="/erste-schritte"
          className={activeLink === '/erste-schritte' ? 'underline' : ''}
          onClick={() => handleClick('/erste-schritte')}
        >
          Erste Schritte
        </Link>
        <Link
          to="/academy"
          className={activeLink === '/academy' ? 'underline' : ''}
          onClick={() => handleClick('/academy')}
        >
          Academy
        </Link>
        <Link
          to="/contact"
          className={activeLink === '/contact' ? 'underline' : ''}
          onClick={() => handleClick('/contact')}
        >
          Kontakt
        </Link>
      </div>
      <div className="navbar-right">
        <button>Einloggen</button>
        <button>Go to App</button>
      </div>
    </nav>
  );
};

export default Navbar;

