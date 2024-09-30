import './Hero.scss';
import groupImage from './Group+10'; // Adjust the path according to your project structure

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        Hero
      </div>
      <img src={groupImage} alt="Group" className="group-image" />
    </div>
  );
}

export default Hero;

