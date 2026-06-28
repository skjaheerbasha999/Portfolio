import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Award, Zap, Star, Code, Globe, Briefcase } from 'lucide-react';

export const Resume: React.FC = () => {
  const highlights = [
    { text: "1400+ Problems Solved", icon: <Award size={18} />, color: '#10b981' },
    { text: "Codeforces Rating 1036", icon: <Zap size={18} />, color: '#3b82f6' },
    { text: "CodeChef 2 Star", icon: <Star size={18} />, color: '#f59e0b' },
    { text: "400+ LeetCode Problems", icon: <Code size={18} />, color: '#ec4899' },
    { text: "Full Stack Developer", icon: <Globe size={18} />, color: '#6366f1' },
    { text: "Python Full Stack Intern", icon: <Briefcase size={18} />, color: '#a855f7' }
  ];

  return (
    <section id="resume" style={{ borderBottom: '1px solid var(--border-color)', padding: '80px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Professional Profile</span>
          <h2 className="section-title title-glow">My Resume</h2>
        </div>

        <div style={gridStyle} className="resume-grid">
          {/* Left Side: Summary and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            style={metaStyle}
          >
            <h3 style={metaTitleStyle}>Resume Showcase</h3>
            <span style={roleSubtitleStyle}>Software Developer & Competitive Programmer</span>
            
            <p style={metaDescStyle}>
              Analytical and detail-oriented Computer Science Engineering student with strong problem-solving skills and experience building modern full-stack web applications. Expert in data structures and algorithms, with extensive contest participation.
            </p>

            {/* Highlights Grid */}
            <div style={highlightsGridStyle} className="highlights-grid">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  style={highlightCardStyle}
                  className="glass-panel highlight-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 4px 15px -4px ${item.color}30, var(--shadow-neon)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                  }}
                >
                  <div style={{ color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <span style={highlightTextStyle}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={ctaGroupStyle}>
              <a 
                href="https://drive.google.com/file/d/1lQj8Mo4RhRu1MeWSwKQSD4j0QcePg2Of/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary interactive"
                style={{ ...btnStyle, textDecoration: 'none', gap: '8px' }}
              >
                <Eye size={18} />
                <span>View Resume</span>
              </a>
              
              <a 
                href="https://drive.google.com/uc?export=download&id=1lQj8Mo4RhRu1MeWSwKQSD4j0QcePg2Of" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary interactive"
                style={{ ...btnStyle, textDecoration: 'none', gap: '8px', border: '1px solid var(--border-color)' }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Stylish Floating Resume Card */}
          <motion.a
            href="https://drive.google.com/file/d/1lQj8Mo4RhRu1MeWSwKQSD4j0QcePg2Of/view"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.15 }}
            style={previewWrapperStyle}
            className="resume-preview-wrapper"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotate: -2,
                boxShadow: '0 30px 60px rgba(99, 102, 241, 0.25), var(--shadow-glow)'
              }}
              className="glass-panel resume-thumbnail-card"
              style={thumbnailCardStyle}
            >
              {/* Thumbnail Header */}
              <div style={thumbHeaderStyle}>
                <div style={{ width: '60%', height: '14px', background: 'linear-gradient(90deg, #6366f1, #a855f7)', borderRadius: '4px', marginBottom: '8px' }} />
                <div style={{ width: '40%', height: '8px', backgroundColor: 'var(--text-muted)', borderRadius: '3px', opacity: 0.5 }} />
              </div>
              
              {/* Thumbnail Sections (Simulated Text Lines) */}
              <div style={thumbSectionStyle}>
                <div style={{ width: '30%', height: '10px', backgroundColor: '#6366f1', borderRadius: '3px', marginBottom: '8px' }} />
                <div style={thumbLineLongStyle} />
                <div style={thumbLineMedStyle} />
              </div>

              <div style={thumbSectionStyle}>
                <div style={{ width: '35%', height: '10px', backgroundColor: '#a855f7', borderRadius: '3px', marginBottom: '8px' }} />
                <div style={thumbLineLongStyle} />
                <div style={thumbLineShortStyle} />
              </div>

              <div style={thumbSectionStyle}>
                <div style={{ width: '25%', height: '10px', backgroundColor: '#10b981', borderRadius: '3px', marginBottom: '8px' }} />
                <div style={thumbLineMedStyle} />
                <div style={thumbLineLongStyle} />
              </div>

              {/* Floating Glowing Badge overlay */}
              <div style={floatingBadgeStyle} className="floating-badge-anim">
                <FileText size={18} style={{ color: '#fff' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>CLICK TO PREVIEW</span>
              </div>
            </motion.div>
          </motion.a>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .resume-preview-wrapper {
            max-width: 100% !important;
          }
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-8px) rotate(2deg); }
        }
        .floating-badge-anim {
          animation: floatBadge 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Styles
const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.2fr 0.8fr',
  gap: '60px',
  maxWidth: '1200px',
  margin: '0 auto',
  alignItems: 'center',
};

const metaStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const metaTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '2.5rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginBottom: '4px',
};

const roleSubtitleStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#6366f1',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '20px',
};

const metaDescStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
  marginBottom: '24px',
};

const highlightsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '12px',
  width: '100%',
  marginBottom: '32px',
};

const highlightCardStyle: React.CSSProperties = {
  borderRadius: '12px',
  padding: '14px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  border: '1px solid var(--border-color)',
  backgroundColor: 'rgba(255, 255, 255, 0.01)',
  transition: 'var(--transition-fast)',
};

const highlightTextStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
};

const ctaGroupStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
  width: '100%',
  flexWrap: 'wrap',
};

const btnStyle: React.CSSProperties = {
  padding: '12px 24px',
  fontSize: '0.95rem',
  borderRadius: '8px',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const previewWrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  textDecoration: 'none',
};

const thumbnailCardStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '340px',
  aspectRatio: '1 / 1.414',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  padding: '36px 28px',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
  backdropFilter: 'blur(16px)',
  cursor: 'pointer',
  overflow: 'hidden',
};

const thumbHeaderStyle: React.CSSProperties = {
  borderBottom: '1px solid var(--border-color)',
  paddingBottom: '16px',
  marginBottom: '8px',
};

const thumbSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const thumbLineLongStyle: React.CSSProperties = {
  width: '100%',
  height: '6px',
  backgroundColor: 'var(--text-muted)',
  borderRadius: '2px',
  opacity: 0.15,
};

const thumbLineMedStyle: React.CSSProperties = {
  width: '80%',
  height: '6px',
  backgroundColor: 'var(--text-muted)',
  borderRadius: '2px',
  opacity: 0.15,
};

const thumbLineShortStyle: React.CSSProperties = {
  width: '55%',
  height: '6px',
  backgroundColor: 'var(--text-muted)',
  borderRadius: '2px',
  opacity: 0.15,
};

const floatingBadgeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '12px 24px',
  borderRadius: '30px',
  backgroundColor: 'rgba(99, 102, 241, 0.95)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.5), 0 0 15px rgba(99, 102, 241, 0.3)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#ffffff',
  zIndex: 10,
  backdropFilter: 'blur(8px)',
  pointerEvents: 'none',
};
