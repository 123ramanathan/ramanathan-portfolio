import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltEnabled?: boolean;
  glowEnabled?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  tiltEnabled = true,
  glowEnabled = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (glowEnabled) {
      setGlowStyle({
        opacity: 1,
        background: `radial-gradient(250px circle at ${x}px ${y}px, rgba(235, 94, 40, 0.12), rgba(37, 36, 34, 0.06) 50%, transparent 80%)`,
      });
    }

    if (tiltEnabled) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / (centerY / 8); // Rotate up to 8 degrees
      const rotateY = (x - centerX) / (centerX / 8);  // Rotate up to 8 degrees

      setTiltStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`,
        transition: 'transform 0.1s ease-out',
      });
    }
  };

  const handleMouseLeave = () => {
    setGlowStyle({ opacity: 0, transition: 'opacity 0.5s ease' });
    if (tiltEnabled) {
      setTiltStyle({
        transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: 'transform 0.5s ease-out',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltEnabled ? tiltStyle : undefined}
      className={`glass-panel animated-border-card transition-all duration-300 relative overflow-hidden group ${className}`}
    >
      {glowEnabled && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={glowStyle}
        />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
