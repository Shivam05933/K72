import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import React, { useRef, useLayoutEffect } from 'react'
import Footer from '../components/common/Footer';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Agence = () => {

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const blackPageRef = useRef(null)
  const page1ImgRef = useRef(null)
  const page2ImgRef = useRef(null)
  const page2Ref = useRef(null)
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // images ka array hai 
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
  ]

  useGSAP(() => {

    // ---------- PINNED IMAGE SCROLL ----------
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 25%',
        end: 'top -195%',
        scrub: 1,
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    });

    // --------- BACKGROUND BLACK 
    gsap.to("body", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: blackPageRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      }
    });


    // ---------- MARQUEE FUNCTION ----------
    // ---------- TOP MARQUEES ----------
    gsap.utils.toArray(".top-marquee").forEach((el) => {
      const width = el.scrollWidth / 2;

      gsap.fromTo(
        el,
        { x: 0 },
        {
          x: -width,
          duration: 12,
          ease: "linear",
          repeat: -1
        }
      );
    });

    // ---------- BOTTOM MARQUEES ----------
    gsap.utils.toArray(".bottom-marquee").forEach((el) => {
      const width = el.scrollWidth / 2;

      gsap.fromTo(
        el,
        { x: -width },
        {
          x: 0,
          duration: 12,
          ease: "linear",
          repeat: -1
        }
      );
    });

  });
  
  useGSAP(() => {
  // 1. First Page ki image ko pin karne ke liye
  gsap.to(page1ImgRef.current, {
    scrollTrigger: {
      trigger: blackPageRef.current, // Jab first page top pe aaye
      start: "top top",             // Start point
      endTrigger: page2Ref.current, // Jab tak second page ka top touch na ho jaye
      end: "top top",               // Tab tak pin rahega
      pin: true,                    // Image ko fix kar dega
      pinSpacing: false,            // Taki text normal scroll kare aur gap na aaye
      scrub: true,                  // Smooth animation ke liye
    },
  });

  // 2. Marquee text ko move karne ke liye (Optional agar tumhe scroll ke saath fast move karna hai)
  gsap.to(".top-marquee, .bottom-marquee", {
    y: -500, // Text uper ki taraf move hoga
    opacity: 0,
    scrollTrigger: {
      trigger: blackPageRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    }
  });

}, { scope: blackPageRef });

/////////////////// STACK ANIMATION COMPONENT /////////////////

useGSAP(() => {
  const cards = cardRefs.current;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=400%", 
      scrub: 1,
      pin: true,
    }
  });

  cards.forEach((card, index) => {
    if (index === 0) return;

    const isLastCard = index === cards.length - 1; // Check if it's the 50% footer

    // 1. Current card ko upar lana
    tl.to(card, { 
      y: "0%", // Last card ke liye direct 0%
      ease: "none",
      duration: 1
    }, index); 

    // 2. Pichli (Previous) card ka animation
    tl.to(cards[index - 1], {
      // AGAR LAST CARD HAI TO SCALE 1 RAKHO (MATLAB CHOTA NAHI HOGA)
      scale: isLastCard ? 1 : 0.85, 
      
      // AGAR LAST CARD HAI TO THODA ZYADA DARK KARO TAAKI FOOTER DIKHE
      opacity: isLastCard ? 0.4 : 0.3, 
      
      // OPTIONAL: Last transition pe thoda blur daal sakte ho
      filter: isLastCard ? "blur(20px)" : "blur(10px)",
      
      duration: 1,
      ease: "none"
    }, index);
  });

}, { scope: containerRef });

