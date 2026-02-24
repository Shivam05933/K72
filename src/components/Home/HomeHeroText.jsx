import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font2] text-white text-center pt-2  mt-60 lg:mt-0'>
      <div className=' lg:text-[9.5vw] lg:leading-[8vw] flex items-center justify-center text-[6.5vh] leading-12'>THE SPARK FOR</div>
      <div className=' lg:text-[9.5vw] lg:leading-[8vw] flex items-center justify-center text-[6.5vh] leading-12'> 
        ALL 
        <div className=' lg:h-[15vh] lg:w-[15vw] lg:-mt-3 rounded-full overflow-hidden h-10 w-25 '> <Video /> </div>
        THINGS
      </div>
      <div className=' lg:text-[9.5vw] lg:leading-[8vw] flex items-center justify-center text-[6.5vh] leading-12'>CREATIVE</div>
    </div>
  )
}

export default HomeHeroText