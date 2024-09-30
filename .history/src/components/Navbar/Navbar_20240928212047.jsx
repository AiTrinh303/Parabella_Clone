import { useEffect, useRef } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let underline = useRef(null);
  useEffect(() => {
    underline.current.style.width = '0';
    underline.current.style.transition = 'width 0.5s';
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <span role="img" aria-label="tree">🌳</span> Parabella
        </a>
      </div>
      <div className="navbar-center">
        <Link to='/' ref={underline} >Home</Link>
        <Link to='/erste-schritte' ref={underline}>Erste Schritte</Link>
        <Link to='/academy' ref={underline}>Academy</Link>
        <Link to='/contact' ref={underline}>Kontact</Link>
      </div>
      <div className="navbar-right">
        <button>Einloggen</button>
        <button>Go to App</button>
      </div>
    </nav>
  );
}

export default Navbar;
