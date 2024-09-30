import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className="logo">
          <a href="/" >
            <span role="img" aria-label="tree">🌳</span> Parabella
          </a>
          <p>CSRD Berichte einfach und kostengünstig erstellen</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" />
            </a>
          </div>
        </div>
        
        <div className="links">
          <ul>
            <li><a href="/kontakt">Kontakt</a></li>
            <li><a href="/about">Über uns</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Registrieren</a></li>
          </ul>
        </div>        
      </div>

      {/* <hr /> */}

      <div className='bottom'>
        <div className="left">
          <a href="/agb">AGB</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/impressum">Impressum</a>
        </div>
  
        <div className="right">
          <span>© Copyright 2024 - Parabella Analytics</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
