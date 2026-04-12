# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.









<div  ref={(el) => (cardRefs.current[3] = el)} 
  className="absolute bottom-0 left-0 w-full h-1/2 z-50 translate-y-full rounded-t-[40px] overflow-hidden bg-black text-white flex flex-col justify-between py-4 px-6 font-sans"
>
  
  {/* 1. TOP SECTION (Icons + Contact Button) */}
  <div className="flex justify-between items-center w-full">
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
  <div className="w-full flex justify-between items-end border-t border-white/20   pt-6">
    {/* Left Side Info */}
    <div className="flex items-center gap-2 text-sm font-medium">
      <span className="opacity-100 text-lg">🌐</span>
      <span className="tracking-widest">MONTREAL_06:03:57</span>
    </div>

    {/* Center Links */}
    <div className="flex gap-10 text-[13px] font-bold tracking-[0.2em] opacity-80 ">
      <span className="hover:opacity-100 cursor-pointer ">PRIVACY POLICY</span>
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