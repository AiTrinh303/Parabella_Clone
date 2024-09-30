import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
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
      </div>

      <div className="footer-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>          
        </ul>
      </div>  
    </div>
  )
}

export default Footer
