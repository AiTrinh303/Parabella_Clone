import { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <span role="img" aria-label="tree">🌳</span> Parabella
        </a>
      </div>
      <div className="navbar-center">
        <ul>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/erste-schritte'>Erste Schritte</CustomLink>
          <CustomLink to='/academy'>Academy</CustomLink>
          <CustomLink to='/contact'>Kontact</CustomLink>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Einloggen</button>
        <button>Go to App</button>
      </div>
    </nav>
  );
}

export default Navbar;
