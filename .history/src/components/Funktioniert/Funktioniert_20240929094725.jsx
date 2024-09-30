import './Funktioniert.scss'
import MockupImage from '../../assets/Mockup-MacBook.png'

const Funktioniert = () => {
  return (
    <div className='funktioniert'>
      <div className="content">
        <p>So funktioniert’s</p>
        <h2>In Kürze zum CSRD Bericht</h2>
        <div className="step-container">
            <div className='step'>
                <div className="step-number">1</div>
                <div className="step-content">
                    <h3>Teilautomatisierte Datenerhebung</h3>
                    <p>Effiziente Datenerfassung aus ERP- und HR-Systemen sowie der ParabellApp für eine schnelle CSRD-Berichterstattung. Sie sparen Zeit und minimieren manuelle Fehlerquellen.</p>
                </div>
            </div>
            <div className="step-number">2</div>
            <div className="step-content">
               <h3>Bequemes AI Clustering</h3>
               <p>Parabellas künstliche Intelligenz analysiert <p>und gruppiert Ihre Daten entlang der ESRS </><p>Kriterien. So kann der CSRD-Bericht schnelle</p>r <p>erstellt und geprüft werden.</p></p>
            <p></div></p>
            <div className="step-number">3</div>
            <div className="step-content">
                <h3>Finaler Report inkl. Download</h3>
                <p>Die Ergebnisse aus der Doppelten Materialitäsanalyse und aus dem CSRD-Bericht können bequem in verschiedenen Dateiformaten exportiert werden.</p>
            </div>
        </div>
        <button>Kostenlos testen</button>
      </div>

      <div className="image">
        <img src={MockupImage} alt="Mockup-MacBook" />
      </div>
    </div>
  )
}

export default Funktioniert
