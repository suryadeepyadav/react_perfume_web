import React from 'react'
import { useState } from 'react';
import './css/section5.css';
// import { FaPlayCircle } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Section5 = () => {
  const [play, setPlay] = useState(true);
  const handlePlay = () => {
    setPlay(!play);
  }

  return (
    <div className='section5'>
      <div className='s5content'>
        <p style={{ color: '#ffffff', fontSize: '18px' }}>Be The Best of You</p>
        <span style={{ color: '#ffffff', fontSize: '35px', }}>Become More Confident & Show Your Better Self</span>
        <p style={{ color: '#ffffff', fontSize: '16px', marginTop: '.5em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className='s5video'>
        {/* {play ? <span style={{ position: 'relative', top: '.31em', left: '3.6em', fontSize: '4.5em' , zIndex:'1'}} onClick={handlePlay} className='video-play-button'>
           <FaPlayCircle style={{ color: '#ffffff', zIndex:'1000' }} /> 
           <span style={{color:'black'}}></span>
           
           </span> :
          <>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/s0ii3Tcz6a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span style={{color:'white', justifyContent:'flex-end', paddingRight:'.5em'}} onClick={handlePlay}> <ImCross /></span>
          </>
        } */}
        {play ?
          <div id="play-video" class="video-play-button" onClick={handlePlay}>
            <span></span>
          </div> :
          <>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/s0ii3Tcz6a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <span style={{ color: 'white', justifyContent: 'flex-end', paddingRight: '.5em' }} onClick={handlePlay}> <ImCross /></span>
          </>}
      </div>
    </div>
  )
}

export default Section5
