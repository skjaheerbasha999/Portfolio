import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div style={containerStyle}>
      {/* Blob 1 - Indigo/Blue */}
      <motion.div
        style={{
          ...blobBaseStyle,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
          width: '500px',
          height: '500px',
          top: '-10%',
          right: '5%',
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blob 2 - Purple/Pink */}
      <motion.div
        style={{
          ...blobBaseStyle,
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0) 70%)',
          width: '450px',
          height: '450px',
          bottom: '20%',
          left: '-5%',
        }}
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Blob 3 - Emerald/Green Accent */}
      <motion.div
        style={{
          ...blobBaseStyle,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0) 70%)',
          width: '350px',
          height: '350px',
          top: '40%',
          left: '30%',
        }}
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Grid Overlay for Tech Vibe */}
      <div style={gridOverlayStyle} />
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  overflow: 'hidden',
  backgroundColor: 'var(--bg-dark)',
  pointerEvents: 'none',
};

const blobBaseStyle: React.CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(80px)',
};

const gridOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)',
  opacity: 0.7,
};
