import './VideoPlayer.scss'
import naturVideo from '../../assets/natur.mp4'
import { useRef } from 'react';

const VideoPlayer = ({playVideo, setPlayVideo}) => {

    const player = useRef(null);

  return (
    <div ref={className={`video-player ${playVideo ? '' : 'hide'}`}>
      <video src={naturVideo} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
