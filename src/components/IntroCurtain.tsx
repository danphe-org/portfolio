import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroCurtain: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant micro-intro of 1.1s
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-50 bg-[#060606] flex flex-col items-center justify-center text-white cursor-pointer select-none"
        >
          <div className="flex flex-col items-center text-center px-4 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 font-mono">
                KATHMANDU, NEPAL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-2"
            >
              NISHAN RANA MAGAR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#e31b23]"
            >
              JAVA BACKEND / FULLSTACK DEVELOPER
            </motion.p>

            {/* Subtle red progress loader line */}
            <div className="w-36 h-[2px] bg-neutral-900 overflow-hidden mt-6 rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.85, ease: 'easeInOut' }}
                className="w-full h-full bg-[#e31b23]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
