import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleUp';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'slideUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const getVariants = () => {
    switch (variant) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        };
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        };
      case 'scaleUp':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
