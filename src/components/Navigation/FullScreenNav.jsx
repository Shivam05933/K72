import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useContext } from 'react'
import { NavBarContext } from '../Context/NavContext'
import { useNavigate } from 'react-router-dom';

const FullScreenNav = () => {
    const fullScreenRef = useRef(null)
    const fullNavLinksRef = useRef(null)

    const [navOpen, setnavOpen] = useContext(NavBarContext)
    const navigate = useNavigate(); 

    // Ye function handle karega transition ko
    const handleNavigation = (path) => {
        setnavOpen(false); // Pehle staircase animation reverse hogi
        
        // 800ms ka wait karenge taaki animation poori dikhe, phir navigate karenge
        setTimeout(() => {
            navigate(path);
        }, 800); 
    };

    // --- Animation Logic (Black screen issue fix) ---
    useGSAP(() => {
        const tl = gsap.timeline();

        if (navOpen) {
            // OPEN ANIMATION
            tl.to(fullScreenRef.current, { display: 'block', duration: 0 })
              .to(fullScreenRef.current, { pointerEvents: 'all', duration: 0 })
              .to('.stairing', {
                height: '100%',
                stagger: { amount: -0.3 }, 
                ease: "power4.inOut"
              })
              .to('.link', {
                opacity: 1,
                rotateX: 0,
                stagger: { amount: 0.3 },
                duration: 0.5
              }, "-=0.2");
        } else {
            // CLOSE ANIMATION
            tl.to('.link', {
                opacity: 0,
                rotateX: 90,
                stagger: { amount: 0.1 },
                duration: 0.3
            })
            .to('.stairing', {
                height: '0%',
                stagger: { amount: 0.1 },
                ease: "power4.inOut"
            })
            .to(fullScreenRef.current, { pointerEvents: 'none', duration: 0 })
            .to(fullScreenRef.current, { display: 'none', duration: 0 });
        }
    }, [navOpen]);

    return (
        <div 
            ref={fullScreenRef} 
            id='fullscreenview' 
            className='fullscreennav hidden text-white w-full h-screen fixed top-0 left-0 overflow-x-hidden z-[999]'
            style={{ pointerEvents: 'none' }}
        >

            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                </div>
            </div>

            <div ref={fullNavLinksRef} className='relative z-10'>
                {/* LOGO and CROSS ICON  */}
                <div className='navLink flex justify-between items-start w-full lg:p-5 p-3 absolute'>
                    {/* LOGO */}
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-22' viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>

                    {/* CROSS ICON */}
                    {/* <div onClick={() => { setnavOpen(false) }} className='lg:h-32 h-25 lg:w-32 w-25 cursor-pointer relative'>
                        <div className='lg:h-44 h-35 lg:w-[2px] w-[1.4px] bg-[#D3FD50] absolute left-1/2 -rotate-45 origin-top'></div>
                        <div className='lg:h-44 h-35 lg:w-[2px] w-[1.4px] bg-[#D3FD50] absolute left-1/2 rotate-45 origin-top right-2'></div>
                    </div> */}

                    <div onClick={() => { setnavOpen(false) }} className=' lg:h-32 h-25 lg:w-32 w-25 cursor-pointer '>
                        <div className='lg:h-44 h-35 lg:w-0.5 w-[1.4px] bg-[#D3FD50] absolute -rotate-45 origin-top'></div>
                        <div className='lg:h-44 h-35 lg:w-0.5 w-[1.4px] bg-[#D3FD50] absolute rotate-45  origin-top right-2'></div>
                    </div>
                </div>
                 


            

                {/* ALL Navs WORK/AGENCE/CONTECT/BLOG */}
                <div className='lg:pt-37 pt-60'>
                    
                    {/* Work */}
                    <div onClick={() => handleNavigation('/')} className='link origin-top border-t-1 border-white relative hover:cursor-pointer overflow-hidden'>
                        <h1 className='font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>HOME</h1>
                        <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black w-full opacity-0 hover:opacity-100 transition-opacity'>
                            <div className='moveX flex items-center gap-1 shrink-0'>
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            </div>

                            <div className='moveX flex items-center gap-1 shrink-0'>
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Agence */}
                    <div onClick={() => handleNavigation('/Agence')} className='link origin-top border-t-1 border-white relative hover:cursor-pointer overflow-hidden'>
                        <h1 className='font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>AGENCE</h1>
                        <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black w-full opacity-0 hover:opacity-100 transition-opacity'>
                            <div className='moveX flex items-center gap-1 shrink-0'>
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            </div>
                            <div className='moveX flex items-center gap-1 shrink-0'>
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div onClick={() => handleNavigation('/Project')} className='link origin-top border-t-1 border-white relative hover:cursor-pointer overflow-hidden'>
                        <h1 className='font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>PROJECTS</h1>
                        <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black w-full opacity-0 hover:opacity-100 transition-opacity'>
                            <div className='moveX flex items-center gap-1 shrink-0'>
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            </div>
                            <div className='moveX flex items-center gap-1 shrink-0'>
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Blog */}
                    <div onClick={() => handleNavigation(  )} className='link origin-top border-y-1 border-white relative hover:cursor-pointer overflow-hidden'>
                        <h1 className='font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>CONTECT</h1>
                        <div className='moveLink absolute flex top-0 bg-[#D3FD50] text-black w-full opacity-0 hover:opacity-100 transition-opacity'>
                            <div className='moveX flex items-center gap-1 shrink-0'>
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            </div>
                            <div className='moveX flex items-center gap-1 shrink-0'>
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-center lg:text-[8vw] text-[14vw] lg:pt-4 pt-2 leading-[0.8]'>SEE EVERYTHING</h2>
                                <img className='lg:h-17 h-11 lg:w-45 w-30 shrink-0 rounded-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FullScreenNav