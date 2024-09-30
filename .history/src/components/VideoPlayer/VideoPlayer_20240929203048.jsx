import './VideoPlayer.scss'
import naturVideo from '../../assets/natur.mp4'

const VideoPlayer = () => {
  return (
    <div className='video-player'>
      <video src={naturVideo}></video>
    </div>
  )
}

export default VideoPlayer
