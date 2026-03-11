'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import BackgroundTransition from '@/components/BackgroundTransition';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
      const documentHeight = typeof document !== 'undefined' ? document.documentElement.scrollHeight : 0;
      const scrollTop = typeof window !== 'undefined' ? window.scrollY : 0;
      
      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950">
      <BackgroundTransition scrollProgress={scrollProgress} />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 bg-slate-950/95 border-t border-slate-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Newton Oduor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
