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
        {/* Poster view: Left elements top, Right elements bottom        */}
        {/* ZERO BORDERS so it looks like part of the image              */}
        {/* ============================================================ */}
        <div className="lg:hidden w-full px-4 sm:px-6 flex flex-col items-center gap-4 pt-2">
          {/* Centered Borderless Image Card */}
          <div className="relative w-full max-w-xl sm:max-w-2xl mx-auto overflow-hidden flex justify-center items-center">
            <div className="relative w-full">
              <img
                src={heroImageSrc}
                alt={data.hero.name}
                className="w-full h-auto object-cover object-top filter brightness-[0.98] contrast-[1.04] saturate-[1.02]"
              />

              {/* Gradient overlays for seamless blending into dark background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/75 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#080808] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none" />

              {/* Top: Greetings, Name & Role (Left Elements) - NO BORDERS */}
              <div className="absolute top-4 sm:top-6 inset-x-0 p-4 sm:p-6 z-10 pointer-events-auto">
                <div className="mb-1">
                  <span className="font-script text-2xl sm:text-3xl text-neutral-100 -rotate-6 inline-block select-none drop-shadow-md">
                    {data.hero.greeting || "Hello, I am"}
                  </span>
                </div>
                <h1 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[0.9] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  {data.hero.name}
                </h1>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#e31b23] drop-shadow">
                    {data.hero.title}
                  </span>
                </div>
              </div>

              {/* Bottom: Location & Experience (Right Elements) - NO BORDERS */}
              <div className="absolute bottom-3 inset-x-0 px-4 sm:px-6 z-10 flex items-end justify-between gap-2 pointer-events-auto">
                {/* Location */}
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase">LOCATION</span>
                  <div className="flex items-center gap-1 text-white text-xs sm:text-sm font-bold uppercase drop-shadow">
                    <Globe className="w-3.5 h-3.5 text-[#e31b23]" />
                    <span>KATHMANDU, NEPAL</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex flex-col items-end text-right">
                  <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase">EXPERIENCE</span>
                  <span className="font-display text-2xl sm:text-3xl font-black text-[#e31b23] leading-none drop-shadow">
                    2+ YEARS
                  </span>
                  <span className="text-[10px] font-bold text-neutral-300 uppercase">PRODUCTION</span>
                </div>
              </div>

            </div>
          </div>

          {/* Short & Simple Introduction Underneath on Mobile */}
          <div className="w-full max-w-xl sm:max-w-2xl mx-auto px-1 space-y-4">
            <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed text-center sm:text-left drop-shadow">
              {data.hero.bio}
            </p>

            {/* Mobile Explore Scroll Indicator */}
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

      </div>
    </section>
  );
};
