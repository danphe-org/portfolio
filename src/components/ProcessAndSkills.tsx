import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { 
  Search, 
  Lightbulb, 
  PenTool, 
  Code2, 
  Send, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProcessAndSkillsProps {
  data: PortfolioData;
}

export const ProcessAndSkills: React.FC<ProcessAndSkillsProps> = ({ data }) => {
  // Map step icon string to Lucide icon
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'search':
        return <Search className="w-3.5 h-3.5 text-neutral-300" />;
      case 'ideate':
        return <Lightbulb className="w-3.5 h-3.5 text-neutral-300" />;
      case 'design':
        return <PenTool className="w-3.5 h-3.5 text-neutral-300" />;
      case 'develop':
        return <Code2 className="w-3.5 h-3.5 text-neutral-300" />;
      case 'deliver':
        return <Send className="w-3.5 h-3.5 text-neutral-300" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-neutral-300" />;
    }
  };

  return (
    <section id="skills" className="w-full py-16 sm:py-20 border-b border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10">

          {/* ============================================================ */}
          {/* COLUMN 1: EDUCATION & SKILLS (4 Cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div>
              {/* Header */}
              <h2 className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-white pb-4 border-b border-white/10 mb-6">
                EDUCATION & SKILLS
              </h2>

              {/* EDUCATION SUB-BLOCK */}
              <div className="space-y-4 mb-8">
                <span className="text-xs font-bold tracking-wider uppercase text-[#e31b23] block">
                  EDUCATION
                </span>

                <div className="space-y-4">
                  {data.education.map((edu, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-3 group">
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-neutral-200 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-[11px] font-bold text-[#e31b23] shrink-0 font-mono">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS SUB-BLOCK */}
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-[#e31b23] block mb-3.5">
                  SKILLS
                </span>

                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-neutral-900/90 border border-neutral-800 text-neutral-300 rounded hover:border-[#e31b23]/60 hover:text-white transition-all shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: WORK PROCESS (4 Cols) */}
          {/* ============================================================ */}
          <div id="process" className="lg:col-span-4 flex flex-col">
            <h2 className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-white pb-4 border-b border-white/10 mb-6">
              WORK PROCESS
            </h2>

            {/* Timeline container */}
            <div className="relative pl-1 space-y-6">
              {data.process.map((step, idx) => {
                const isLast = idx === data.process.length - 1;

                return (
                  <div key={idx} className="relative flex items-start gap-4 group">
                    {/* Step Number in Red (01, 02, etc.) */}
                    <span className="font-display text-sm font-bold text-[#e31b23] w-5 pt-0.5 shrink-0 text-right">
                      {step.step}
                    </span>

                    {/* Icon with connecting vertical line */}
                    <div className="relative flex flex-col items-center shrink-0">
                      <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700/80 group-hover:border-[#e31b23] flex items-center justify-center transition-colors shadow-sm">
                        {getStepIcon(step.icon)}
                      </div>
                      {!isLast && (
                        <div className="w-[1px] h-10 bg-neutral-800 group-hover:bg-[#e31b23]/30 transition-colors my-1" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="pb-1">
                      <h4 className="text-xs font-bold tracking-wider uppercase text-[#e31b23] group-hover:text-white transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-normal leading-relaxed mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: QUOTE / TESTIMONIAL CARD (4 Cols) */}
          {/* Distinctive Deep Crimson Card Matching Reference Poster */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative h-full rounded-2xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#3b090d] via-[#240507] to-[#120204] border border-[#5c1016] shadow-xl group hover:border-[#85161f] transition-all duration-300">
              
              {/* Subtle crimson radial glow inside card */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#e31b23]/15 blur-3xl pointer-events-none rounded-full" />

              {/* Top Quote Icon */}
              <div>
                <div className="text-[#e31b23] opacity-80 mb-4">
                  <span className="font-serif text-6xl leading-none block select-none">
                    “
                  </span>
                </div>

                {/* Big Quote Text */}
                <blockquote className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight mb-8">
                  {data.quote.text}
                </blockquote>
              </div>

              {/* Author Signature & Callout */}
              <div className="pt-6 border-t border-white/10">
                {/* Handwritten Script Signature */}
                <div className="mb-4">
                  <span className="font-script text-3xl sm:text-4xl text-neutral-100 font-normal tracking-wide block -rotate-3 select-none drop-shadow">
                    {data.quote.signatureName}
                  </span>
                </div>

                {/* Bottom Callout & Action */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase text-neutral-300">
                    {data.quote.ctaNote}
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e31b23] hover:text-white uppercase tracking-wider transition-colors pt-1"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
