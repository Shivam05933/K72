import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center font-[font2] text-white items-center lg:gap-2 gap-5 pb-1'>
      <p className='absolute lg:w-80 w-72  right-0 lg:pb-85 pb-70 pr-3 lg:leading-5 leading-4  font-[font1]'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
      </p>
      <Link to={'/Project'} className='z-10 text-[6vw] lg:leading-[5.5vw] border-3 rounded-full px-5 leading-8 lg:py-3 lg:pt-3 lg:pb-0 pt-1 hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        PROJECT
      </Link>

      <Link to={'/Agence'} className='z-10 text-[6vw] lg:leading-[5.5vw] border-3 rounded-full px-5 leading-8 lg:py-3 lg:pt-3 lg:pb-0 pt-1 hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        AGENCE
      </Link>

    </div>
  )
}

export default HomeBottomText