import './HomePage.scss'
import Hero from '../../components/Hero/Hero'
import Funktioniert from '../../components/Funktioniert/Funktioniert'
import Warum from '../../components/Warum/Warum'
import Service from '../../components/Service/Service'
import Team from '../../components/Team/Team'
import Kunden from '../../components/Kunden/Kunden'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const HomePage = () => {

  const [playVideo, setPlayVideo] = useState(false)

  return (
    <div className='home'>
      <Hero setPlayVideo={setPlayVideo}/>
      <Funktioniert />
      <Warum />
      <Service />
      <Team />
      <Kunden />
      <
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>
    </div>
  )
}

export default HomePage
