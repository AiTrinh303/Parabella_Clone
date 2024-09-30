import './Hero.scss';
import groupImage from '../../assets/Group+10.png'; 
import screenImage from '../../assets/parabella-analytics-screen.png';
import playIcon from '../../assets/play-icon.png';
const Hero = ({set}) => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>CSRD Berichte einfach und kostengünstig erstellen</h1>
        <p>Parabella Analytics – die Software zur Messung, Visualisierung und Erstellung von ESG-Berichten entlang der CSRD Kriterien</p>
        <div>
          <button className='cta'>Kostenlos testen</button>
          <div className='play'>
            <img src={playIcon} alt="play icon" />
            <span>Erklärvideo abspielen</span>
          </div>
        </div>

      </div>
      <img src={groupImage} alt="Group" className="group-image" />
      <img src={screenImage} alt="ParabellaScreen" className="screen-image"/>
    </div>
  );
}

export default Hero;

