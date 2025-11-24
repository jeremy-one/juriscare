'use client';

import { useEffect, useState } from 'react';

export default function ParallaxSVG({ sectionId }: { sectionId: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Visible si la section est dans le viewport
      const visible = rect.top < windowHeight && rect.bottom > 0;
      setIsVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  if (!isVisible) return null;

  return (
    <div className="BKSVG fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
      <img
        src="/juriscare-mark-outline-gray.svg"
        alt=""
        className="w-[600px] h-[600px] opacity-100"
      />
    </div>
  );
}
