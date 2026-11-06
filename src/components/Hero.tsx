import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { Globe, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  data: PortfolioData;
  customPhotoUrl?: string | null;
  onUploadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  data,
  customPhotoUrl,
  onUploadClick,
}) => {
  const photoSrc = customPhotoUrl || data.hero.portraitImage;

  return (
    <section className="relative w-full overflow-hidden pt-2 sm:pt-6 pb-16 sm:pb-24 border-b border-white/5 bg-[#080808]">
      {/* Background subtle radial ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#e31b23]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* GIANT "PORTFOLIO" BACKGROUND TYPOGRAPHY (Positioned behind person) */}
      <div className="w-full flex justify-center items-center select-none pointer-events-none overflow-hidden pt-2 pb-0">
        <h1 className="font-display uppercase text-[#cf1921] text-[18vw] sm:text-[18.5vw] lg:text-[17.5vw] font-black leading-none tracking-tight text-center drop-shadow-[0_15px_30px_rgba(207,25,33,0.3)]">
          PORTFOLIO
        </h1>
      </div>

      {/* HERO CONTENT CONTAINER WITH PRECISE EDITORIAL DEPTH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-[11vw] sm:-mt-[13vw] lg:-mt-[13.5vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: GREETING, NAME, BIO, BADGE (4.5 Cols on LG) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 z-20 flex flex-col justify-end pb-2 order-2 lg:order-1">
            {/* Script Greeting */}
            <div className="relative mb-1">
              <span className="font-script text-3xl sm:text-4xl text-neutral-200 -rotate-6 inline-block select-none drop-shadow-md">
                {data.hero.greeting}
              </span>
            </div>

            {/* Giant Condensed Name */}
            <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6rem] font-black tracking-tight text-white leading-[0.88] mb-4">
              {data.hero.name.split(' ').map((part, i) => (
                <span key={i} className="block">
                  {part}
                </span>
              ))}
            </h2>

            {/* Role Title in Red */}
            <div className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#e31b23] mb-3">
              {data.hero.title}
            </div>

            {/* Bio paragraph */}
            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-sm mb-6">
              {data.hero.bio}
            </p>

            {/* Available Worldwide Capsule */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-semibold tracking-wider uppercase shadow-inner">
                <Globe className="w-3.5 h-3.5 text-[#e31b23]" />
                <span className="text-[11px] sm:text-xs text-neutral-300">
                  {data.hero.locationBadge}
                </span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CENTER COLUMN: DEVELOPER PORTRAIT (OVERLAYS THE TEXT) */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 relative flex justify-center items-end order-1 lg:order-2 z-10">
            <div className="relative group max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] w-full">
              {/* Portrait image container */}
              <div className="relative overflow-hidden">
                <img
                  src={photoSrc}
                  alt={data.hero.name}
                  className="w-full h-auto object-cover object-top max-h-[500px] sm:max-h-[600px] lg:max-h-[640px] filter contrast-[1.05] brightness-95 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Bottom soft gradient fade into dark background */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent pointer-events-none" />
              </div>

              {/* Quick photo change button overlay on hover */}
              <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={onUploadClick}
                  className="px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#e31b23]/60 text-white text-xs font-medium hover:bg-[#e31b23] transition-all flex items-center gap-1.5 shadow-xl"
                  title="Upload or change portrait photo"
                >
                  <span>Change Photo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: TAGLINE & VERTICAL STATS (3 Cols on LG) */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 z-20 flex flex-col justify-between pb-4 order-3">
            {/* Top Tagline */}
            <div className="mb-8 lg:mb-16">
              <div className="flex items-start gap-2 max-w-xs">
                <span className="text-[#e31b23] text-sm leading-none mt-1">✦</span>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-snug">
                  {data.hero.calloutText}
                </p>
              </div>
            </div>

            {/* Stats (Grid on mobile, vertical stack on desktop) */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-0 lg:space-y-7 border-t lg:border-t-0 pt-6 lg:pt-0 border-neutral-800">
              {data.hero.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col group">
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e31b23] leading-none tracking-tight group-hover:translate-x-1 transition-transform">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-widest text-neutral-400 uppercase mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
