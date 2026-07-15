import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Set initial position off screen
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    const xDotTo = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const yDotTo = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });

    const xRingTo = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const yRingTo = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Track links, buttons, inputs for hover states
    const addHoverState = () => setHovered(true);
    const removeHoverState = () => setHovered(false);

    const updateEventListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .interactive-hover');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', addHoverState);
        el.addEventListener('mouseleave', removeHoverState);
      });
    };

    updateEventListeners();

    // Create a MutationObserver to watch for dynamic DOM changes
    const observer = new MutationObserver(updateEventListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .interactive-hover');
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverState);
        el.removeEventListener('mouseleave', removeHoverState);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor ${hovered ? 'hovered' : ''}`}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-follower ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
      />
    </>
  );
};
export default CustomCursor;
