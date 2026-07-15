import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { LayoutGrid, Code, Smartphone, Database, CheckCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories: Category[] = [
    {
      id: 'frameworks',
      label: 'Frameworks',
      icon: <Code size={18} />,
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'Ionic Framework', level: 90 },
      ],
    },
    {
      id: 'languages',
      label: 'Languages & Styling',
      icon: <CheckCircle size={18} />,
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'SASS/SCSS', level: 90 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      id: 'integrations',
      label: 'Integrations & APIs',
      icon: <Database size={18} />,
      skills: [
        { name: 'REST API Integration', level: 90 },
        { name: 'Firebase Integration', level: 85 },
        { name: 'Firebase Deployment', level: 80 },
        { name: 'Stripe & Razorpay Payments', level: 85 },
        { name: 'Google Maps API', level: 80 },
      ],
    },
    {
      id: 'workflow',
      label: 'Workflow & Tools',
      icon: <Smartphone size={18} />,
      skills: [
        { name: 'Git & Version Control', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'Figma to Responsive Code', level: 85 },
      ],
    },
  ];

  // Get filtered skills or all skills
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return categories.flatMap((cat) =>
        cat.skills.map((skill) => ({ ...skill, category: cat.id }))
      );
    }
    const found = categories.find((cat) => cat.id === activeCategory);
    return found ? found.skills.map((skill) => ({ ...skill, category: found.id })) : [];
  };

  const currentSkills = getFilteredSkills();

  return (
    <section id="skills" className="md:py-13 xl:py-15 py-5 relative overflow-hidden bg-bg-dark">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Technical <span className="text-gradient glow-secondary">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </ScrollReveal>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 border transition-all duration-300 interactive-hover ${
              activeCategory === 'all'
                ? 'bg-primary text-white border-transparent shadow-lg shadow-primary/10'
                : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid size={16} />
            Show All
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 border transition-all duration-300 interactive-hover ${
                activeCategory === cat.id
                  ? 'bg-primary text-white border-transparent shadow-lg shadow-primary/10'
                  : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {currentSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={`${skill.name}-${index}`}
              >
                <GlassCard className="p-6 flex flex-col justify-between h-32" tiltEnabled={true} glowEnabled={true}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-display font-medium text-[var(--color-text-main)] tracking-wide">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar container */}
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
