import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            
                <div className='lg:w-1/2 h-full transition-all rounded-none hover:rounded-4xl overflow-hidden relative '>
                    <img className='h-full w-full object-cover' src={props.image1} alt="" />
                    <div className='absolute w-full h-full hover:bg-black/30 top-0 left-0 flex items-center justify-center transition-all'>
                        <h2 className='font-[font1] lg:text-5xl text-2xl lg:border-4 border-2 rounded-full lg:pt-2 pt-1 lg:px-7 px-4 text-white border-white'>VIO LE PROJECT</h2>
                    </div>
                </div>

                <div className='lg:w-1/2 h-full transition-all rounded-none hover:rounded-4xl overflow-hidden relative '>
                    <img className='h-full w-full object-cover' src={props.image2} alt="" />
                    <div className='absolute w-full h-full hover:bg-black/30 top-0 left-0 flex items-center justify-center transition-all'>
                        <h2 className='font-[font1] lg:text-5xl text-2xl lg:border-4 border-2 rounded-full lg:pt-2 pt-1 lg:px-7 px-4 text-white border-white'>VIO LE PROJECT</h2>
                    </div>
                </div>

        </>
    )
}

export default ProjectCard