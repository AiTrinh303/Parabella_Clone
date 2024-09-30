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
                <span>info@parabella.de</span>
            </li>
            <li>
                <img src={phoneIcon} alt="phone_icon" />
                <span className='phone'>017630478877</span>
            </li>
            <li>
                <img src={locationIcon} alt="location_icon" />
               <p>
                    <span className='title'>Hauptsitz</span>
                    <span>München, Bayern</span>
               </p>
            </li>
        </ul>
      </div>

      <div className="kontakt-form">
            <form>
                <div>
                    <label>Vorname</label>
                    <input type="text"  />
                    <label>Nachname </label>
                    <input type="text"  />
                </div>
                <label>E-Mail(erforderlich)</label>
                <input type="email"  />
                <label>Telefon (erforderlich)</label>
                <input type="number"  />
                <label>Nachricht</label>
                <textarea ></textarea>
                <button type='submit' >Senden</button>
            </form>
        </div>    
    </div>
  )
}

export default Kontakt
