import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Code, Trophy, Terminal, Settings, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={22} style={{ color: '#10b981' }} />,
      skills: ["C++ (OOP & STL)", "Python", "JavaScript (ES6+)", "SQL (Structured Queries)"]
    },
    {
      title: "Competitive Programming",
      icon: <Trophy size={22} style={{ color: '#f59e0b' }} />,
      skills: ["1400+ Problems Solved", "Codeforces Rating (1011)", "CodeChef 2 Star (Peak 1465)", "LeetCode (400+ Solved)"]
    },
    {
      title: "Web Development",
      icon: <Terminal size={22} style={{ color: '#6366f1' }} />,
      skills: ["HTML5 & CSS3 (Flexbox/Grid)", "React.js Frontend Library", "Node.js & Express.js Backend", "MongoDB & Data Modeling"]
    },
    {
      title: "Tools & Utilities",
      icon: <Settings size={22} style={{ color: '#a855f7' }} />,
      skills: ["Git & GitHub Workflows", "VS Code IDE", "Postman API Client", "Command Line & Scripts"]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="skills" style={{ borderBottom: '1px solid var(--border-color)', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">What I work with</span>
          <h2 className="section-title title-glow">Technical Skills</h2>
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={gridStyle}
          className="skills-grid"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--text-muted)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Card Title Header */}
              <div style={cardHeaderStyle}>
                <div style={iconBoxStyle}>
                  {cat.icon}
                </div>
                <h3 style={titleStyle}>{cat.title}</h3>
              </div>

              {/* Skills checklist */}
              <ul style={listStyle}>
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} style={listItemStyle}>
                    <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span style={skillTextStyle}>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <style>{`
        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 576px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

// Styles
const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const cardStyle: React.CSSProperties = {
  borderRadius: '16px',
  padding: '28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  border: '1px solid var(--border-color)',
  transition: 'var(--transition-fast)',
};

const cardHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const iconBoxStyle: React.CSSProperties = {
  width: '42px',
  height: '42px',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid var(--border-color)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const titleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.2rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const listItemStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  alignItems: 'flex-start',
};

const skillTextStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: 'var(--text-secondary)',
  fontWeight: 500,
  lineHeight: 1.4,
};
