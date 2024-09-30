import { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // Track active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link
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
          to='/'
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </Link>
        <Link
          to='/erste-schritte'
          className={activeLink === 'erste-schritte' ? 'active' : ''}
          onClick={() => handleLinkClick('erste-schritte')}
        >
          Erste Schritte
        </Link>
        <Link
          to='/academy'
          className={activeLink === 'academy' ? 'active' : ''}
          onClick={() => handleLinkClick('academy')}
        >
          Academy
        </Link>
        <Link
          to='/contact'
          className={activeLink === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}
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
}

export default Navbar;
