import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroCurtain: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while intro is active
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 1400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    document.body.style.overflow = '';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // Crucial: Overlay starts 100% solid and opaque so no website is shown before
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
          }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[9999] bg-[#060606] flex flex-col items-center justify-center text-white cursor-pointer select-none"
        >
          <div className="flex flex-col items-center text-center px-4 max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 font-mono">
                KATHMANDU, NEPAL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-2"
            >
              NISHAN RANA MAGAR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#e31b23]"
            >
              JAVA BACKEND / FULLSTACK DEVELOPER
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
