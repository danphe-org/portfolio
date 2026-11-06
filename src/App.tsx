import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessAndSkills } from './components/ProcessAndSkills';
import { ContactFooter } from './components/ContactFooter';
import { IntroCurtain } from './components/IntroCurtain';
import { portfolioData } from './data/portfolioData';

export const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white relative selection:bg-[#e31b23] selection:text-white overflow-hidden">
      {/* Cinematic Intro Curtain on First Load */}
      <IntroCurtain />

      {/* Subtle interactive ambient cursor spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-70 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(227, 27, 35, 0.06), transparent 80%)`,
        }}
      />

      {/* Top Navbar */}
      <Navbar data={portfolioData} />

      {/* Main Content */}
      <main>
        {/* Full-Height Editorial Landing Hero Section */}
        <Hero data={portfolioData} />

        {/* Education & Skills Section */}
        <ProcessAndSkills data={portfolioData} />
      </main>

      {/* Contact & Footer */}
      <ContactFooter data={portfolioData} />
    </div>
  );
};

export default App;
