import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378.003 12.003.003a11.93 11.93 0 0 1 8.484 3.518 11.93 11.93 0 0 1 3.51 8.492c-.003 6.63-5.378 11.997-12.003 11.997-2.002-.001-3.973-.5-5.739-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.858a9.803 9.803 0 0 0-2.902-6.98 9.802 9.802 0 0 0-6.965-2.9c-5.437 0-9.862 4.422-9.865 9.86-.001 1.77.461 3.5 1.338 5.016l-.985 3.598 3.696-.969zm10.743-7.25c-.29-.145-1.72-.848-1.986-.944-.267-.097-.461-.145-.656.145-.194.29-.752.944-.922 1.139-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.336-1.442-.864-.77-1.448-1.72-1.617-2.01-.17-.29-.018-.448.127-.592.13-.13.29-.34.436-.509.145-.17.194-.29.29-.485.097-.194.048-.364-.025-.509-.073-.145-.656-1.579-.9-2.164-.236-.57-.497-.492-.656-.5l-.56-.008c-.194 0-.509.073-.776.364-.267.29-1.02 1.02-1.02 2.487 0 1.467 1.067 2.885 1.213 3.08 1.448.194 2.227 1.449 4.3 2.338.497.213.886.34 1.19.437.5.16.955.137 1.314.083.4-.06 1.72-.703 1.962-1.383.243-.68.243-1.26.17-1.383-.073-.122-.267-.194-.558-.34z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in required fields (Name and Email)');
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
      // Clear toast after 5s
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="md:py-13 xl:py-15 py-5 relative overflow-hidden bg-bg-dark">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal variant="slideUp" className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-4">
            Get In <span className="text-gradient glow-primary">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Glassmorphism Form */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="slideRight">
              <GlassCard className="p-8 md:p-10" tiltEnabled={false}>
                
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white text-left mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-display font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="px-4 py-3 rounded-lg border border-slate-200 dark:border-white/10 focus:border-primary bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors duration-300 w-full"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-display font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="px-4 py-3 rounded-lg border border-slate-200 dark:border-white/10 focus:border-primary bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors duration-300 w-full"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-display font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="px-4 py-3 rounded-lg border border-slate-200 dark:border-white/10 focus:border-primary bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors duration-300 w-full"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-primary text-white font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 interactive-hover"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Request
                      </>
                    )}
                  </button>

                  {/* Status Banner */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium text-center"
                      >
                        Your request has been sent successfully! I will contact you shortly.
                      </motion.div>
                    )}
                  </AnimatePresence>

                </form>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Info & Stylized Canvas Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal variant="slideLeft" delay={0.1}>
              
              {/* Quick Contact Card */}
              <GlassCard className="p-8 text-left mb-6" tiltEnabled={true}>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <a
                    href="mailto:ngksriram23111@gmail.com"
                    className="flex items-center gap-4 group text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-300 interactive-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">Email Address</div>
                      <div className="text-sm font-mono font-medium text-slate-800 dark:text-slate-200">ngksriram23111@gmail.com</div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+919487462175"
                    className="flex items-center gap-4 group text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-300 interactive-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-colors">
                      <Phone size={18} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">Phone / WhatsApp</div>
                      <div className="text-sm font-mono font-medium text-slate-800 dark:text-slate-200">+91-9487462175</div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">Location</div>
                      <div className="text-sm font-sans font-medium text-slate-800 dark:text-slate-200">Chennai, Tamil Nadu, India</div>
                    </div>
                  </div>
                </div>

                {/* Social Icons Strip */}
                {false && (<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-200/60">
                  {[
                    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
                    { icon: <GitHubIcon />, href: '#', label: 'GitHub' },
                    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
                    { icon: <WhatsAppIcon />, href: '#', label: 'WhatsApp' }
                  ].map((soc, idx) => (
                    <a
                      key={idx}
                      href={soc.href}
                      onClick={(e) => { e.preventDefault(); alert(`Redirecting to ${soc.label}...`); }}
                      className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 interactive-hover"
                      aria-label={soc.label}
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>)}
              </GlassCard>

              {/* Stylized Google Map Mockup (Canvas Grid Map) */}
              <GlassCard className="p-4 h-64 relative overflow-hidden group" tiltEnabled={true} glowEnabled={true}>
                {/* Dots background resembling world map */}
                <div className="absolute inset-0 bg-bg-dark opacity-90" />
                <div className="absolute inset-0 bg-grid-overlay opacity-30" />
                
                {/* Target Locator Ring */}
                <div className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                  {/* Outer pulsating circle */}
                  <span className="absolute w-24 h-24 rounded-full border border-primary/40 animate-ping opacity-30" />
                  <span className="absolute w-12 h-12 rounded-full bg-primary/10 border border-primary/60 animate-pulse" />
                  {/* Location pin */}
                  <div className="w-4 h-4 rounded-full bg-secondary border-2 border-bg-dark z-10 shadow-lg shadow-secondary/50" />
                </div>

                {/* Tooltip Overlay */}
                <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-lg border border-slate-200 bg-white/90 backdrop-blur-md text-[10px] font-mono text-slate-600">
                  <div className="font-bold text-primary flex items-center gap-1">
                    <MapPin size={8} />
                    Chennai, IN
                  </div>
                  <div>Lat: 13.0827° N, Lon: 80.2707° E</div>
                  <div className="text-slate-400">GMT +5:30 (India Standard Time)</div>
                </div>
              </GlassCard>

            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
