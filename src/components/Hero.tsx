import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Code2, Download, Github, Linkedin } from 'lucide-react';
import avatarImg from '../assets/avatar.png';

export const Hero: React.FC = () => {
  // Typing animation phrases
  const phrases = ["Competitive Programmer", "Full Stack Developer", "Problem Solver", "CSE Student"];
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentFullText = phrases[currentPhraseIdx];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText === currentFullText) {
          // Pause at peak length
          setIsDeleting(true);
          setTypingSpeed(2000); 
        }
      } else {
        // Deleting characters
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        setTypingSpeed(60);

        if (typedText === "") {
          setIsDeleting(false);
          setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(500); 
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentPhraseIdx, typingSpeed]);

  // Framer motion animation configs
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  // Trigger simulated resume download
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // looking in public folder
    link.download = 'Jaheer_Basha_Shaik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" style={heroSectionStyle}>
      <div className="container hero-container">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={contentStyle}
          className="hero-content"
        >
          <motion.span variants={itemVariants} style={subtitleStyle}>
            <Code2 size={16} style={{ marginRight: '6px', color: '#10b981' }} />
            <span>HELLO WORLD, I'M</span>
          </motion.span>
          
          <motion.h1 variants={itemVariants} style={titleStyle}>
            <span className="gradient-text">SHAIK JAHEER BASHA</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} style={typedContainerStyle}>
            <span style={{ color: 'var(--text-primary)' }}>Competitive Programmer</span>
            <span style={{ color: '#6366f1', margin: '0 8px' }}>|</span>
            <span style={{ color: '#10b981' }}>Full Stack Developer</span>
          </motion.div>
          
          <motion.p variants={itemVariants} style={descStyle}>
            Solved 1400+ coding problems across Codeforces, LeetCode, CodeChef, and HackerRank. Passionate about designing modular full-stack solutions and optimizing database performance.
          </motion.p>

          {/* Premium Badges Row */}
          <motion.div variants={itemVariants} style={badgesRowStyle} className="hero-badges-row">
            <div style={{ ...badgeCardStyle, borderColor: 'rgba(180, 83, 9, 0.25)', color: '#b45309', backgroundColor: 'rgba(180, 83, 9, 0.08)' }}>
              <span>CodeChef 2⭐</span>
            </div>
            <div style={{ ...badgeCardStyle, borderColor: 'rgba(59, 130, 246, 0.25)', color: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.08)' }}>
              <span>Codeforces Rating 1036</span>
            </div>
            <div style={{ ...badgeCardStyle, borderColor: 'rgba(234, 88, 12, 0.25)', color: '#ea580c', backgroundColor: 'rgba(234, 88, 12, 0.08)' }}>
              <span>Oracle AI Foundations Certified</span>
            </div>
            <div style={{ ...badgeCardStyle, borderColor: 'rgba(245, 158, 11, 0.25)', color: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.08)' }}>
              <span>1400+ Problems Solved</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} style={ctasStyle}>
            <button 
              onClick={handleDownloadResume} 
              className="btn btn-primary interactive"
              style={{ gap: '8px' }}
            >
              <Download size={18} />
              <span>Download Resume</span>
            </button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary interactive">
              <Github size={18} style={{ color: '#10b981' }} />
              <span>GitHub</span>
            </a>
            <a href="#contact" className="btn btn-secondary interactive">
              <Linkedin size={18} style={{ color: '#0284c7' }} />
              <span>Contact Me</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image with Dual-Ring Glow & Floating Icons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.3 }}
          style={imageWrapperStyle}
          className="hero-image-wrapper"
        >
          <div style={avatarFrameStyle}>
            {/* Spinning Rings */}
            <div style={spinRing1Style} />
            <div style={spinRing2Style} />
            
            {/* Main Avatar Image */}
            <img 
              src={avatarImg} 
              alt="Jaheer Basha Shaik Portrait" 
              style={avatarImgStyle} 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
                e.currentTarget.style.borderColor = '#10b981';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
              }}
            />

            {/* Floating Tech Badges */}
            <div className="tech-badge-bubble float-badge-1" style={{ top: '-12%', left: '8%', boxShadow: '0 0 15px rgba(0, 89, 156, 0.4)' }} title="C++">
              <span style={{ color: '#00599C', fontWeight: 800, fontSize: '0.8rem' }}>C++</span>
            </div>
            <div className="tech-badge-bubble float-badge-2" style={{ top: '-15%', right: '12%', boxShadow: '0 0 15px rgba(55, 118, 171, 0.4)' }} title="Python">
              <span style={{ color: '#3776AB', fontWeight: 800, fontSize: '0.8rem' }}>Py</span>
            </div>
            <div className="tech-badge-bubble float-badge-3" style={{ top: '40%', right: '-15%', boxShadow: '0 0 15px rgba(247, 223, 30, 0.3)' }} title="JavaScript">
              <span style={{ color: '#F7DF1E', fontWeight: 800, fontSize: '0.8rem' }}>JS</span>
            </div>
            <div className="tech-badge-bubble float-badge-4" style={{ bottom: '-10%', right: '12%', boxShadow: '0 0 15px rgba(97, 218, 251, 0.4)' }} title="React">
              <span style={{ color: '#61DAFB', fontWeight: 800, fontSize: '1rem' }}>⚛️</span>
            </div>
            <div className="tech-badge-bubble float-badge-5" style={{ bottom: '-12%', left: '8%', boxShadow: '0 0 15px rgba(51, 153, 51, 0.4)' }} title="Node.js">
              <span style={{ color: '#339933', fontWeight: 800, fontSize: '0.75rem' }}>Node</span>
            </div>
            <div className="tech-badge-bubble float-badge-6" style={{ top: '40%', left: '-15%', boxShadow: '0 0 15px rgba(71, 162, 72, 0.4)' }} title="MongoDB">
              <span style={{ color: '#47A248', fontWeight: 800, fontSize: '0.75rem' }}>DB</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS Animation styles injected into head for the rotating frames */}
      <style>{`
        @keyframes orbitCw {
          100% { transform: rotate(360deg); }
        }
        @keyframes orbitCcw {
          100% { transform: rotate(-360deg); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

// Styles definitions
const heroSectionStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '120px',
  position: 'relative',
};

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const subtitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.875rem',
  color: '#10b981',
  letterSpacing: '2px',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
};

const titleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '3.75rem',
  fontWeight: 800,
  lineHeight: 1.15,
  marginBottom: '16px',
  letterSpacing: '-1.5px',
};

const typedContainerStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.85rem',
  fontWeight: 600,
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '6px',
};

const descStyle: React.CSSProperties = {
  fontSize: '1.05rem',
  color: 'var(--text-secondary)',
  maxWidth: '580px',
  marginBottom: '36px',
  lineHeight: 1.7,
};

const ctasStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
};

const badgesRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  marginBottom: '32px',
};

const badgeCardStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 700,
  padding: '6px 14px',
  borderRadius: '12px',
  border: '1px solid',
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'var(--font-mono)',
};

const imageWrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const avatarFrameStyle: React.CSSProperties = {
  position: 'relative',
  width: '320px',
  height: '320px',
  borderRadius: '50%',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const spinRing1Style: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: '50%',
  border: '2px dashed #6366f1', // Indigo
  animation: 'orbitCw 16s linear infinite',
  pointerEvents: 'none',
};

const spinRing2Style: React.CSSProperties = {
  position: 'absolute',
  top: '8px',
  left: '8px',
  right: '8px',
  bottom: '8px',
  borderRadius: '50%',
  border: '2px dashed #a855f7', // Purple
  animation: 'orbitCcw 12s linear infinite',
  pointerEvents: 'none',
  opacity: 0.7,
};

const avatarImgStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
  border: '4px solid rgba(99, 102, 241, 0.3)',
  backgroundColor: '#080c1a',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
  zIndex: 10,
  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease',
  cursor: 'pointer',
};
