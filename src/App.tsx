import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';

// Layout & Helper Components
import Navbar from './components/Navbar';
import PagePreloader from './components/PagePreloader';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import WhyChooseMe from './sections/WhyChooseMe';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo physics
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  // Framer Motion spring physics scroll progress line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      {/* 1. Page Preloader Curtain */}
      {isLoading && <PagePreloader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="relative min-h-screen bg-bg-dark text-slate-600 dark:text-[#E2E8F0] selection:bg-primary/30 selection:text-white">

          {/* 3. Physics-based Scroll Progress Bar */}
          <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[9999] origin-[0%]"
          />

          {/* 4. Global Noise Texture overlay */}
          <div className="noise-overlay" />

          {/* 5. Sticky Navigation Bar */}
          <Navbar />

          {/* 6. Section Portfolio Blocks */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <WhyChooseMe />
            <Contact />
          </main>

          {/* 7. Footer */}
          <Footer />

        </div>
      )}
    </Router>
  );
};

export default App;
