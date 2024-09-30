import { useState } from 'react';
import './Navbar.scss';
import { Link, NavLink } from "react-router-dom"
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
        <NavLink to='/' activeClassName="active">Home</NavLink>
        <NavLink to='/erste-schritte' activeClassName="active">Erste Schritte</NavLink>
        <NavLink to='/academy' activeClassName="active">Academy</NavLink>
        <NavLink to='/contact' activeClassName="active">Kontact</NavLink>
      </div>

      <div className="navbar-right">
        <button className='login'>Einloggen</button>
        <button className='app'>Go to App</button>

        <div className="menuIcon">
          <img
            src={menuIcon}
            alt="menu-Icon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
        <NavLink to='/' activeClassName="active">Home</NavLink>
        <NavLink to='/erste-schritte' activeClassName="active">Erste Schritte</NavLink>
        <NavLink to='/academy' activeClassName="active">Academy</NavLink>
        <NavLink to='/contact' activeClassName="active">Kontact</NavLink>
          <a href="/">Einloggen</a>
          <a href="/">Go to App</a>
        </div>
      </div>

    </nav>
  );
}
export default Navbar;
