import React from 'react'
import Discover from './Home/Discover/Discover'
import Header from './Home/Header/Header'
import MostPopular from './Home/MostPopular/MostPopular'
import MusicPlayer from './Home/MusicPlayer/MusicPlayer'

const Main = () => {
  return (
    <div className='main'>
    <Header/>
    <Discover/>
    <div className="half_main">
      <MostPopular/>
      <MusicPlayer/>
    </div>
    </div>
  )
}

export default Main