import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  tags: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Engineer',
      company: 'Tridots Tech Pvt Ltd (Chennai, India)',
      period: 'July 2023 - Present',
      responsibilities: [
        'Led the end-to-end design and development of multiple e-commerce applications using Angular, streamlining inventory management and order processing.',
        'Developed dynamic, interactive web and mobile applications using the Angular and Ionic framework.',
        'Implemented modular reusable components and optimized application performance through code refactoring.',
        'Integrated frontend components with backend systems and REST APIs to fetch and display dynamic data, ensuring seamless communication.',
        'Enhanced metadata (meta titles, descriptions, and keywords) to optimize content for search engine crawlers and increase click-through rates.',
        'Integrated secure payment gateways (e.g., Stripe, Razorpay) into applications, enabling seamless online transactions.',
        'Integrated Google Maps API into mobile applications to provide accurate location-based services.',
        'Converted complex designs from Figma into pixel-perfect, responsive websites and apps compatible with all mobile/desktop devices.'
      ],
      tags: ['Angular', 'Ionic', 'TypeScript', 'SCSS', 'REST APIs', 'Stripe', 'Razorpay', 'Google Maps API', 'Firebase', 'Figma', 'Git/GitHub']
    },
    {
      role: 'Front-End Developer (Training & Projects)',
      company: 'Ebrain Technologies',
      period: '2022 - 2023',
      responsibilities: [
        'Completed intensive course in frontend technologies and contributed to real-world Inventory Management and School Management systems.',
        'Developed clean, semantic HTML5, CSS3, and SCSS mockups for enterprise web tools.',
        'Wrote responsive layouts and client-side logic using JavaScript and TypeScript.',
        'Experienced in Firebase integration, database basics, hosting, and Git workflow coordinates.'
      ],
      tags: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'Firebase', 'Git', 'GitHub']
    },
    {
      role: 'Full-Stack Development Intern',
      company: 'Bishop Heber College',
      period: '2022',
      responsibilities: [
        'Completed full-stack development internship training, gaining foundational hands-on experience in web development workflows.',
        'Designed client-side layouts, linked front-end controls with local backend engines, and experimented with database connections.'
      ],
      tags: ['Full-Stack Development', 'HTML5', 'CSS3', 'JavaScript', 'Database Basics', 'Web Security']
    }
  ];

  return (
    <section id="experience" className="md:py-13 xl:py-15 py-5 relative overflow-hidden bg-bg-dark">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Work <span className="text-gradient glow-primary">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </ScrollReveal>

        {/* Timeline Path container */}
        <div className="relative">
          
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-[1px]" />

          {/* Experience list */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row relative items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Bullet Node */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-bg-dark border-2 border-primary -translate-x-1/2 flex items-center justify-center z-20 shadow-lg shadow-primary/20 top-6">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </div>

                  {/* Empty space block for desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Block */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <ScrollReveal
                      variant={isEven ? 'slideLeft' : 'slideRight'}
                      delay={0.1 * index}
                    >
                      <GlassCard className="p-8 group hover:border-primary/20">
                        {/* Period & Icon Header */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-xs font-mono">
                            <Calendar size={12} className="text-primary" />
                            {exp.period}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400 font-display font-medium text-xs flex items-center gap-1.5">
                            <Briefcase size={12} />
                            Full-time
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold font-display text-[var(--color-text-main)] group-hover:text-primary transition-colors mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-sans font-medium text-[var(--color-text-muted)] mb-6">
                          {exp.company}
                        </h4>

                        {/* Responsibilities */}
                        <ul className="space-y-3.5 mb-8 text-[var(--color-text-muted)] font-sans text-sm leading-relaxed text-left list-none">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-slate-400 group-hover:border-slate-350 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </ScrollReveal>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
