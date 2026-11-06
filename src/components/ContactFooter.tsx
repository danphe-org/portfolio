import React, { useState } from 'react';
import { PortfolioData } from '../types/portfolio';
import { 
  Mail, 
  Globe, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  Copy, 
  Github, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

interface ContactFooterProps {
  data: PortfolioData;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ data }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full pt-16 sm:pt-24 pb-12 bg-[#060606] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-white/10">
          
          {/* ============================================================ */}
          {/* LEFT: TITLE & CALL TO ACTION (4 Cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight mb-4">
              <span>LET'S WORK</span>
              <div className="flex items-center gap-2 text-white">
                <span>TOGETHER</span>
                <span className="text-[#e31b23] text-3xl sm:text-4xl animate-pulse">✦</span>
              </div>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-sm mb-8">
              {data.contact.subheadline}
            </p>

            {/* Pill button */}
            <div>
              <a
                href={`mailto:${data.contact.email}?subject=Collaboration%20Inquiry`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-neutral-900 border border-neutral-700/80 hover:border-[#e31b23] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md group hover:bg-[#e31b23]"
              >
                <div className="w-5 h-5 rounded-full bg-[#e31b23] group-hover:bg-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3 h-3 text-white group-hover:text-[#e31b23] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span>{data.contact.badge}</span>
              </a>
            </div>
          </div>

          {/* ============================================================ */}
          {/* MIDDLE: CONTACT DETAILS LIST (4 Cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            {/* Email with copy button */}
            <div className="group flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-[#e31b23]/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800 text-neutral-300 group-hover:text-[#e31b23] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    Email
                  </span>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-xs sm:text-sm text-neutral-200 group-hover:text-white transition-colors font-medium font-mono"
                  >
                    {data.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-neutral-800/80 hover:bg-[#e31b23] text-neutral-400 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Website */}
            <div className="group flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-[#e31b23]/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800 text-neutral-300 group-hover:text-[#e31b23] transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    Website / Portfolio
                  </span>
                  <a
                    href={`https://${data.contact.website.replace(/^https?:\/\//, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-neutral-200 group-hover:text-white transition-colors font-medium"
                  >
                    {data.contact.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-[#e31b23]/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800 text-neutral-300 group-hover:text-[#e31b23] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    Phone / WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-mono">
                    {data.contact.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-[#e31b23]/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800 text-neutral-300 group-hover:text-[#e31b23] transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-200">
                    {data.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT: DESK / LAPTOP MOCKUP (4 Cols) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden border border-neutral-800 group shadow-2xl">
              <img
                src="/assets/workspace-desk.jpg"
                alt="Workspace desk setup"
                className="w-full h-auto object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="font-mono text-neutral-300">workspace.env: ready</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {data.hero.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-[#e31b23] transition-colors ml-4"
              title="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
