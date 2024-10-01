import './Kontakt.scss'
// import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

const Kontakt = () => {
    const form = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        form.current, {
           publicKey: process.env.REACT_APP_PUBLIC_KEY,
        })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: 'Success!',
            text: 'Message sent successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })  
          form.current.reset();      
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        },
      );
  };
  return (
    <div className='kontakt'>
      <div className="kontakt-info">
        <span>
            Kontakt
            {/* <img src={msgIcon} alt="msg_icon" /> */}
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

      <div data-aos="fade-left" className="kontakt-form">
            <form ref={form} onSubmit={handleSubmit}>
                <div className='name'>
                    <p>Name (erforderlich) </p>
                    <div >
                        <div className='vorname'>
                            <label>Vorname </label>
                            <input type="text" name="user_name" required />
                        </div>
                        <div className='vorname'>
                            <label>Nachname </label>
                            <input type="text" name="user_name" required />
                        </div>     
                    </div>               
                </div>
                <label>E-Mail (erforderlich)</label>
                <input type="email" name="user_email"  required/>
                <label>Telefon (erforderlich)</label>
                <input type="tel"  required/>
                <label>Nachricht</label>
                <textarea name="message" cols='20' rows='6' ></textarea>
                <button type='submit' >Senden</button>
            </form>
        </div>    
    </div>
  )
}

export default Kontakt
