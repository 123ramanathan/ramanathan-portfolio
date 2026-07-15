import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';

interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ start = 0, end, duration = 2.5, suffix = '' }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [start, end, duration]);

  return <span>{count}{suffix}</span>;
};

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 4, suffix: '+', label: 'Major Deployments' },
    { value: 3, suffix: '', label: 'Professional Roles' },
    { value: 100, suffix: '%', label: 'Responsive Builds' },
  ];

  return (
    <section id="about" className="md:py-13 xl:py-15 py-5 relative overflow-hidden bg-bg-dark">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal variant="slideUp" className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            About <span className="text-gradient glow-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </ScrollReveal>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left - Portrait Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal variant="slideRight" className="w-full max-w-sm">
              <GlassCard className="p-4" tiltEnabled={true} glowEnabled={true}>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/50">
                  {/* Decorative corner grid */}
                  <div className="absolute inset-0 bg-grid-overlay opacity-30" />
                  <img
                    src="/avatar.png"
                    alt="Ramanathan D"
                    className="w-full h-full object-cover relative z-10 scale-95"
                  />
                  {/* Inner neon border gradient */}
                  <div className="absolute inset-0 border border-primary/20 rounded-xl pointer-events-none z-20" />
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Right - Profile Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <ScrollReveal variant="slideLeft" delay={0.1}>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-900 dark:text-white mb-6">
                Software & Front-End Developer
              </h3>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                <p>
                  I am an experienced <strong className="text-primary">Front-end Developer</strong> with over 3+ years of hands-on expertise in frontend technologies.
                </p>
                <p>
                  I have proven proficiency in <span className="text-secondary font-medium">developing, testing, and debugging</span> high-performing software solutions with meticulous attention to detail. My skillset covers Object-Oriented Programming (OOP), advanced web development, and database technologies.
                </p>
                <p>
                  Throughout my career, I have successfully designed, built, and shipped responsive web systems and cross-platform mobile applications using <span className="text-primary font-medium">Angular and Ionic</span>, integrating secure payment portals (Stripe, Razorpay) and location services (Google Maps API).
                </p>
                <p className="border-l-2 border-primary/50 pl-4 py-1 italic bg-primary/2 rounded-r-md">
                  Demonstrating a strong passion for learning and implementing new frontend and mobile technology.
                </p>
              </div>

              {/* Stats Counters Grid */}
              <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {stats.map((stat, i) => (
                  <GlassCard
                    key={i}
                    className="p-5 text-center flex flex-col justify-center items-center h-28"
                    tiltEnabled={true}
                    glowEnabled={true}
                  >
                    <div className="text-2xl md:text-3xl font-display font-bold text-gradient glow-secondary">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                        />
                      ) : (
                        <span>0{stat.suffix}</span>
                      )}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-xs font-sans mt-2 leading-tight">
                      {stat.label}
                    </div>
                  </GlassCard>
                ))}
              </div>

            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
