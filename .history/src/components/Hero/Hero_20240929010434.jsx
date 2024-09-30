import './Hero.scss';
import groupImage from '../../assets/Group+10.png'; 
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>CSRD Berichte einfach und kostengünstig erstellen</h1>
        <p>Parabella Analytics – die Software zur Messung, Visualisierung und Erstellung von ESG-Berichten entlang der CSRD Kriterien</p>
        <div>
          <button className='cta'>Kostenlos testen</button>
          <button className='cta'>Erklärvideo abspielen</button>
        </div>

      </div>
      <img src={groupImage} alt="Group" className="group-image" />
      <img src={heroImage} alt="" />
    </div>
  );
}

export default Hero;

