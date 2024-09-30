import './HomePage.scss'
import Hero from '../../components/Hero/Hero'
import Funktioniert from '../../components/Funktioniert/Funktioniert'
import Warum from '../../components/Warum/Warum'
import Service from '../../components/Service/Service'
import Team from '../../components/Team/Team'
import Kunden from '../../components/Kunden/Kunden'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

const HomePage = () => {
  
  return (
    <div className='home'>
      <Hero />
      <Funktioniert />
      <Warum />
      <Service />
      <Team />
      <Kunden />
      <VideoPlayer />
    </div>
  )
}

export default HomePage
