import './Hero.scss';
import groupImage from '../../assets/Group.png'; 
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

