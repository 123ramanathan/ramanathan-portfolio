import React from 'react';
import { Layers, CheckCircle } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  type: string;
}

// Crisp, high-performance SVG Mockup Illustrations matching Linear/Vercel styles
const ProjectMockup: React.FC<{ type: string }> = ({ type }) => {
  const baseBg = "w-full h-48 bg-slate-100/60 dark:bg-slate-900/40 border-b border-slate-200/50 dark:border-white/5 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500";

  switch (type) {
    case 'dashboard':
      return (
        <div className={baseBg}>
          <div className="absolute inset-0 bg-grid-overlay opacity-20" />
          <svg className="w-4/5 h-3/4 text-primary/40" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="130" rx="6" className="fill-white dark:fill-[#050816] stroke-slate-200/50 dark:stroke-white/5" strokeWidth="2" />
            <rect x="25" y="25" width="70" height="40" rx="4" fill="rgba(231,111,81,0.1)" stroke="#e76f51" strokeWidth="1.5" />
            <rect x="110" y="25" width="70" height="40" rx="4" fill="rgba(42,157,143,0.1)" stroke="#2a9d8f" strokeWidth="1.5" />
            <rect x="195" y="25" width="80" height="40" rx="4" className="fill-slate-900/[0.02] dark:fill-white/[0.02] stroke-slate-200/50 dark:stroke-white/5" />
            {/* Chart path */}
            <path d="M25 115 L70 95 L115 110 L160 80 L205 100 L250 70 L275 85" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 115 L70 95 L115 110 L160 80 L205 100 L250 70 L275 85 L275 130 L25 130 Z" fill="url(#chartGrad)" opacity="0.15" />
            <line x1="25" y1="130" x2="275" y2="130" className="stroke-slate-200/80 dark:stroke-white/10" strokeWidth="1.5" />
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2a9d8f" />
                <stop offset="100%" stopColor="#2a9d8f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    case 'mobile':
      return (
        <div className={baseBg}>
          <div className="absolute inset-0 bg-grid-overlay opacity-20" />
          <svg className="w-1/2 h-full text-secondary/40" viewBox="0 0 150 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Phone Body */}
            <rect x="35" y="10" width="80" height="160" rx="14" className="fill-white dark:fill-[#050816] stroke-primary/30" strokeWidth="2.5" />
            {/* Camera notch */}
            <rect x="65" y="16" width="20" height="5" rx="2.5" className="fill-slate-900/15 dark:fill-white/15" />
            {/* Screen Widgets */}
            <rect x="45" y="32" width="60" height="45" rx="6" fill="rgba(42,157,143,0.08)" stroke="#2a9d8f" strokeWidth="1" />
            <circle cx="75" cy="55" r="12" stroke="#e76f51" strokeWidth="2.5" fill="rgba(231,111,81,0.15)" />
            <rect x="45" y="85" width="60" height="15" rx="3" className="fill-slate-900/[0.03] dark:fill-white/[0.05]" />
            <rect x="45" y="106" width="60" height="15" rx="3" className="fill-slate-900/[0.03] dark:fill-white/[0.05]" />
            <rect x="45" y="127" width="60" height="15" rx="3" className="fill-slate-900/[0.03] dark:fill-white/[0.05]" />
          </svg>
        </div>
      );
    case 'ecommerce':
      return (
        <div className={baseBg}>
          <div className="absolute inset-0 bg-grid-overlay opacity-20" />
          <svg className="w-4/5 h-3/4 text-primary/40" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="130" rx="6" className="fill-white dark:fill-[#050816] stroke-slate-200/50 dark:stroke-white/5" strokeWidth="2" />
            {/* Products grid */}
            <rect x="25" y="25" width="70" height="70" rx="4" className="fill-slate-900/[0.01] dark:fill-white/[0.02] stroke-slate-200/50 dark:stroke-white/5" />
            <rect x="115" y="25" width="70" height="70" rx="4" className="fill-slate-900/[0.01] dark:fill-white/[0.02] stroke-slate-200/50 dark:stroke-white/5" />
            <rect x="205" y="25" width="70" height="70" rx="4" className="fill-slate-900/[0.01] dark:fill-white/[0.02] stroke-slate-200/50 dark:stroke-white/5" />
            {/* Shopping bags inside mock */}
            <path d="M60 45 L60 55 A10 10 0 0 0 70 55" stroke="#e76f51" strokeWidth="2" strokeLinecap="round" />
            <circle cx="60" cy="58" r="8" fill="#2a9d8f" opacity="0.8" />
            <path d="M150 45 L150 55 A10 10 0 0 0 160 55" stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round" />
            <circle cx="150" cy="58" r="8" fill="#e76f51" opacity="0.8" />
            {/* Text mocks */}
            <rect x="25" y="105" width="50" height="6" rx="2" className="fill-slate-900/10 dark:fill-white/10" />
            <rect x="25" y="116" width="30" height="5" rx="1.5" fill="rgba(42,157,143,0.3)" />
            <rect x="115" y="105" width="50" height="6" rx="2" className="fill-slate-900/10 dark:fill-white/10" />
            <rect x="115" y="116" width="30" height="5" rx="1.5" fill="rgba(231,111,81,0.3)" />
            <rect x="205" y="105" width="50" height="6" rx="2" className="fill-slate-900/10 dark:fill-white/10" />
          </svg>
        </div>
      );
    case 'inventory':
      return (
        <div className={baseBg}>
          <div className="absolute inset-0 bg-grid-overlay opacity-20" />
          <svg className="w-4/5 h-3/4" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="130" rx="6" className="fill-white dark:fill-[#050816] stroke-slate-200/50 dark:stroke-white/5" strokeWidth="2" />
            {/* Table Mock */}
            <rect x="20" y="20" width="260" height="20" rx="3" className="fill-primary/10 dark:fill-primary/20" />
            <line x1="20" y1="40" x2="280" y2="40" className="stroke-slate-200/50 dark:stroke-white/5" />
            <line x1="20" y1="62" x2="280" y2="62" className="stroke-slate-200/50 dark:stroke-white/5" />
            <line x1="20" y1="84" x2="280" y2="84" className="stroke-slate-200/50 dark:stroke-white/5" />
            <line x1="20" y1="106" x2="280" y2="106" className="stroke-slate-200/50 dark:stroke-white/5" />
            {/* Text lines in grid */}
            <circle cx="35" cy="30" r="4" fill="#2a9d8f" />
            <rect x="50" y="27" width="50" height="6" rx="2" className="fill-slate-600 dark:fill-slate-400" />
            <rect x="120" y="27" width="30" height="6" rx="2" fill="#e76f51" />

            <circle cx="35" cy="51" r="4" fill="#e76f51" />
            <rect x="50" y="48" width="80" height="6" rx="2" className="fill-slate-900/10 dark:fill-white/10" />
            
            <circle cx="35" cy="73" r="4" fill="#2a9d8f" />
            <rect x="50" y="70" width="60" height="6" rx="2" className="fill-slate-900/10 dark:fill-white/10" />
          </svg>
        </div>
      );
    case 'portal':
      return (
        <div className={baseBg}>
          <div className="absolute inset-0 bg-grid-overlay opacity-20" />
          <svg className="w-4/5 h-3/4 text-secondary/40" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="130" rx="6" className="fill-white dark:fill-[#050816] stroke-slate-200/50 dark:stroke-white/5" strokeWidth="2" />
            {/* Split UI layout */}
            <rect x="20" y="20" width="60" height="110" rx="4" className="fill-slate-900/[0.02] dark:fill-white/[0.02] stroke-slate-200/50 dark:stroke-white/5" />
            <circle cx="50" cy="45" r="14" fill="rgba(231,111,81,0.1)" stroke="#e76f51" strokeWidth="1.5" />
            <rect x="30" y="70" width="40" height="6" rx="2" className="fill-slate-900/10 dark:fill-white/10" />
            <rect x="35" y="82" width="30" height="4" rx="1.5" className="fill-slate-900/10 dark:fill-white/10" />

            <rect x="90" y="20" width="190" height="110" rx="4" className="fill-slate-900/[0.02] dark:fill-white/[0.02] stroke-slate-200/50 dark:stroke-white/5" />
            <rect x="105" y="35" width="160" height="35" rx="4" fill="rgba(42,157,143,0.06)" stroke="#2a9d8f" strokeWidth="1" />
            <rect x="105" y="80" width="70" height="15" rx="3" className="fill-slate-900/[0.03] dark:fill-white/[0.05]" />
            <rect x="185" y="80" width="80" height="15" rx="3" className="fill-slate-900/[0.03] dark:fill-white/[0.05]" />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Applications',
      desc: 'Designed and developed end-to-end multiple commercial shopping portals incorporating Stripe and Razorpay integrations to streamline order and stock operations.',
      tags: ['Angular', 'REST APIs', 'Stripe', 'Razorpay', 'SCSS', 'Git'],
      features: ['End-to-end checkout pipeline', 'Payment gateway integrations', 'Streamlined inventory flows', 'Responsive client-side modules'],
      demoUrl: '#',
      githubUrl: '#',
      type: 'ecommerce'
    },
    {
      title: 'Ionic Mobile Application',
      desc: 'Dynamic, interactive cross-platform web and mobile application utilizing the Google Maps API to offer accurate location-based services.',
      tags: ['Angular', 'Ionic Framework', 'Google Maps API', 'Mobile UI'],
      features: ['Interactive location locator', 'Accurate hardware sensor hooks', 'Responsive mobile-first grids', 'Fluid view transitions physics'],
      demoUrl: '#',
      githubUrl: '#',
      type: 'mobile'
    },
    {
      title: 'Inventory Management System',
      desc: 'Dedicated inventory management application managing stock flows, product lines, and tracking quantities, connected to a cloud database.',
      tags: ['Angular', 'TypeScript', 'Firebase', 'SCSS', 'GitHub'],
      features: ['Real-time Firebase database sync', 'Product categorizations setup', 'Responsive administrative grids', 'Clean, modular UI design'],
      demoUrl: '#',
      githubUrl: '#',
      type: 'inventory'
    },
    {
      title: 'School Management System',
      desc: 'A robust administration interface developed during frontend training to manage student profiles, class rosters, and course catalog listings.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design'],
      features: ['Student roster databases', 'Course listings directory', 'Clean navigation dashboards', 'W3C compliant code design'],
      demoUrl: '#',
      githubUrl: '#',
      type: 'portal'
    }
  ];

  return (
    <section id="projects" className="md:py-13 xl:py-15 py-5 relative overflow-hidden bg-bg-dark">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Recent <span className="text-gradient glow-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ScrollReveal
              key={idx}
              variant="slideUp"
              delay={0.1 * (idx % 3)}
            >
              <GlassCard className="flex flex-col h-full group hover:border-primary/20">
                
                {/* SVG Mockup header */}
                <ProjectMockup type={proj.type} />

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold font-display text-[var(--color-text-main)] mb-3 group-hover:text-primary transition-colors duration-300">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 font-sans">
                      {proj.desc}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 mb-8">
                      <span className="text-xs font-display font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-3">
                        <Layers size={12} />
                        Key Features
                      </span>
                      {proj.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] font-sans">
                          <CheckCircle size={10} className="text-primary" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
