import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  data: PortfolioData;
}

export const Navbar: React.FC<NavbarProps> = ({ data }) => {
  return (
    <header className="w-full bg-[#080808]/90 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3.5 flex items-center justify-between">
        {/* Left branding */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#e31b23]">
              {data.hero.topRole}
            </span>
          </div>
          <span className="text-[11px] sm:text-xs tracking-wider uppercase text-neutral-400 font-medium pl-3.5">
            {data.hero.subRole}
          </span>
        </motion.div>

        {/* Right action */}
        <div className="flex items-center">
          {/* Let's Talk CTA button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#e31b23] hover:bg-[#c4141b] text-white transition-all shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </header>
  );
};
