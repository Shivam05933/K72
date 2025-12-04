import React from 'react'
import Video from '../components/Home/Video.jsx'
import HomeBottomText from '../components/Home/HomeBottomText.jsx'
import HomeHeroText from '../components/Home/HomeHeroText.jsx'

const Home = () => {
  return (
    <div>
        <div className=' h-screen w-screen fixed'>
          <Video />
        </div>

        <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden '>
            <HomeHeroText />
            <HomeBottomText />
        </div>
    </div>
  )
}

export default Home