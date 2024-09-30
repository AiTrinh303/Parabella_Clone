import './VideoPlayer.scss'
import naturVideo from '../../assets/natur.mp4'
import { useRef } from 'react';

const VideoPlayer = ({playVideo, setPlayVideo}) => {

    const player = useRef(null);
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayVideo(flase)
        }
    }

  return (
    <div ref={player} className={`video-player ${playVideo ? '' : 'hide'}`} onClick={closePlayer}>
      <video src={naturVideo} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
