import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface NavbarProps {
  data: PortfolioData;
  activePreset: 'template' | 'backend';
  onTogglePreset: () => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  activePreset,
  onTogglePreset,
  onOpenCustomizer,
}) => {
  return (
    <header className="w-full border-b border-white/5 bg-[#080808]/90 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Left branding */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#e31b23]">
              {data.hero.topRole}
            </span>
          </div>
          <span className="text-[11px] sm:text-xs tracking-wider uppercase text-neutral-400 font-medium pl-3.5">
            {data.hero.subRole}
          </span>
        </div>

        {/* Center quick links (hidden on very small screens) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            Process
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Right status & toggles */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Preset toggle badge */}
          <button
            onClick={onTogglePreset}
            className="flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-700/60 hover:border-[#e31b23]/60 text-neutral-300 hover:text-white transition-all shadow-sm"
            title="Toggle between Image Template (Rayhan) and Backend/Fullstack (Nishan)"
          >
            <Sparkles className="w-3 h-3 text-[#e31b23]" />
            <span className="hidden sm:inline">Preset:</span>
            <span className="text-[#e31b23] uppercase font-bold">
              {activePreset === 'template' ? 'Template Match' : 'Backend Dev'}
            </span>
          </button>

          {/* Status badge */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white transition-colors"
          >
            <span className="text-neutral-400 hidden lg:inline">{data.hero.status}</span>
            <span className="text-[#e31b23] text-sm">✦</span>
          </a>

          {/* Quick customizer trigger */}
          <button
            onClick={onOpenCustomizer}
            className="p-1.5 rounded-md bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-colors"
            title="Open Template Customizer"
            aria-label="Open template customizer"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
