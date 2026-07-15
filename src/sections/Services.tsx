import React from 'react';
import { Cpu, Monitor, Target, Smartphone, RefreshCw, Layers } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';

interface Service {
  title: string;
  desc: string;
  icon: React.ReactNode;
  deliverables: string[];
}

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Angular Web Apps',
      desc: 'Architecting and developing modular, high-performing enterprise web applications using Angular with strict component reusability and performance refactoring.',
      icon: <Cpu size={24} className="text-primary group-hover:rotate-90 transition-transform duration-500" />,
      deliverables: ['Modular component libraries', 'Dynamic reactive forms flows', 'Bundle size loading optimizations']
    },
    {
      title: 'Ionic Mobile Development',
      desc: 'Developing dynamic, interactive cross-platform mobile applications for iOS and Android using the Angular Ionic framework.',
      icon: <Smartphone size={24} className="text-secondary group-hover:translate-x-[2px] transition-transform" />,
      deliverables: ['Cross-platform mobile apps', 'Unified hybrid codebases', 'Smooth, native look-and-feel experiences']
    },
    {
      title: 'Figma to Responsive Code',
      desc: 'Converting website and mobile application design systems from Figma into pixel-perfect, fully responsive websites and apps compatible with all devices.',
      icon: <Monitor size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />,
      deliverables: ['Pixel-perfect Figma alignments', 'Fluid responsive styling controls', 'Standard W3C semantic codebases']
    },
    {
      title: 'Payment gateway integrations',
      desc: 'Integrating secure payment API gateways (such as Stripe and Razorpay) into web/mobile portals, enabling seamless online transactions.',
      icon: <Layers size={24} className="text-secondary group-hover:scale-105 transition-transform" />,
      deliverables: ['Stripe payment checkout flows', 'Razorpay merchant portal setups', 'Secured, encrypted checkout sessions']
    },
    {
      title: 'Location-Based Services',
      desc: 'Integrating Google Maps API and other location widgets into mobile applications to provide accurate geography and routing tracking.',
      icon: <Target size={24} className="text-primary group-hover:animate-pulse" />,
      deliverables: ['Google Maps API overlays', 'Pulsing geolocation pins', 'Coordinate location data tracking']
    },
    {
      title: 'SEO Metadata Optimization',
      desc: 'Enhancing website metadata, including meta titles, descriptions, and keywords, to optimize content for search engine crawlers and increase click rates.',
      icon: <RefreshCw size={24} className="text-secondary group-hover:rotate-180 transition-transform duration-700" />,
      deliverables: ['Search-crawler optimized tags', 'Semantic HTML5 structure', 'Page indexing optimizations']
    }
  ];

  return (
    <section id="services" className="py-14 relative overflow-hidden bg-bg-dark">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            My <span className="text-gradient glow-secondary">Services</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              variant="slideUp"
              delay={0.08 * index}
            >
              <GlassCard className="p-8 h-full flex flex-col group hover:border-primary/20">
                {/* Icon wrapper with glow */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 shadow-inner">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold font-display text-[var(--color-text-main)] mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 font-sans">
                  {service.desc}
                </p>

                {/* Deliverables */}
                <div className="mt-auto space-y-2 border-t border-slate-200/60 pt-4">
                  {service.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[var(--color-text-muted)] font-sans">
                      <span className="text-secondary">•</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