// esme BACK TO TOP ka logic hai
const handleBackToTop = () => {
  gsap.to(window, {
    duration: 2,         // Kitni der mein upar pahunchna hai (seconds)
    scrollTo: 0,         // 0 matlab page ka start
    ease: "power4.inOut" // Smooth start aur smooth end ke liye
  });
};

  return (
    <div className='overflow-x-hidden'>

      <div className='section1 py-1 '>

        <div>
          <div ref={imageDivRef} className='absolute h-65 w-50 overflow-hidden  top-40 left-100 rounded-3xl'>
            <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
          </div>

          <div className='font-[font2] relative'>
            <div className='mt-[59vh]'>
              <h1 className='text-[20vw] text-center leading-[18vw]'>SEVEN7Y <br /> TWO</h1>
            </div>
            <div className='pl-[40%] pr-1'>
              <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
            </div>
          </div>
        </div>

        {/* 6 text grid */}
        <div className="grid grid-cols-3 grid-rows-2  px-30 mt-60 space-x-9 space-y-40 font-[font2] pl-35">
          <div className="text-xl">Expertise</div>
          <div className="text-xl w-10">Strategy Advertising Branding Design Content</div>
          <div className=""></div>
          <div className="text-xl">Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</div>
          <div className="text-xl">Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</div>
          <div className="text-xl">Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</div>
        </div>

        {/* Black page animation  */}

        <div ref={blackPageRef} className='text-[#D3FD50] mt-30 flex flex-col overflow-hidden h-screen  w-full justify-center items-center relative firstPage z-10'>
          <div className='top-marquee absolute  top-10 left-0 flex m-12 whitespace-nowrap gap-200'>
            <p className='font-[font2] text-[150px]'>MAELLE</p>
            <p className='font-[font2] text-[150px]'>MAELLE</p>
            <p className='font-[font2] text-[150px]'>MAELLE</p>
            <p className='font-[font2] text-[150px]'>MAELLE</p>
          </div>

          <div className='flex justify-center h-full w-full'>
            <img
              ref={page1ImgRef}
              className="w-[30%] rounded-3xl   relative"
              src="https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3"
              alt=""
            />
          </div>

          <div className='bottom-marquee flex justify-center w-full h-full items-center gap-8 absolute -bottom-28 left-0'>
            <p className='font-[font2] text-[150px] whitespace-nowrap'>JACOT-DESCOMBES</p>
            <p className='font-[font2] text-3xl whitespace-nowrap pt-12'>OPERATIONS AND BSUINESS DEVELOPMENT </p>
            <p className='font-[font2] text-[150px] whitespace-nowrap'>JACOT-DESCOMBES</p>
            <p className='font-[font2] text-3xl whitespace-nowrap pt-12'>OPERATIONS AND BSUINESS DEVELOPMENT </p>
            <p className='font-[font2] text-[150px] whitespace-nowrap'>JACOT-DESCOMBES</p>
            <p className='font-[font2] text-3xl whitespace-nowrap pt-12'>OPERATIONS AND BSUINESS DEVELOPMENT </p>
          </div>
        </div>

        {/* Second  */}
        <div ref={page2Ref} className='text-[#D3FD50] mt-30   overflow-hidden h-screen w-full relative secondPage  z-20'>
          <div className='top-marquee absolute  top-10 left-0 flex m-12 whitespace-nowrap gap-200'>
            <p className='font-[font2] text-[150px]'>MAELLE</p>
            <p className='font-[font2] text-[150px]'>MAELLE</p>
            <p className='font-[font2] text-[150px]'>MAELLE</p>
            <p className='font-[font2] text-[150px]'>MAELLE</p>
          </div>

          <div className='flex  justify-center relative h-full w-full'>
            <img ref={page2ImgRef} className='w-[30%]  rounded-3xl ' src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847" alt="" />
          </div>

          <div className='bottom-marquee  flex justify-center w-full h-full items-center gap-8 absolute -bottom-28 left-0'>
            <p className='font-[font2] text-[150px] whitespace-nowrap'>JACOT-DESCOMBES</p>
            <p className='font-[font2] text-3xl whitespace-nowrap pt-12'>OPERATIONS AND BSUINESS DEVELOPMENT </p>
            <p className='font-[font2] text-[150px] whitespace-nowrap'>JACOT-DESCOMBES</p>
            <p className='font-[font2] text-3xl whitespace-nowrap pt-12'>OPERATIONS AND BSUINESS DEVELOPMENT </p>
            <p className='font-[font2] text-[150px] whitespace-nowrap'>JACOT-DESCOMBES</p>
            <p className='font-[font2] text-3xl whitespace-nowrap pt-12'>OPERATIONS AND BSUINESS DEVELOPMENT </p>
          </div>
        </div>
      
{/* --- STACK ANIMATION SECTION (Opto, OKA, etc.) --- */}
<div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black mt-20">
  
  {/* Card 1: Base - Ye hamesha top: 0 pe rahega */}
  <div ref={(el) => (cardRefs.current[0] = el)} className="absolute top-0 left-0 w-full h-screen z-10 bg-zinc-900 ">
    <img className="w-full h-full object-cover " src="https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757" alt="" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/40">
      <h2 className="text-4xl font-medium">Opto-Reseau</h2>
      <a className="text-7xl pt-4 font-medium underline cursor-pointer font-[font2]">We see you like no other</a>
    </div>
  </div>

  {/* Card 2 */}
  <div ref={(el) => (cardRefs.current[1] = el)} className="absolute top-0 left-0 w-full h-screen z-20 translate-y-full bg-zinc-800 border-t border-white/10 shadow-2xl rounded-t-[40px] overflow-hidden">
    <img className="w-full h-full object-cover object-top" src="https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2" alt="" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/40">
      <h2 className="text-4xl font-medium">OKA</h2>
      <a className="text-7xl pt-4 font-medium underline cursor-pointer font-[font2]">Authentic tradition</a>
    </div>
  </div>

  {/* Card 3 */}
  <div ref={(el) => (cardRefs.current[2] = el)} className="absolute top-0 left-0 w-full h-screen z-30 translate-y-full bg-zinc-700 border-t border-white/10 shadow-2xl rounded-t-[40px] overflow-hidden">
    <img className="w-full h-full object-cover object-top" src="https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847" alt="" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/40">
      <h2 className="text-4xl font-medium">Shelton</h2>
      <a className="text-7xl pt-4 font-medium  underline cursor-pointer font-[font2]">Precision engineering</a>
    </div>
  </div>

  {/*///////////////////////////////////* Card 4: Contact Us */}
{/* Last Card: Footer Section */}
<Footer 
    ref={(el) => (cardRefs.current[3] = el)} 
    className="absolute bottom-0 left-0 w-full h-1/2 z-50 translate-y-full" 
/>

</div>

        
      </div>

    </div>
  )
}

export default Agence