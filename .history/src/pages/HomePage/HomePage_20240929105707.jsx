import './HomePage.scss'
import Hero from '../../components/Hero/Hero'
import Funktioniert from '../../components/Funktioniert/Funktioniert'
import Warum from '../../components/Warum/Warum'

const HomePage = () => {
  return (
    <div className='home'>
      <Hero />
      <Funktioniert />
      <Warum />
    </div>
  )
}

export default HomePage
