import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFooterProps {
  data: PortfolioData;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ data }) => {
  return (
    <footer id="contact" className="w-full pt-16 sm:pt-24 pb-12 bg-[#060606] text-white relative">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Main Footer Content: Left (Let's work together) & Right (Contact + Social Icons) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-16"
        >
          
          {/* Left Side: LET'S WORK TOGETHER */}
          <div className="md:col-span-7 lg:col-span-8 max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight mb-4">
              <span>LET'S WORK</span>
              <div className="flex items-center gap-2 text-white">
                <span>TOGETHER.</span>
                <motion.span 
                  animate={{ scale: [1, 1.25, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#e31b23] text-3xl sm:text-4xl inline-block"
                >
                  ✦
                </motion.span>
              </div>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-md mb-8">
              {data.contact.subheadline}
            </p>

            {/* Pill button - Spring animated, no border */}
            <div>
              <motion.a
                href={`mailto:${data.contact.email}?subject=Project%20Inquiry%20-%20Backend%20Engineering`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-neutral-900 text-white text-xs font-bold tracking-wider uppercase transition-colors group hover:bg-[#e31b23] border-0 outline-none"
              >
                <div className="w-5 h-5 rounded-full bg-[#e31b23] group-hover:bg-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3 h-3 text-white group-hover:text-[#e31b23] group-hover:translate-x-0.5 transition-all" />
                </div>
                <span>{data.contact.badge}</span>
              </motion.a>
            </div>
          </div>

          {/* Right Side: Contact heading & Social Media Icons */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col md:items-end justify-start pt-2">
            <div className="flex flex-col md:items-end">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-neutral-400 mb-4 block">
                Contact
              </span>
              <div className="flex items-center gap-3">
                <motion.a
                  href={data.contact.linkedin || 'https://linkedin.com/in/nishan-magar'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.15, y: -3, rotate: 3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 450, damping: 17 }}
                  className="w-11 h-11 rounded-full bg-neutral-900 text-neutral-300 hover:text-white hover:bg-[#0077b5] flex items-center justify-center transition-colors group border-0 outline-none shadow-lg hover:shadow-[0_4px_20px_rgba(0,119,181,0.4)]"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform text-[#0077b5] group-hover:text-white" />
                </motion.a>

                <motion.a
                  href={data.contact.github || 'https://github.com/nishan9813'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.15, y: -3, rotate: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 450, damping: 17 }}
                  className="w-11 h-11 rounded-full bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-colors group border-0 outline-none shadow-lg hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                  title="GitHub"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform text-white" />
                </motion.a>

                <motion.a
                  href={data.contact.instagram || 'https://instagram.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.15, y: -3, rotate: 3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 450, damping: 17 }}
                  className="w-11 h-11 rounded-full bg-neutral-900 text-neutral-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] flex items-center justify-center transition-colors group border-0 outline-none shadow-lg hover:shadow-[0_4px_20px_rgba(225,48,108,0.4)]"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform text-[#E1306C] group-hover:text-white" />
                </motion.a>

                <motion.a
                  href={data.contact.facebook || 'https://facebook.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.15, y: -3, rotate: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 450, damping: 17 }}
                  className="w-11 h-11 rounded-full bg-neutral-900 text-neutral-300 hover:text-white hover:bg-[#1877F2] flex items-center justify-center transition-colors group border-0 outline-none shadow-lg hover:shadow-[0_4px_20px_rgba(24,119,242,0.4)]"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform text-[#1877F2] group-hover:text-white" />
                </motion.a>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {data.hero.name}  ·  Kathmandu, Nepal</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href={data.contact.linkedin || 'https://linkedin.com/in/nishan-magar'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={data.contact.github || 'https://github.com/nishan9813'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={data.contact.instagram || 'https://instagram.com/'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>Instagram</span>
            </a>
            <a
              href={data.contact.facebook || 'https://facebook.com/'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
