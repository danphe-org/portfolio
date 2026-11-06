import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  data: PortfolioData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const heroImageSrc = data.hero.heroImage || data.hero.portraitImage || '/assets/hero2.png';

  return (
    <section className="relative w-full overflow-hidden pt-0 pb-6 sm:pb-10 bg-[#080808]">
      {/* Background ambient red glow to complement the artwork atmosphere with gentle pulse */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[500px] sm:h-[700px] bg-[#e31b23]/12 blur-[200px] pointer-events-none rounded-full" 
      />

      {/* FULL-WIDTH HERO WRAPPER - Edge to edge, flush with navbar */}
      <div className="w-full relative z-10">
        
        {/* ============================================================ */}
        {/* DESKTOP FULL-VIEWPORT EDITORIAL LANDING (lg: and above)      */}
        {/* 100% Borderless artwork with integrated poster typography    */}
        {/* ============================================================ */}
        <div className="hidden lg:block relative w-full h-[calc(100vh-65px)] min-h-[700px] max-h-[1050px] overflow-hidden">
          {/* Edge-to-Edge Image Container - ZERO BORDERS */}
          <div className="relative w-full h-full flex justify-center items-center select-none overflow-hidden">
            <motion.img
              initial={{ scale: 1.04, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              src={heroImageSrc}
              alt={data.hero.name}
              className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04] saturate-[1.02]"
            />

            {/* Seamless Vignettes & Edge Gradients */}
            {/* Bottom gradient fade into page */}
            <div className="absolute inset-x-0 bottom-0 h-48 xl:h-64 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-transparent pointer-events-none z-10" />
            
            {/* Subtle top gradient fade */}
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none z-10" />

            {/* Left gradient scrim to ensure razor-sharp text readability over the red backdrop letters */}
            <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent pointer-events-none z-10" />

            {/* Right gradient scrim for info readability */}
            <div className="absolute inset-y-0 right-0 w-[38%] bg-gradient-to-l from-[#080808] via-[#080808]/75 to-transparent pointer-events-none z-10" />
          </div>

          {/* ============================================================ */}
          {/* DESKTOP OVERLAPPING POSTER TYPOGRAPHY - ZERO BORDERS         */}
          {/* ============================================================ */}
          <div className="absolute inset-0 z-20 w-full px-6 md:px-10 lg:px-12 xl:px-16 grid grid-cols-12 gap-6 xl:gap-8 p-4 lg:p-6 xl:p-10 items-center pointer-events-none">
            
            {/* LEFT COLUMN: GREETINGS, NAME, ROLE & SHORT INTRO BELOW CHIN LEVEL */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-6 xl:col-span-5 flex flex-col justify-center pointer-events-auto max-w-lg pt-16 lg:pt-24 xl:pt-32 space-y-3"
            >
              {/* Script Greeting with subtle gentle sway */}
              <div>
                <motion.span 
                  animate={{ y: [0, -3, 0], rotate: [-6, -4, -6] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="font-script text-3xl xl:text-4xl text-neutral-100 inline-block select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                >
                  {data.hero.greeting || "Hello, I am"}
                </motion.span>
              </div>

              {/* Condensed Display Name */}
              <h1 className="font-display uppercase text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight text-white leading-[0.88] drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">
                {data.hero.name.split(' ').map((part, i) => (
                  <span key={i} className="block">
                    {part}
                  </span>
                ))}
              </h1>

              {/* BELOW NAME & CHIN LEVEL: Role Title & Short Simple Introduction */}
              <div className="pt-2 space-y-2.5">
                {/* Role Title in Red Typography - NO BORDERS */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e31b23] animate-pulse" />
                  <span className="text-xs xl:text-sm font-extrabold tracking-widest uppercase text-[#e31b23] drop-shadow-[0_2px_12px_rgba(227,27,35,0.6)]">
                    {data.hero.title}
                  </span>
                </div>

                {/* Short and Simple Introduction - Positioned Below Chin Level */}
                <p className="text-xs xl:text-sm text-neutral-300 font-normal leading-relaxed max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                  {data.hero.bio}
                </p>
              </div>
            </motion.div>

            {/* CENTER COLUMN: CLEAR WINDOW FOR PORTRAIT (Col 6-7) */}
            <div className="col-span-1 xl:col-span-2 pointer-events-none" />

            {/* RIGHT COLUMN: LOCATION & EXPERIENCE ONLY - NO BORDERS */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-5 xl:col-span-5 flex flex-col justify-center items-end text-right pointer-events-auto pt-28 lg:pt-24 xl:pt-72 space-y-8"
            >
              {/* Experience Block - Pure Typography, No Borders with spring hover */}
              <motion.div 
                whileHover={{ scale: 1.05, x: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex flex-col items-end group cursor-default"
              >
                <span className="text-[10px] xl:text-[11px] font-extrabold tracking-widestplus text-neutral-400 uppercase mb-1 drop-shadow">
                  EXPERIENCE
                </span>
                <span className="font-display text-4xl xl:text-5xl 2xl:text-6xl font-black text-[#e31b23] leading-none tracking-tight drop-shadow-[0_4px_20px_rgba(227,27,35,0.45)]">
                  2+ YEARS
                </span>
                <span className="text-xs xl:text-sm font-bold tracking-widest text-neutral-200 uppercase mt-1 drop-shadow">
                  PRODUCTION JAVA & FULLSTACK
                </span>
              </motion.div>

              {/* Location Block - Pure Typography, No Borders with spring hover */}
              <motion.div 
                whileHover={{ scale: 1.05, x: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex flex-col items-end group cursor-default"
              >
                <span className="text-[10px] xl:text-[11px] font-extrabold tracking-widestplus text-neutral-400 uppercase mb-1 drop-shadow">
                  LOCATION
                </span>
                <div className="flex items-center gap-2 text-white">
                  <span className="font-display text-2xl xl:text-3xl font-extrabold uppercase tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                    KATHMANDU, NEPAL
                  </span>
                  <Globe className="w-5 h-5 text-[#e31b23] animate-pulse group-hover:rotate-12 transition-transform" />
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* BOTTOM CENTER: EXPLORE SCROLL INDICATOR */}
          <div className="absolute bottom-6 inset-x-0 flex justify-center items-center pointer-events-auto z-30">
            <motion.a
              href="#skills"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="group flex flex-col items-center gap-1 text-[10px] font-extrabold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors select-none"
            >
              <span>EXPLORE</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#e31b23] group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE & TABLET RESPONSIVE LAYOUT (< lg)                     */}
        {/* Clean, perfectly proportioned flow with zero overlap         */}
        {/* ============================================================ */}
        <div className="lg:hidden w-full px-4 sm:px-6 flex flex-col gap-6 pt-4 pb-8">
          
          {/* 1. Header Typography: Greetings, Name & Role */}
          <div className="flex flex-col space-y-2">
            <div>
              <span className="font-script text-2xl sm:text-3xl text-neutral-200 -rotate-3 inline-block select-none">
                {data.hero.greeting || "Hello, I am"}
              </span>
            </div>

            <h1 className="font-display uppercase text-4xl sm:text-5xl font-black tracking-tight text-white leading-[0.92]">
              {data.hero.name}
            </h1>

            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#e31b23] animate-pulse" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#e31b23]">
                {data.hero.title}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed pt-1">
              {data.hero.bio}
            </p>
          </div>

          {/* 2. Visual Portrait Artwork (Clear and unobstructed) */}
          <div className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden bg-neutral-950 flex items-center justify-center">
            <img
              src={heroImageSrc}
              alt={data.hero.name}
              className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04]"
            />
            {/* Top and bottom subtle gradient blend */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
          </div>

          {/* 3. Experience & Location Grid - Clean, Side by Side */}
          <div className="grid grid-cols-2 gap-4 pt-1">
            {/* Location */}
            <div className="flex flex-col">
              <span className="text-[10px] font-extrabold tracking-widest text-neutral-400 uppercase mb-0.5">
                LOCATION
              </span>
              <div className="flex items-center gap-1.5 text-white">
                <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide">
                  KATHMANDU, NEPAL
                </span>
                <Globe className="w-4 h-4 text-[#e31b23] animate-pulse flex-shrink-0" />
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] font-extrabold tracking-widest text-neutral-400 uppercase mb-0.5">
                EXPERIENCE
              </span>
              <span className="font-display text-2xl sm:text-3xl font-black text-[#e31b23] leading-none">
                2+ YEARS
              </span>
              <span className="text-[10px] font-bold text-neutral-300 uppercase mt-0.5">
                PRODUCTION JAVA / FULLSTACK
              </span>
            </div>
          </div>

          {/* 4. Explore Scroll Indicator */}
          <div className="pt-2 flex justify-center">
            <motion.a
              href="#skills"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
            >
              <span>EXPLORE EDUCATION & SKILLS</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#e31b23]" />
            </motion.a>
          </div>

        </div>

      </div>
    </section>
  );
};
