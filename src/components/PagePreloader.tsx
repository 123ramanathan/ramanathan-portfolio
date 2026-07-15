import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PagePreloaderProps {
  onComplete: () => void;
}

export const PagePreloader: React.FC<PagePreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 1200; // 1.2s total load animation
    const interval = 15;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600); // Duration matches motion.div exit transition
          }, 200);
          return 100;
        }
        return Math.floor(next);
      });
    }, interval);

    document.body.style.overflow = 'hidden';

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 w-full h-full bg-[#050816] z-[99999] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Noise effect */}
          <div className="noise-overlay" />
          
          <div className="flex flex-col items-center max-w-xs w-full px-6">
            {/* Glowing Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold font-display tracking-widest text-gradient glow-primary mb-12"
            >
              RD
            </motion.div>

            {/* Percentage counter */}
            <div className="w-full flex justify-between items-end mb-3">
              <span className="text-xs font-display font-medium text-slate-500 uppercase tracking-widest">
                Initializing Portal
              </span>
              <span className="text-3xl font-mono font-bold text-primary glow-primary">
                {progress}%
              </span>
            </div>

            {/* Horizontal progress bar */}
            <div className="w-full h-[2px] bg-slate-900 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PagePreloader;
