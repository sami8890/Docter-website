"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import HeroSection from './components/hero';
const HealthServices = dynamic(() => import('@/app/services/page'), { ssr: false });const HealthPartnersSection = dynamic(() => import('./components/trusted'), { ssr: false });

export default function Main() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial size set
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      {windowSize.width > 0 && <HeroSection />}
      {windowSize.width > 0 && <HealthServices />}
      {windowSize.width > 0 &&  <HealthPartnersSection />}
    </main>
  );
}