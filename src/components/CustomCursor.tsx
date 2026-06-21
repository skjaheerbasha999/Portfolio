import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for trailing outer ring
  const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports touch (mobile/tablet)
    const checkTouch = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isAutomated = navigator.webdriver;
      setIsMobile(isTouch || isAutomated);
    };

    checkTouch();

    const mouseMoveHandler = (e: MouseEvent) => {
      if (isMobile) return;
      mouseX.set(e.clientX - 4);
      mouseY.set(e.clientY - 4);
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeaveHandler = () => {
      setIsVisible(false);
    };

    const mouseEnterHandler = () => {
      setIsVisible(true);
    };

    // Global listener for hover on interactive elements
    const updateHoverState = () => {
      const hoverTargets = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .interactive');
      hoverTargets.forEach((target) => {
        target.addEventListener('mouseenter', () => setIsHovered(true));
        target.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);

    // Initial query
    updateHoverState();

    // Re-verify on document changes (e.g. dynamic projects loading)
    const observer = new MutationObserver(updateHoverState);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
      observer.disconnect();
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#10b981', // Emerald/Accent
          pointerEvents: 'none',
          zIndex: 99999,
          x: mouseX,
          y: mouseY,
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: -12,
          left: -12,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px solid #6366f1', // Indigo
          pointerEvents: 'none',
          zIndex: 99998,
          x: trailX,
          y: trailY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0)',
          borderColor: isHovered ? '#10b981' : '#6366f1',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </>
  );
};
