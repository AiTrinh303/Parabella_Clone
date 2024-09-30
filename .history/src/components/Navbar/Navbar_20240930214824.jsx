import { useState } from 'react';
import './Navbar.scss';
import { NavLink } from "react-router-dom"
import menuIcon from '../../assets/menu.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <span role="img" aria-label="tree">🌳</span> Parabella
        </a>
      </div>

      <div className="navbar-center">
        <NavLink to='/' className='nav-link' activeClassName="active">Home</NavLink>
        <NavLink to='/erste-schritte' className='nav-link' activeClassName="active">Erste Schritte</NavLink>
        <NavLink to='/academy' className='nav-link' activeClassName="active">Academy</NavLink>
        <NavLink to='/contact' className='nav-link' activeClassName="active">Kontact</NavLink>
      </div>

      <div className="navbar-right">
        <button className='login'>Einloggen</button>
        <button className='app'>Go to App</button>

         {/* Hamburger menu icon for smaller screens */}
         <div className="menuIcon">
          <img
            src={menuIcon}
            alt="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          />
          <img 
            src={closeIcon} 
            alt="lose " />
        </div>

        {/* Menu for mobile, toggled with hamburger */}
        <div className={open ? "menu active" : "menu"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/erste-schritte" >Erste Schritte</NavLink>
          <NavLink to="/academy" >Academy</NavLink>
          <NavLink to="/contact" >Kontakt</NavLink>
          <a href='/' className='login'>Einloggen</a>
          <a href='/' className='app'>Go to App</a>
        </div>

      </div>

    </nav>
  );
}
export default Navbar;
