import React from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, X, Eye } from 'lucide-react';

import oracleCert from '../assets/oracle_cert.png';
import problemSolvingCert from '../assets/problem_solving_cert.png';
import pythonBasicCert from '../assets/python_basic_cert.png';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url: string;
  color: string;
  skills: string[];
  image: string;
}

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = React.useState<Certification | null>(null);

  const certificationsData: Certification[] = [
    {
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
      date: "February 03, 2026",
      credentialId: "3E64B3EEEC0E",
      url: "https://www.hackerrank.com/certificates/3E64B3EEEC0E",
      color: "#06b6d4", // HackerRank Cyan
      skills: ["Python Core", "Data Structures", "Control Flow", "Functions & OOP"],
      image: pythonBasicCert
    },
    {
      title: "Problem Solving (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "February 02, 2026",
      credentialId: "2664568C621F",
      url: "https://www.hackerrank.com/certificates/2664568C621F",
      color: "#10b981", // HackerRank Green
      skills: ["Data Structures", "Algorithms", "Complexity Analysis", "Advanced Problem Solving"],
      image: problemSolvingCert
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "October 28, 2025",
      credentialId: "103007445OCI25AICFA",
      url: "https://education.oracle.com",
      color: "#ea580c", // Oracle Orange
      skills: ["Machine Learning", "Generative AI Foundations", "OCI Infrastructure", "AI Governance"],
      image: oracleCert
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="certifications" style={{ borderBottom: '1px solid var(--border-color)', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Verified Credentials</span>
          <h2 className="section-title title-glow">Certifications</h2>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={gridStyle}
          className="certifications-grid"
        >
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cert.color;
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 30px -10px ${cert.color}25, var(--shadow-glow)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              {/* Badge Visual Header */}
              <div style={cardHeaderStyle}>
                <div style={{ ...badgeWrapperStyle, color: cert.color, backgroundColor: `${cert.color}12` }}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 style={issuerStyle}>{cert.issuer}</h4>
                  <span style={dateStyle}>{cert.date}</span>
                </div>
              </div>

              {/* Title & Info */}
              <div style={titleBoxStyle}>
                <h3 style={certTitleStyle}>{cert.title}</h3>
                {cert.credentialId && (
                  <div style={credentialIdStyle}>
                    <ShieldCheck size={14} style={{ color: '#10b981' }} />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Skills Badges */}
              <div style={skillsWrapperStyle}>
                {cert.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{ ...skillBadgeStyle, color: cert.color, backgroundColor: `${cert.color}0c` }}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={actionsContainerStyle}>
                <button 
                  onClick={() => setSelectedCert(cert)}
                  className="btn btn-primary interactive"
                  style={viewBtnStyle}
                >
                  <Eye size={14} />
                  <span>View Certificate</span>
                </button>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary interactive"
                  style={verifyBtnStyle}
                  title="Verify Online"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div 
            style={modalBackdropStyle} 
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={modalContentStyle}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel cert-modal-content"
            >
              {/* Modal Header */}
              <div style={modalHeaderStyle}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: selectedCert.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {selectedCert.issuer} Certification
                  </span>
                  <h3 style={modalTitleStyle}>{selectedCert.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  style={closeButtonStyle}
                  className="interactive close-btn"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div style={modalBodyStyle}>
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  style={modalImgStyle} 
                />
              </div>

              {/* Modal Footer */}
              <div style={modalFooterStyle}>
                {selectedCert.credentialId && (
                  <div style={modalCredentialIdStyle}>
                    <ShieldCheck size={16} style={{ color: '#10b981' }} />
                    <span>Credential ID: <strong>{selectedCert.credentialId}</strong></span>
                  </div>
                )}
                <a 
                  href={selectedCert.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary interactive"
                  style={modalVerifyBtnStyle}
                >
                  <span>Verify Online</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 992px) {
          .certifications-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .certifications-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .close-btn {
          transition: all 0.2s ease-in-out !important;
        }
        .close-btn:hover {
          background-color: rgba(255, 255, 255, 0.15) !important;
          color: var(--text-primary) !important;
          transform: rotate(90deg);
        }
        .cert-modal-content {
          background-color: rgba(10, 15, 30, 0.95) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
        }
        [data-theme="light"] .cert-modal-content {
          background-color: rgba(255, 255, 255, 0.98) !important;
          border: 1px solid rgba(15, 23, 42, 0.08) !important;
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15) !important;
        }
        [data-theme="light"] .close-btn:hover {
          background-color: rgba(15, 23, 42, 0.08) !important;
        }
      `}</style>
    </section>
  );
};

// Styles
const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
  gap: '24px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const cardStyle: React.CSSProperties = {
  borderRadius: '16px',
  padding: '28px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  border: '1px solid var(--border-color)',
  transition: 'var(--transition-fast)',
  backgroundColor: 'rgba(255, 255, 255, 0.01)',
};

const cardHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '20px',
};

const badgeWrapperStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const issuerStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
};

const dateStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
};

const titleBoxStyle: React.CSSProperties = {
  marginBottom: '20px',
  flexGrow: 1,
};

const certTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.1rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  lineHeight: 1.45,
  marginBottom: '8px',
};

const credentialIdStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.8rem',
  color: 'var(--text-secondary)',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  padding: '3px 10px',
  borderRadius: '12px',
  border: '1px solid var(--border-color)',
};

const skillsWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '24px',
};

const skillBadgeStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '4px 10px',
  borderRadius: '12px',
};

const actionsContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  marginTop: 'auto',
  width: '100%',
};

const viewBtnStyle: React.CSSProperties = {
  flex: 1,
  padding: '10px 0',
  fontSize: '0.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  cursor: 'pointer',
};

const verifyBtnStyle: React.CSSProperties = {
  padding: '10px 16px',
  fontSize: '0.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
};

const modalBackdropStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(3, 7, 18, 0.85)',
  backdropFilter: 'blur(12px)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};

const modalContentStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '900px',
  borderRadius: '20px',
  backgroundColor: 'rgba(10, 15, 30, 0.75)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const modalHeaderStyle: React.CSSProperties = {
  padding: '24px',
  borderBottom: '1px solid var(--border-color)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px',
};

const modalTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginTop: '4px',
  lineHeight: 1.4,
};

const closeButtonStyle: React.CSSProperties = {
  background: 'var(--btn-secondary-bg)',
  border: '1px solid var(--border-color)',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-secondary)',
  cursor: 'pointer',
};

const modalBodyStyle: React.CSSProperties = {
  padding: '20px',
  backgroundColor: 'var(--bg-deep)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
  maxHeight: '65vh',
};

const modalImgStyle: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '60vh',
  borderRadius: '8px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  objectFit: 'contain',
  border: '1px solid var(--border-color)',
};

const modalFooterStyle: React.CSSProperties = {
  padding: '20px 24px',
  borderTop: '1px solid var(--border-color)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
};

const modalCredentialIdStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '0.875rem',
  color: 'var(--text-secondary)',
};

const modalVerifyBtnStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '0.875rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
};

