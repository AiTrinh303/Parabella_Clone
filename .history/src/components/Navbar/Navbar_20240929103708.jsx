import './Navbar.scss';
import { NavLink } from "react-router-dom"

const Navbar = () => {
  
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
        <button>Go to App</button>
      </div>
    </nav>
  );
}
export default Navbar;
