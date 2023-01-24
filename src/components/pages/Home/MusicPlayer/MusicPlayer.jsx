import React from 'react'
import img from '../../../../images/user.webp'
const MusicPlayer = () => {
  return (
    <div className='musicplayer'>
      
<div className="musicplayer__container--img">
  <img src={img} className="musicplayer__img" alt="" />
</div>

  <h5 className='mt-1'>song name</h5>
  <div className="line"></div>
  <div className="musicplayer__controler">

    <p>left</p>
    <p>play</p>
    <p>right</p>
  </div>


    </div>
  )
}

export default MusicPlayer