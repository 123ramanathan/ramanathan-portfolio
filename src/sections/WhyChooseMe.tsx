import React from 'react';
import { Code2, Package2, ShieldCheck, Zap, Globe, Sparkles, Layout, Smartphone } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';

interface Tenet {
  title: string;
  desc: string;
  metric: string;
  icon: React.ReactNode;
}

export const WhyChooseMe: React.FC = () => {
  const tenets: Tenet[] = [
    {
      title: 'Clean Code',
      desc: 'Writing structured, commented, and self-documenting code complying with Angular Style Guide and TypeScript strict guidelines.',
      metric: 'Zero-Lint Errors',
      icon: <Code2 className="text-primary" size={20} />
    },
    {
      title: 'Reusable Components',
      desc: 'Developing modular, parametric UI components and directives that accelerate feature rollouts and ease updates.',
      metric: 'DRY Architecture',
      icon: <Package2 className="text-primary" size={20} />
    },
    {
      title: 'Responsive Design',
      desc: 'Engineering liquid grids and layouts that adapt flawlessly from small mobile screens up to 4K displays.',
      metric: 'Mobile-First UI',
      icon: <Smartphone className="text-primary" size={20} />
    },
    {
      title: 'Fast Delivery',
      desc: 'Organized execution with Agile iterations, providing functional increments and meeting strict milestone targets.',
      metric: 'On-Time Sprints',
      icon: <Zap className="text-primary" size={20} />
    },
    {
      title: 'SEO Friendly',
      desc: 'Applying semantic tags, structured markup JSON-LD, meta indexing, and heading structures to rank high on search engines.',
      metric: 'Google Index Ready',
      icon: <Globe className="text-primary" size={20} />
    },
    {
      title: 'Performance Optimized',
      desc: 'Lazy-loading routes, bundle chunking, compressing assets, and controlling change detection for high framerates.',
      metric: '<1s Load Time',
      icon: <ShieldCheck className="text-primary" size={20} />
    },
    {
      title: 'Pixel Perfect UI',
      desc: 'Converting design system values (paddings, colors, margins) from Figma onto the web screen with precision.',
      metric: 'Figma Identical',
      icon: <Layout className="text-primary" size={20} />
    },
    {
      title: 'Modern UX',
      desc: 'Creating smooth scroll physics, custom cursors, page loader sequences, and interactive states to impress users.',
      metric: 'Smooth Scroll',
      icon: <Sparkles className="text-primary" size={20} />
    }
  ];

  return (
    <section id="why-choose-me" className="md:py-13 xl:py-15 py-5 relative overflow-hidden bg-bg-dark">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Why <span className="text-gradient glow-primary">Choose Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-sans max-w-xl mx-auto text-sm md:text-base">
            I combine front-end engineering expertise with a passion for high-performance motion design to deliver clean digital products.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-6" />
        </ScrollReveal>

        {/* Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tenets.map((tenet, idx) => (
            <ScrollReveal
              key={idx}
              variant="slideUp"
              delay={0.05 * idx}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between group hover:border-secondary/20">
                <div>
                  {/* Icon & Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-secondary/5 group-hover:border-secondary/30 transition-all duration-300">
                      {tenet.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-[var(--color-text-muted)] group-hover:text-secondary group-hover:border-secondary/10 transition-colors">
                      {tenet.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold font-display text-[var(--color-text-main)] mb-2.5">
                    {tenet.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-text-muted)] text-xs leading-relaxed font-sans">
                    {tenet.desc}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMe;
