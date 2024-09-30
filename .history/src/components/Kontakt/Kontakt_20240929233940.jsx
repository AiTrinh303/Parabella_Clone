import './Kontakt.scss'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'

const Kontakt = () => {
  return (
    <div className='kontakt'>
      <div className="kontakt-info">
        <span>
            Kontakt
            <img src={msgIcon} alt="msg_icon" />
        </span>
        <h2>Nehmen Sie gerne Kontakt mit uns auf. Wir helfen gerne weiter.</h2>
        <ul>
            <li>
                <img src={mailIcon} alt="mail_icon" />
                info@parabella.de
            </li>
            <li>
                <img src={phoneIcon} alt="phone_icon" />
                017630478877
            </li>
            <li>
                <img src={locationIcon} alt="location_icon" />
                <span>Hauptsitz</span>
                München, Bayern
            </li>
        </ul>
      </div>

      <div className="kontakt-form">
            <form>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea placeholder='Nachricht'></textarea>
                <button type='submit'>Senden</button>
            </form>
        </div>    
    </div>
  )
}

export default Kontakt
