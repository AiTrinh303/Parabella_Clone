import './Kontakt.scss'

const Kontakt = () => {
  return (
    <div className='kontakt'>
      <div className="kontakt-info">
        <span>Kontakt</span>
        <h2>Nehmen Sie gerne Kontakt mit uns auf. Wir helfen gerne weiter.</h2>
        <ul>
            <li>info@parabella.de</li>
            <li>017630478877</li>
            <li><span>Hauptsitz</span>München, Bayern</li>
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
  )
}

export default Kontakt
