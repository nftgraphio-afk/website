import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Architecture } from '@/components/Architecture';
import { UseCases } from '@/components/UseCases';
import { WaitlistCTA } from '@/components/WaitlistCTA';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Features />
      <Architecture />
      <UseCases />
      <WaitlistCTA />
    </>
  );
}
