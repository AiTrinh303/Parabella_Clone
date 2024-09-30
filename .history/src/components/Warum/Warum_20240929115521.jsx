import './Warum.scss'
import hoheImage from '../../assets/PA-Hohe-Strafen.png'
import {warum} from '../../data/warum.js'

const Warum = () => {
  return (
    <div className='warum'>
      <p>Warum Parabella Analytics?</p>
      <h2>Was Sie erwartet, wenn Sie keinen Nachhaltigkeitsbericht abgeben:</h2>
      <div className="block">
        <div className="block-content">
          <img src={hoheImage} alt="Hohe-Strafen" />
          <h3>Reputationsverlust</h3>
          <p>Unternehmen, die keine Nachhaltigkeitsberichte veröffentlichen, werden von Investoren und Kunden als rückständig und unverantwortlich wahrgenommen.</p>
        </div>
      </div>
    </div>
  )
}

export default Warum
