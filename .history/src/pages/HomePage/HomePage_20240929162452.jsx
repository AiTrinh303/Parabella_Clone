import './HomePage.scss'
import Hero from '../../components/Hero/Hero'
import Funktioniert from '../../components/Funktioniert/Funktioniert'
import Warum from '../../components/Warum/Warum'
import Service from '../../components/Service/Service'
import Team from '../../components/Team/Team'

const HomePage = () => {
  return (
    <div className='home'>
      <Hero />
      <Funktioniert />
      <Warum />
      <Service />
      <Team />
    </div>
  )
}

export default HomePage
