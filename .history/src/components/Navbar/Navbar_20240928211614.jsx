import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default active link index (Home)
  const linksRef = useRef([]); // To hold references of all the links

  const handleClick = (index) => {
    setActiveIndex(index); // Update the active link index
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <span role="img" aria-label="tree">🌳</span> Parabella
        </a>
      </div>
      <div className="navbar-center">
        {['Home', 'Erste Schritte', 'Academy', 'Kontakt'].map((label, index) => (
          <Link
            to={index === 0 ? '/' : `/${label.toLowerCase().replace(' ', '-')}`}
            key={label}
            ref={(el) => (linksRef.current[index] = el)} // Storing the link reference
            className={activeIndex === index ? 'active-link' : ''} // Conditional class based on activeIndex
            onClick={() => handleClick(index)} // Handle click event
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="navbar-right">
        <button>Einloggen</button>
        <button>Go to App</button>
      </div>
    </nav>
  );
};

export default Navbar;

