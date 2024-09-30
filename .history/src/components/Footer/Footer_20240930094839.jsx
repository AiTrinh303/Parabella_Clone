import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className= 'top'>
        <div className="logo">
          <a href="/" className="navbar-logo">
            <span role="img" aria-label="tree">🌳</span> Parabella
          </a>
          <p>CSRD Berichte einfach und kostengünstig erstellen</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" /></a>
            <a href="https://www.twitter.com/"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" /></a>
            <a href="https://www.instagram.com/"><img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" /></a>          
        </div>
        
        <div className="links">
          <ul>
            <li>Kontakt</li>
            <li>Über uns</li>
            <li>Services</li>          
          </ul>
          <ul>
            <li>Login</li>
            <li>Registrieren</li>             
          </ul>
        </div>  
      
      </div>

      </div>
      <hr />

      <div className='bottom'>
        <div className="left">
          <span>AGB</span>
          <span>Datenschutz</span>
          <span>Impressum</span>
        </div>
  
        <div className="right">
          <span>© Copyright 2024 - Parabella Analytics</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
