import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const handleHireMeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center xl:pt-47 md:pt-40 pt-32 md:pb-13 xl:pb-15 pb-5 overflow-hidden"
    >


      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left - Heading Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>Software Engineer @ Tridots Tech</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-none mb-6 text-slate-900 dark:text-white"
          >
            Hi, I'm <span className="text-gradient glow-primary whitespace-nowrap">Ramanathan D</span>
          </motion.h1>

          {/* Role / Typing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-800 dark:text-slate-200 mb-6 flex flex-wrap gap-x-2"
          >
            <span>I am a</span>
            <span className="text-secondary font-semibold">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  1800,
                  'Front-End Developer',
                  1800,
                  'Angular Developer',
                  1800,
                  'Ionic Developer',
                  1800,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl font-sans leading-relaxed mb-10"
          >
            "I build beautiful, responsive, scalable websites and mobile applications with modern frontend technologies."
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={handleHireMeClick}
              className="px-8 py-4 rounded-xl font-semibold bg-primary text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group interactive-hover"
            >
              Hire Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Ramanathan_D_Resume.pdf"
              download="Ramanathan_D_Resume.pdf"
              className="px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:border-slate-400 bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 interactive-hover text-center"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right - Portrait Image */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            


            {/* Solid Border Circle */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 pointer-events-none" />

            {/* Image Container with Floating animation */}
            <div className="absolute inset-6 rounded-full overflow-hidden border border-slate-200/50 animate-float bg-slate-100/50 shadow-2xl flex items-center justify-center">
              <img
                src="/avatar.png"
                alt="Ramanathan D - Angular Front-End Developer"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
            
          </motion.div>
        </div>
      </div>
      
      {/* CSS Spin Slow Keyframes embedded inline if needed, but standard Tailwind spin-slow custom class works or spin */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
