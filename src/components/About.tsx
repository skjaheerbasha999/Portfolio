import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, Target, Flame, BookOpen, Check } from 'lucide-react';

export const About: React.FC = () => {
  const cardsData = [
    {
      icon: <GraduationCap size={20} style={{ color: '#f43f5e' }} />,
      title: "Current Education",
      content: "B.Tech Computer Science Engineering",
      subcontent: "Aditya University, Kakinada • CGPA: 7.5 / 10.0"
    },
    {
      icon: <BookOpen size={20} style={{ color: '#6366f1' }} />,
      title: "Current Focus",
      isList: true,
      listItems: [
        "Data Structures & Algorithms",
        "Full Stack Development",
        "Dynamic Programming",
        "System Design Basics"
      ]
    },
    {
      icon: <Target size={20} style={{ color: '#10b981' }} />,
      title: "Career Objective",
      content: "Aspiring Software Developer and Competitive Programmer with a strong foundation in Data Structures, Algorithms, and Web Development. I enjoy solving challenging coding problems and building practical web applications that improve user experience."
    },
    {
      icon: <Flame size={20} style={{ color: '#a855f7' }} />,
      title: "CP Journey",
      content: "Solved 1400+ challenges on online judges. Specialist candidate on Codeforces, 2 Star solver on CodeChef, and a consistent DP solver on LeetCode (400+ solved)."
    }
  ];

  return (
    <section id="about" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title title-glow">About Me</h2>
        </div>

        <div className="about-grid" style={gridContainerStyle}>
          {/* Left Column: Brief Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            style={bioWrapperStyle}
          >
            <h3 style={bioTitleStyle}>Passionate Problem Solver & Developer</h3>
            <p style={bioParaStyle}>
              I am a Computer Science Engineering student currently pursuing my Bachelor's degree. I specialize in backend development, data systems, and algorithmic analysis.
            </p>
            <p style={bioParaStyle}>
              By blending mathematical logic from competitive programming with modern development stacks, I write optimized, readable code designed for scale.
            </p>

            {/* Recruiter Details List */}
            <div style={detailsGridStyle}>
              <div style={detailCardStyle} className="glass-panel">
                <MapPin size={18} style={{ color: '#10b981' }} />
                <div>
                  <div style={detailLabelStyle}>Location</div>
                  <div style={detailValStyle}>Kadapa, AP, India</div>
                </div>
              </div>

              <div style={detailCardStyle} className="glass-panel">
                <Mail size={18} style={{ color: '#6366f1' }} />
                <div>
                  <div style={detailLabelStyle}>Email</div>
                  <a href="mailto:skjaheerbasha999@gmail.com" className="interactive" style={{ ...detailValStyle, textDecoration: 'none' }}>
                    skjaheerbasha999@gmail.com
                  </a>
                </div>
              </div>

              <div style={detailCardStyle} className="glass-panel">
                <Phone size={18} style={{ color: '#a855f7' }} />
                <div>
                  <div style={detailLabelStyle}>Mobile</div>
                  <a href="tel:+918639230773" className="interactive" style={{ ...detailValStyle, textDecoration: 'none' }}>
                    +91 8639230773
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Modern Glassmorphic Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
            style={cardsGridStyle}
            className="about-cards-grid"
          >
            {cardsData.map((card, idx) => (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{ 
                  padding: '24px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px',
                  gridColumn: card.title === "Career Objective" || card.title === "CP Journey" ? 'span 2' : 'span 1',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.icon}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                    {card.title}
                  </h4>
                </div>

                {card.isList ? (
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {card.listItems?.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <Check size={14} style={{ color: '#10b981', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {card.content}
                    </p>
                    {card.subcontent && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {card.subcontent}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Styles definitions
const gridContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.1fr',
  gap: '48px',
  alignItems: 'start',
};

const bioWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const bioTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.65rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: '24px',
};

const bioParaStyle: React.CSSProperties = {
  fontSize: '1.025rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
  marginBottom: '20px',
};

const detailsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '16px',
  marginTop: '20px',
};

const detailCardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '16px 20px',
  borderRadius: '12px',
};

const detailLabelStyle: React.CSSProperties = {
  fontSize: '0.775rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '1px',
};

const detailValStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--text-primary)',
  fontWeight: 600,
};

const cardsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
};
