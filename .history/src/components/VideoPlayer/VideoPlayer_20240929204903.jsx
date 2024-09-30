import './VideoPlayer.scss'
import naturVideo from '../../assets/natur.mp4'

const VideoPlayer = ({playVideo, setPlayVideo}) => {
  return (
    <div className={`video-player ${playVideo}`}>
      <video src={naturVideo} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
