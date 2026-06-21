import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Python Full Stack Intern",
      company: "EduSkills Academy",
      duration: "March 2026 – May 2026",
      responsibilities: [
        "Developed full stack web applications using Django and MySQL database layers.",
        "Built and optimized secure RESTful backend APIs for data retrieval and user actions.",
        "Utilized Git and GitHub workflows for collaborative code branching, staging, and deployment.",
        "Designed and implemented responsive, high-fidelity UI layouts using custom CSS and JS structures.",
        "Debugged and resolved performance bottlenecks in relational queries and API integrations."
      ]
    }
  ];

  return (
    <section id="experience" style={{ borderBottom: '1px solid var(--border-color)', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Professional Journey</span>
          <h2 className="section-title title-glow">Experience</h2>
        </div>

        <div className="timeline-container" style={timelineContainerStyle}>
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx} style={timelineItemStyle}>
              {/* Vertical timeline node indicator */}
              <div className="timeline-dot" style={timelineDotStyle}>
                <Briefcase size={16} />
              </div>

              {/* Glassmorphic Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="timeline-card glass-panel"
                style={cardStyle}
              >
                <div className="timeline-header" style={cardHeaderStyle}>
                  <div>
                    <h3 className="timeline-title" style={roleStyle}>{exp.role}</h3>
                    <span className="timeline-subtitle" style={companyStyle}>{exp.company}</span>
                  </div>
                  <span className="timeline-date" style={dateStyle}>
                    <Calendar size={12} style={{ marginRight: '6px' }} />
                    {exp.duration}
                  </span>
                </div>
                
                <div style={contentStyle}>
                  <h4 style={respHeadingStyle}>Responsibilities & Contributions:</h4>
                  <ul style={listStyle}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} style={listItemStyle}>
                        <CheckCircle size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Styles
const timelineContainerStyle: React.CSSProperties = {
  position: 'relative',
  maxWidth: '850px',
  margin: '0 auto',
  paddingLeft: '32px',
};

const timelineItemStyle: React.CSSProperties = {
  position: 'relative',
  marginBottom: '20px',
};

const timelineDotStyle: React.CSSProperties = {
  position: 'absolute',
  left: '-32px',
  top: '20px',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: 'var(--bg-deep)',
  border: '2px solid rgb(var(--accent))',
  boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgb(var(--accent))',
  zIndex: 2,
};

const cardStyle: React.CSSProperties = {
  padding: '30px',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
};

const cardHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '12px',
  borderBottom: '1px solid var(--border-color)',
  paddingBottom: '16px',
  marginBottom: '20px',
};

const roleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.4rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
};

const companyStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 700,
  color: '#6366f1',
};

const dateStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-secondary)',
  backgroundColor: 'var(--border-color)',
  padding: '6px 12px',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
};

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const respHeadingStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '1px',
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
  fontSize: '0.975rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
};
