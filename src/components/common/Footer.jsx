import React, { forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

// forwardRef use kar rahe hain taaki Agence page se GSAP ref receive kar sakein
const Footer = forwardRef(({ className }, ref) => {
  
  const handleBackToTop = () => {
    gsap.to(window, { duration: 1.5, scrollTo: 0, ease: "power4.inOut" });
  };

  return (
    <div 
      ref={ref} 
      // yahan 'className' prop se aayegi, taaki alag page pe alag style de sakein
      className={`rounded-t-[40px] overflow-hidden bg-black text-white flex flex-col justify-between py-4 px-6 font-sans ${className || ''}`}
    >
      {/* 1. TOP SECTION (Icons + Contact Button) */}
      <div className="flex justify-between items-center w-full mt-4">
        {/* Left: Social Icons */}
        <div className="flex gap-3">
          {["FB", "IG", "IN", "BE"].map((item) => (
            <div key={item} className="border-[1.5px] border-white px-6 py-2 rounded-full text-4xl font-bold tracking-tighter hover:bg-white hover:text-black transition-all cursor-pointer">
              {item}
            </div>
          ))}
        </div>

        {/* Right: Contact Button */}
        <div className="flex items-center gap-3 border-[1.5px] border-white px-8 py-2 rounded-full text-4xl font-bold tracking-tighter cursor-pointer hover:bg-white hover:text-black transition-all group">
          <span>CONTACT</span>
          <span className="text-4xl group-hover:scale-125 transition-transform">♥</span>
        </div>
      </div>

      {/* 2. BOTTOM SECTION (Clock + Links) */}
      <div className="w-full flex justify-between items-end border-t border-white/20 pt-6">
        {/* Left Side Info */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="opacity-100 text-lg">🌐</span>
          <span className="tracking-widest">MONTREAL_06:03:57</span>
        </div>

        {/* Center Links */}
        <div className="flex gap-10 text-[13px] font-bold tracking-[0.2em] opacity-80">
          <span className="hover:opacity-100 cursor-pointer">PRIVACY POLICY</span>
          <span className="hover:opacity-100 cursor-pointer">PRIVACY NOTICE</span>
          <span className="hover:opacity-100 cursor-pointer">ETHICS REPORT</span>
          <span className="hover:opacity-100 cursor-pointer">CONSENT CHOICES</span>
        </div>

        {/* Right Side Info */}
        <div onClick={handleBackToTop} className="text-[15px] text-[#D3FD50] font-bold tracking-[0.1em] opacity-80 hover:opacity-100 cursor-pointer">
          BACK TO TOP
        </div>
      </div>
    </div>
  );
});

export default Footer;