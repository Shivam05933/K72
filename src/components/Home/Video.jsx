import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted src="https://res.cloudinary.com/davthjkiw/video/upload/video_vhfdgr.mp4"></video>
    </div>
  )
}

export default Video