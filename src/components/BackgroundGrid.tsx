import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMousePosition();
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  // Parallax effect on the background blobs based on mouse position
  useEffect(() => {
    const blob1 = blob1Ref.current;
    const blob2 = blob2Ref.current;
    if (!blob1 || !blob2) return;

    const xPos = (mouse.x - window.innerWidth / 2) * 0.05;
    const yPos = (mouse.y - window.innerHeight / 2) * 0.05;

    blob1.style.transform = `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`;
    blob2.style.transform = `translate(calc(-50% + ${-xPos}px), calc(-50% + ${-yPos}px))`;
  }, [mouse]);

  // Canvas particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = 45;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#2a9d8f' : '#e76f51';
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;

        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;

        // Interactive mouse push
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          const force = (120 - distance) / 120;
          this.x -= (dx / distance) * force * 1.5;
          this.y -= (dy / distance) * force * 1.5;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.globalAlpha = this.opacity;
        context.shadowBlur = 8;
        context.shadowColor = this.color;
        context.fill();
        context.globalAlpha = 1.0;
        context.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update(mouse.x, mouse.y);
        particle.draw(ctx);
      });

      // Draw subtle lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(42, 157, 143, ${0.08 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Grid Overlay */}
      <div className="bg-grid-overlay absolute inset-0" />

      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating Blob 1 */}
      <div
        ref={blob1Ref}
        className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full bg-[#2a9d8f]/5 blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Floating Blob 2 */}
      <div
        ref={blob2Ref}
        className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-[#e76f51]/4 blur-[130px] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default BackgroundGrid;
