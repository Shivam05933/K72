import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {

    const currentPath = useLocation().pathname // ye HOOK se hame path name milta hai 

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)


    useGSAP(function () {
        const tl = gsap.timeline()

        tl.to(stairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%'
        })

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1
        })
    },[currentPath])



    return (
        <div>
        
            <div ref={stairParentRef} className='h-screen w-full  top-0 fixed '>
                <div className='h-full w-full flex  '>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>

            <div ref={pageRef}>
                {props.children}
                {/*ye props.children <App /> hai ye stairs ka child hai esko yaha pe la ke maine gsap ke through delay kar diya hai 
                jisse ki jab stair animation run ho jaye ga tab child/App run hoga */}
            </div>

        </div>
        
    )
}

export default Stair