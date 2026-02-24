import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const containerRef = useRef(null); // Pure component ke liye scope
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const blackPageRef = useRef(null);
  const page1ImgRef = useRef(null);
  const page2Ref = useRef(null);

  const imageArray = [
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];

  useGSAP(() => {
    // 1. PINNED IMAGE SCROLL
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 25%',
        end: '+=1500', // Relative end point zyada stable hota hai
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const imageIndex = Math.min(
            Math.floor(self.progress * imageArray.length),
            imageArray.length - 1
          );
          if (imageRef.current) imageRef.current.src = imageArray[imageIndex];
        }
      }
    });

    // 2. BACKGROUND BLACK (Using container instead of body to avoid global scroll issues)
    gsap.to(containerRef.current, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: blackPageRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      }
    });

    // 3. MARQUEE ANIMATIONS
    const topMarquees = gsap.utils.toArray(".top-marquee");
    topMarquees.forEach((el) => {
      gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        duration: 15,
        ease: "none",
      });
    });

    const bottomMarquees = gsap.utils.toArray(".bottom-marquee");
    bottomMarquees.forEach((el) => {
      gsap.fromTo(el, { xPercent: -50 }, {
        xPercent: 0,
        repeat: -1,
        duration: 15,
        ease: "none",
      });
    });

    // 4. PIN PAGE 1 IMAGE
    ScrollTrigger.create({
      trigger: page2Ref.current,
      start: "top bottom",
      end: "top top",
      pin: page1ImgRef.current,
      pinSpacing: false,
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className='overflow-x-hidden'> {/* Horizontal scroll protection */}

      <div className='section1 py-1 w-full'>
        <div className="relative h-[200vh]"> {/* Wrapper for pin space */}
          <div ref={imageDivRef} className='absolute h-80 w-60 overflow-hidden top-40 left-1/2 -translate-x-1/2 rounded-3xl z-20'>
            <img ref={imageRef} className='h-full w-full object-cover' src={imageArray[0]} alt="Team" />
          </div>

          <div className='font-[font2] relative'>
            <div className='mt-[50vh]'>
              <h1 className='text-[18vw] text-center leading-[16vw]'>SEVEN7Y <br /> TWO</h1>
            </div>
            <div className='px-10 mt-20 md:pl-[40%]'>
              <p className='text-4xl md:text-6xl'>We’re inquisitive and open-minded... (etc)</p>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 mt-40 font-[font2]">
          <div className="text-xl font-bold">Expertise</div>
          <div className="text-xl">Strategy Advertising Branding Design Content</div>
          <div></div>
          <div className="text-xl">Our Work...</div>
          <div className="text-xl">Our Creative...</div>
          <div className="text-xl">Our Culture...</div>
        </div>

        {/* First Marquee Page */}
        <div ref={blackPageRef} className='text-[#D3FD50] mt-30 h-screen w-full relative z-10 overflow-hidden'>
          <div className='top-marquee absolute top-10 left-0 flex whitespace-nowrap' style={{ width: '200%' }}>
             {[...Array(6)].map((_, i) => <p key={i} className='font-[font2] text-[120px] px-10'>MAELLE</p>)}
          </div>

          <div className="flex justify-center items-center h-full">
            <img ref={page1ImgRef} className="w-[30%] rounded-3xl z-50" src="https://k72.ca/images/teamMembers/ChantalG_640X960.jpg" alt="" />
          </div>

          <div className='bottom-marquee absolute bottom-10 left-0 flex whitespace-nowrap' style={{ width: '200%' }}>
             {[...Array(4)].map((_, i) => (
               <React.Fragment key={i}>
                 <p className='font-[font2] text-[120px] px-5'>JACOT-DESCOMBES</p>
                 <p className='font-[font2] text-xl pt-16 px-5'>OPERATIONS AND BUSINESS DEVELOPMENT</p>
               </React.Fragment>
             ))}
          </div>
        </div>

        {/* Second Page */}
        <div ref={page2Ref} className='text-[#D3FD50] py-40 h-screen w-full relative z-20 bg-black overflow-hidden'>
           <div className='top-marquee absolute top-10 left-0 flex whitespace-nowrap' style={{ width: '200%' }}>
             {[...Array(6)].map((_, i) => <p key={i} className='font-[font2] text-[120px] px-10'>MAELLE</p>)}
          </div>
          <div className='flex justify-center items-center h-full'>
            <img className='w-[30%] rounded-3xl' src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;