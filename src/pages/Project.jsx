import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/Project/ProjectCard'

const Project = () => {

  const Projects = [
    {
      image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920.jpg?w=1200&h=1920&s=b18d369df1e2ac454455ceb3ebb67edc',
      image2: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/OKA/OKA_Fromage_08_2692_srgb.jpg?w=1200&h=1920&s=4bf2c3ead1ed1552f0f3bfb12ada4544',
      image2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_planches_horizontales_gammecomplete1024.jpg?w=1200&h=1920&s=5b47e5169be24eee33dc88a3211de348',
      image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
    }

  ]
  
  gsap.registerPlugin(ScrollTrigger)


  useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
        // markers:true,
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })
  return (
    <div className='p-1'>
      <div className=' lg:pt-[75vh] pt-[60vh] '>
        <h1 className='font-[font2] lg:text-[10vw] text-5xl border-[#D3FD50] inline-block border-b-10 lg:pb-12 pb-4 leading-0'><h1 >PROJECTS</h1></h1>
      </div>

      <div className='lg:mt-5 lol mt-2'>
        {Projects.map(function (elem,idx) {
          return <div key={idx} className='hero w-full h-[550px]  lg:mb-4 mb-1 flex lg:gap-4 gap-2 flex-col lg:flex-row'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>

    </div>
  )
}

export default Project