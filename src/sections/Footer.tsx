import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="w-full bg-slate-50 dark:bg-[#030611] border-t border-slate-200 dark:border-white/5 py-8 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-center items-center">
          <div className="text-xs text-[var(--color-text-muted)] font-sans text-center">
            © {new Date().getFullYear()} Ramanathan D. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Fixed Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all duration-300 interactive-hover shadow-lg z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </>
  );
};

export default Footer;
