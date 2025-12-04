import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1764849510~exp=1764853110~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=e00b9b174441651613f2f329803ad364408a1fd2c9910c0d34d5b4a8488d3c31&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video