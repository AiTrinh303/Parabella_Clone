import { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [underlineStyle, setUnderlineStyle] = useState(localStorage.getItem('underlineStyle') ? JSON.parse(localStorage.getItem('underlineStyle')) : {"underline"});

  const element= document.documentElement;

  useEffect(() => {
    if (underlineStyle === 'underline') {
      element.classList.add('underline');
      localStorage.setItem('underlineStyle', 'underline');
    }
    else {
      element.classList.remove('underline');
      localStorage.setItem('underlineStyle', 'no-underline');
    }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <span role="img" aria-label="tree">🌳</span> Parabella
        </a>
      </div>
      <div className="navbar-center">
        <Link to='/' onClick={}>Home</Link>
        <Link to='/erste-schritte'>Erste Schritte</Link>
        <Link to='/academy'>Academy</Link>
        <Link to='/contact'>Kontact</Link>
      </div>
      <div className="navbar-right">
        <button>Einloggen</button>
        <button>Go to App</button>
      </div>
    </nav>
  );
}

export default Navbar;
