import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setIsReducedMotion(mediaQuery.matches);

    updatePreference();

    const onChange = (event) => setIsReducedMotion(event.matches);
    mediaQuery.addEventListener?.('change', onChange);

    if (mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener?.('change', onChange);
      };
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.style.cursor = 'none';

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 1,
      opacity: 0,
    });

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const moveCursor = (x, y, scale = 1) => {
      gsap.to(cursor, {
        x,
        y,
        scale,
        duration: 0.12,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const onMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setIsVisible(true);
      moveCursor(mouseX, mouseY);
    };

    const onMouseLeave = () => setIsVisible(false);

    const onMouseOver = (event) => {
      const target = event.target;
      const interactive =
        target instanceof Element &&
        target.closest('img, a, button, input, textarea, select, [data-cursor-hover], p, h1, h2, h3, h4, h5, h6');

      moveCursor(mouseX, mouseY, interactive ? 2.1 : 1);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseover', onMouseOver);

    moveCursor(mouseX, mouseY);

    return () => {
      mediaQuery.removeEventListener?.('change', onChange);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', onMouseOver);
      document.body.style.cursor = '';
      gsap.killTweensOf(cursor);
    };
  }, []);

  if (isReducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-[#D3FD50] "
      style={{ opacity: isVisible ? 1 : 0 }}
    />
  );
};

export default CustomCursor;
