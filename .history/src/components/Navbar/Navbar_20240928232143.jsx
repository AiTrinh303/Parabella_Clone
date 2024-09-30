import { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const initialUnderlineStyle = localStorage.getItem('underlineStyle')
    ? JSON.parse(localStorage.getItem('underlineStyle'))
    : 'underline'; // Default style is underline

  const [underlineStyle, setUnderlineStyle] = useState(initialUnderlineStyle);

  useEffect(() => {
    // Store the updated underline style in localStorage whenever it changes
    localStorage.setItem('underlineStyle', JSON.stringify(underlineStyle));
  }, [underlineStyle]);

  const handleClick = (path) => {
    setUnderlineStyle(path); // Update underline style based on the path clicked
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
          className={underlineStyle === '/' ? 'underline' : ''}
          onClick={() => handleClick('/')}
        >
          Home
        </Link>
        <Link
          to="/erste-schritte"
          className={underlineStyle === '/erste-schritte' ? 'underline' : ''}
          onClick={() => handleClick('/erste-schritte')}
        >
          Erste Schritte
        </Link>
        <Link
          to="/academy"
          className={underlineStyle === '/academy' ? 'underline' : ''}
          onClick={() => handleClick('/academy')}
        >
          Academy
        </Link>
        <Link
          to="/contact"
          className={underlineStyle === '/contact' ? 'underline' : ''}
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
