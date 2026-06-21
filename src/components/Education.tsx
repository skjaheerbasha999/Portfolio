import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { GraduationCap, BookOpen, School, Calendar, MapPin, Award, Sparkles } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  details?: string;
  icon: React.ReactNode;
  color: string;
  bgGlow: string;
}

export const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      institution: "Aditya University",
      location: "Kakinada, Andhra Pradesh",
      duration: "2025 – Present",
      scoreLabel: "Current CGPA",
      scoreValue: "7.50 / 10.0",
      details: "Focusing on Core Computer Science, Advanced Algorithms, Full-Stack Paradigms, and System Design Architecture.",
      icon: <GraduationCap size={18} />,
      color: "#6366f1", // Indigo
      bgGlow: "rgba(99, 102, 241, 0.12)"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Vagdevi Junior College",
      location: "Porumamilla, Kadapa, Andhra Pradesh",
      duration: "2023 – 2025",
      scoreLabel: "Final Score",
      scoreValue: "958 / 1000 (95.8%)",
      details: "Core Subjects: Mathematics, Physics, Chemistry. Focused on engineering exam foundations and mathematical analysis.",
      icon: <BookOpen size={18} />,
      color: "#10b981", // Emerald
      bgGlow: "rgba(16, 185, 129, 0.12)"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Vengamamba High School",
      location: "Porumamilla, Kadapa, Andhra Pradesh",
      duration: "Completed: 2023",
      scoreLabel: "Final Score",
      scoreValue: "574 / 600 (95.7%)",
      details: "Graduated with top academic performance, demonstrating key early proficiencies in logical mathematics and science foundations.",
      icon: <School size={18} />,
      color: "#a855f7", // Purple
      bgGlow: "rgba(168, 85, 247, 0.12)"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 18 }
    }
  };

  return (
    <section id="education" style={{ borderBottom: '1px solid var(--border-color)', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Academic Journey</span>
          <h2 className="section-title title-glow">Education</h2>
        </div>

        {/* Timeline container */}
        <div style={timelineWrapperStyle}>
          {/* Vertical timeline vertical connector line */}
          <div style={timelineLineStyle} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={listStyle}
          >
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                style={timelineItemStyle}
                className="education-timeline-item"
              >
                {/* Visual Dot/Node */}
                <div style={{ ...timelineDotStyle, border: `2px solid ${item.color}`, color: item.color, boxShadow: `0 0 10px ${item.color}40` }}>
                  {item.icon}
                </div>

                {/* Card details */}
                <div 
                  className="glass-panel education-card"
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 12px 30px -10px ${item.color}20, var(--shadow-glow)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                  }}
                >
                  <div style={cardHeaderStyle}>
                    <div>
                      <h3 style={degreeStyle}>{item.degree}</h3>
                      <span style={{ ...institutionStyle, color: item.color }}>{item.institution}</span>
                    </div>
                    <span style={dateStyle}>
                      <Calendar size={13} style={{ marginRight: '6px' }} />
                      {item.duration}
                    </span>
                  </div>

                  <div style={detailsGridStyle}>
                    <div style={detailItemStyle}>
                      <MapPin size={15} style={{ color: '#ef4444' }} />
                      <span style={detailTextStyle}>{item.location}</span>
                    </div>
                    
                    <div style={detailItemStyle}>
                      <Award size={15} style={{ color: item.color }} />
                      <span style={detailTextStyle}>
                        {item.scoreLabel}: <strong style={{ color: 'var(--text-primary)' }}>{item.scoreValue}</strong>
                      </span>
                    </div>
                  </div>

                  {item.details && (
                    <p style={descriptionStyle}>
                      {item.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Note Panel: Academic Consistency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="glass-panel"
          style={notePanelStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ffa116';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
          }}
        >
          <div style={noteIconWrapperStyle}>
            <Sparkles size={20} style={{ color: '#ffa116' }} />
          </div>
          <div>
            <h4 style={noteTitleStyle}>Academic Distinction Note</h4>
            <p style={noteTextStyle}>
              "Maintained excellent academic performance throughout secondary and higher secondary education, scoring above 95% in both SSC and Intermediate."
            </p>
          </div>
        </motion.div>

      </div>
      <style>{`
        .education-timeline-item:hover .education-card {
          border-color: currentColor;
        }
        @media (max-width: 768px) {
          .education-timeline-item {
            padding-left: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

// Styles
const timelineWrapperStyle: React.CSSProperties = {
  position: 'relative',
  maxWidth: '900px',
  margin: '0 auto',
};

const timelineLineStyle: React.CSSProperties = {
  position: 'absolute',
  left: '20px',
  top: '20px',
  bottom: '20px',
  width: '2px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  zIndex: 1,
};

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  position: 'relative',
  zIndex: 2,
};

const timelineItemStyle: React.CSSProperties = {
  position: 'relative',
  paddingLeft: '50px',
};

const timelineDotStyle: React.CSSProperties = {
  position: 'absolute',
  left: '4px',
  top: '24px',
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  backgroundColor: '#080c1a',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
};

const cardStyle: React.CSSProperties = {
  padding: '24px 28px',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  backgroundColor: 'rgba(255, 255, 255, 0.01)',
};

const cardHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '12px',
  borderBottom: '1px solid var(--border-color)',
  paddingBottom: '14px',
  marginBottom: '16px',
};

const degreeStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.2rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
};

const institutionStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  fontWeight: 700,
  marginTop: '2px',
  display: 'block',
};

const dateStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-secondary)',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  padding: '4px 10px',
  borderRadius: '20px',
  display: 'inline-flex',
  alignItems: 'center',
  border: '1px solid var(--border-color)',
};

const detailsGridStyle: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  marginBottom: '12px',
};

const detailItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
};

const detailTextStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.55,
};

const notePanelStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  maxWidth: '900px',
  margin: '40px auto 0 auto',
  padding: '20px 24px',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  backgroundColor: 'rgba(255, 161, 22, 0.02)',
  transition: 'border-color 0.25s ease',
};

const noteIconWrapperStyle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 161, 22, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const noteTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.95rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: '4px',
};

const noteTextStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
  fontStyle: 'italic',
};
