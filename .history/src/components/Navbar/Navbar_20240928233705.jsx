import { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

 
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <span role="img" aria-label="tree">🌳</span> Parabella
        </a>
      </div>
      <div className="navbar-center">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/erste-schritte'>Erste Schritte</NavLink>
        <NavLink to='/academy'>Academy</NavLink>
        <NavLink to='/contact'>Kontact</NavLink>
      </div>
      <div className="navbar-right">
        <button>Einloggen</button>
        <button>Go to App</button>
      </div>
    </nav>
  );
}

export default Navbar;
