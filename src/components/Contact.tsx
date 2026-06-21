import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  onShowToast: (msg: string, type: 'success' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      onShowToast("Please fill in all required fields.", "error");
      return;
    }

    setIsSubmitting(true);

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast("Message sent successfully! Thank you.", "success");
      
      // Trigger canvas-confetti blast
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#6366f1', '#a855f7', '#10b981', '#f43f5e']
      });

      // Reset fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1800);
  };

  return (
    <section id="contact" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Let's build something together</span>
          <h2 className="section-title title-glow">Get In Touch</h2>
        </div>

        <div style={gridContainerStyle} className="contact-grid">
          
          {/* Left Column: Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={channelsColumnStyle}
          >
            <h3 style={columnTitleStyle}>Let's Connect</h3>
            <p style={columnDescStyle}>
              Whether you want to discuss search algorithms, review dynamic web configurations, check competitive contests, or explore SDE opportunities, feel free to send a message!
            </p>

            <div style={channelsListStyle}>
              {/* Email */}
              <div style={channelCardStyle} className="glass-panel">
                <div style={iconBoxStyle}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={channelHeaderStyle}>Email</h4>
                  <a href="mailto:skjaheerbasha999@gmail.com" className="interactive" style={channelLinkStyle}>
                    skjaheerbasha999@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={channelCardStyle} className="glass-panel">
                <div style={iconBoxStyle}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={channelHeaderStyle}>Phone</h4>
                  <a href="tel:+918639230773" className="interactive" style={channelLinkStyle}>
                    +91 8639230773
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={channelCardStyle} className="glass-panel">
                <div style={iconBoxStyle}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={channelHeaderStyle}>Location</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kadapa, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div style={socialsRowStyle}>
              <a 
                href="https://linkedin.com/in/skjaheerbasha999" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...socialLinkStyle, color: '#0077b5' }}
                className="glass-panel interactive social-hover-card"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/skjaheerbasha999" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...socialLinkStyle, color: '#f0f6fc' }}
                className="glass-panel interactive social-hover-card"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://codeforces.com/profile/skjaheerbasha999" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...socialLinkStyle, color: '#3b82f6' }}
                className="glass-panel interactive social-hover-card"
                aria-label="Codeforces Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <rect x="3" y="10" width="4" height="11" rx="0.5" />
                  <rect x="10" y="4" width="4" height="17" rx="0.5" />
                  <rect x="17" y="7" width="4" height="14" rx="0.5" />
                </svg>
              </a>
              <a 
                href="https://leetcode.com/u/skjaheerbasha999/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...socialLinkStyle, color: '#ffa116' }}
                className="glass-panel interactive social-hover-card"
                aria-label="LeetCode Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0l-8.02-7.77a1.144 1.144 0 010-1.637l8.02-7.769c.466-.451 1.211-.451 1.677 0l2.69 2.607c.466.452.466 1.184 0 1.637L10.36 12.023l5.742 5.56a1.144 1.144 0 010 1.637-.024.024 0 010-.29z" />
                </svg>
              </a>
              <a 
                href="https://www.hackerrank.com/profile/skjaheerbasha999" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ ...socialLinkStyle, color: '#10b981' }}
                className="glass-panel interactive social-hover-card"
                aria-label="HackerRank Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 4H5v16h4M15 4h4v16h-4M7 12h10" />
                </svg>
              </a>
              <a 
                href="mailto:skjaheerbasha999@gmail.com" 
                style={{ ...socialLinkStyle, color: '#ef4444' }}
                className="glass-panel interactive social-hover-card"
                aria-label="Email Message"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="glass-panel"
            style={formCardStyle}
          >
            <h3 style={{ ...columnTitleStyle, marginBottom: '24px' }}>Send A Message</h3>
            
            <form onSubmit={handleSubmit} style={formStyle}>
              {/* Name Field */}
              <div style={formFieldStyle}>
                <label htmlFor="form-name" style={labelStyle}>Your Name *</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  className="interactive"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div style={formFieldStyle}>
                <label htmlFor="form-email" style={labelStyle}>Your Email *</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  className="interactive"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              {/* Subject Field */}
              <div style={formFieldStyle}>
                <label htmlFor="form-subject" style={labelStyle}>Subject</label>
                <input
                  id="form-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={inputStyle}
                  className="interactive"
                  placeholder="Internship / Project Opportunity"
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div style={formFieldStyle}>
                <label htmlFor="form-message" style={labelStyle}>Message *</label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ ...inputStyle, resize: 'none' }}
                  className="interactive"
                  placeholder="Hi Jaheer, I'd like to discuss..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary interactive"
                style={{
                  ...submitBtnStyle,
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
      <style>{`
        /* Local Spinner styling */
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-right: 8px;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        .social-hover-card {
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .social-hover-card:hover {
          transform: translateY(-4px) scale(1.08) !important;
          background-color: rgba(255, 255, 255, 0.04) !important;
          border-color: currentColor !important;
          box-shadow: 0 8px 24px -8px currentColor !important;
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

// Styles
const gridContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.1fr',
  gap: '60px',
  marginTop: '32px',
};

const channelsColumnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const columnTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.65rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: '16px',
};

const columnDescStyle: React.CSSProperties = {
  fontSize: '1.025rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
  marginBottom: '32px',
};

const channelsListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '32px',
};

const channelCardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '16px 20px',
  borderRadius: '12px',
};

const iconBoxStyle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: '10px',
  backgroundColor: 'rgba(99, 102, 241, 0.1)',
  color: '#6366f1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const channelHeaderStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  color: '#64748b',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '0.5px',
  marginBottom: '2px',
};

const channelLinkStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: 'var(--text-primary)',
  fontWeight: 600,
};

const socialsRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
};

const socialLinkStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  transition: 'all 0.25s ease',
};

const formCardStyle: React.CSSProperties = {
  borderRadius: '16px',
  padding: '36px',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const formFieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
  fontWeight: 600,
};

const inputStyle: React.CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  padding: '12px 16px',
  color: 'var(--text-primary)',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'all 0.25s ease',
};

const submitBtnStyle: React.CSSProperties = {
  padding: '14px',
  fontSize: '1rem',
  borderRadius: '8px',
  fontWeight: 700,
  marginTop: '10px',
  width: '100%',
};
