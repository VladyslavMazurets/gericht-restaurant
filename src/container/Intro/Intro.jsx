import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { MdVideoCameraFront } from 'react-icons/md';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);

    {
      playVideo ? vidRef.current.pause()
        : vidRef.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}>
  
            {playVideo ?
              <BsPauseFill className='pause' color='#fff' fontSize={32} />
              : <BsFillPlayFill className='play' color='#fff' fontSize={32} />}
          
        </div>
      </div>
    </div>
  )
};

export default Intro;
