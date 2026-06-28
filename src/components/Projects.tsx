import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, CheckCircle } from 'lucide-react';
import medsyncImg from '../assets/medsync.png';
import s2enhanceImg from '../assets/s2enhance.png';

interface Project {
  id: string;
  title: string;
  category: 'web' | 'cpp';
  tags: string[];
  description: string;
  features: string[];
  github: string;
  live?: string;
  color: string;
  image: string;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'cpp'>('all');

  const projectsData: Project[] = [
    {
      id: 'proj-medsync',
      title: 'Med-Sync (Medicine Reminder System)',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
      description: 'A medicine reminder platform that helps users schedule, track, and manage daily medication routines.',
      features: [
        'Medicine Scheduling: Schedule dose timings and intake frequency.',
        'Reminder Notifications: Local push alerts reminding patient of dosage.',
        'Responsive Dashboard: Clear analytics showing daily intake progress.',
        'Team Project: Developed collaboratively for HackSprint 2025.'
      ],
      github: 'https://github.com/skjaheerbasha999/Imbatido.git',
      live: 'https://medysync.vercel.app/',
      color: '#10b981', // Emerald
      image: medsyncImg
    },
    {
      id: 'proj-s2enhance',
      title: 'S2 Enhance System',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'A student productivity platform with Education, Health, Time Management, and Dashboard modules.',
      features: [
        'Modular Panels: Educational, health, scheduling, and custom dashboard components.',
        'Key Features: Course recommendations, skill tracking, exam progress, and health metrics calculations.',
        'Secure Backend: REST APIs to manage users, tasks, progress, and dashboard records in MongoDB.',
        'Productivity Dashboard: Centralized view with progress graphs, streak tracking, and user notifications.'
      ],
      github: 'https://github.com/skjaheerbasha999/c-Enhance-System.git',
      color: '#6366f1', // Indigo
      image: s2enhanceImg
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Showcasing my works</span>
          <h2 className="section-title title-glow">My Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div style={filterContainerStyle}>
          <button 
            onClick={() => setFilter('all')}
            className="interactive"
            style={{
              ...filterButtonStyle,
              color: filter === 'all' ? '#fff' : 'var(--text-secondary)',
              backgroundColor: filter === 'all' ? '#6366f1' : 'var(--border-color)',
              borderColor: filter === 'all' ? '#6366f1' : 'var(--border-color)',
            }}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('web')}
            className="interactive"
            style={{
              ...filterButtonStyle,
              color: filter === 'web' ? '#fff' : 'var(--text-secondary)',
              backgroundColor: filter === 'web' ? '#10b981' : 'var(--border-color)',
              borderColor: filter === 'web' ? '#10b981' : 'var(--border-color)',
            }}
          >
            Web & Python
          </button>
          <button 
            onClick={() => setFilter('cpp')}
            className="interactive"
            style={{
              ...filterButtonStyle,
              color: filter === 'cpp' ? '#fff' : 'var(--text-secondary)',
              backgroundColor: filter === 'cpp' ? '#a855f7' : 'var(--border-color)',
              borderColor: filter === 'cpp' ? '#a855f7' : 'var(--border-color)',
            }}
          >
            C++ Development
          </button>
        </div>

        {/* Projects Showcase Grid */}
        <div style={projectsGridStyle} className="projects-list-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="glass-panel project-card-item"
                style={{
                  ...projectCardStyle,
                  borderColor: 'var(--border-color)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = project.color;
                  e.currentTarget.style.boxShadow = `0 15px 40px -15px ${project.color}40, 0 10px 40px -10px rgba(0, 0, 0, 0.7)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(0, 0, 0, 0.7)';
                }}
              >
                {/* Visual Image Banner */}
                <div style={imageContainerStyle}>
                  <div style={{ ...imageOverlayStyle, background: `linear-gradient(to bottom, rgba(3, 7, 18, 0.1) 0%, rgba(3, 7, 18, 0.8) 100%)` }} />
                  <img src={project.image} alt={project.title} className="project-card-image" style={imageStyle} />
                </div>

                {/* Title block inside header */}
                <div style={{ ...cardHeaderStyle, borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Layers size={18} style={{ color: project.color }} />
                    <h3 style={cardTitleStyle}>{project.title}</h3>
                  </div>
                </div>

                {/* Info Content */}
                <div style={cardBodyStyle}>
                  <p style={descStyle}>{project.description}</p>
                  
                  {/* Tech Badges */}
                  <div style={badgeContainerStyle}>
                    {project.tags.map(t => (
                      <span key={t} style={{ ...badgeStyle, color: project.color, backgroundColor: `${project.color}15` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullet features */}
                  <div style={featuresContainerStyle}>
                    <h4 style={featuresHeaderStyle}>Key Features:</h4>
                    <ul style={featuresListStyle}>
                      {project.features.map((feat, i) => (
                        <li key={i} style={featureItemStyle}>
                          <CheckCircle size={14} style={{ color: project.color, flexShrink: 0, marginTop: '3px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action links */}
                  <div style={linksContainerStyle}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary interactive"
                      style={{ flex: 1, padding: '10px', fontSize: '0.85rem', gap: '6px' }}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary interactive"
                        style={{ flex: 1, padding: '10px', fontSize: '0.85rem', background: project.color, gap: '6px' }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Coming Soon card placeholder */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="glass-panel"
              style={{
                ...projectCardStyle,
                border: '2px dashed var(--border-color)',
                backgroundColor: 'rgba(255, 255, 255, 0.01)',
                minHeight: '440px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '40px 24px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#a855f7';
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.boxShadow = `0 15px 40px -15px rgba(168, 85, 247, 0.25)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', color: '#a855f7', justifyContent: 'center' }}>
                  <Layers size={28} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Coming Soon
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '280px', lineHeight: 1.5 }}>
                    Engineering premium SDE applications. More projects in progress.
                  </p>
                </div>
                <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', padding: '4px 12px', borderRadius: '12px', fontWeight: 600 }}>
                  Future Release
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .projects-list-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .project-card-item:hover .project-card-image {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};

// Inline Styles
const filterContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '12px',
  marginBottom: '40px',
  flexWrap: 'wrap',
};

const filterButtonStyle: React.CSSProperties = {
  padding: '10px 20px',
  borderRadius: '30px',
  fontSize: '0.9rem',
  fontWeight: 600,
  cursor: 'pointer',
  border: '1px solid',
  transition: 'all 0.25s ease',
};

const projectsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
  gap: '28px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const projectCardStyle: React.CSSProperties = {
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.01)',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
};

const imageContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '220px',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#030712',
};

const imageOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease',
};

const cardHeaderStyle: React.CSSProperties = {
  padding: '20px 24px',
};

const cardTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
};

const cardBodyStyle: React.CSSProperties = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

const descStyle: React.CSSProperties = {
  fontSize: '0.925rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
  marginBottom: '20px',
};

const badgeContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '24px',
};

const badgeStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  padding: '4px 10px',
  borderRadius: '12px',
  fontWeight: 600,
};

const featuresContainerStyle: React.CSSProperties = {
  marginBottom: '24px',
  flexGrow: 1,
};

const featuresHeaderStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-primary)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '10px',
  fontWeight: 700,
};

const featuresListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  listStyle: 'none',
  padding: 0,
};

const featureItemStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--text-secondary)',
  display: 'flex',
  gap: '8px',
  alignItems: 'flex-start',
  lineHeight: 1.4,
};

const linksContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  marginTop: 'auto',
};
