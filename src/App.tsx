import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

// Components
import { AnimatedBackground } from './components/AnimatedBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CPProfiles } from './components/CPProfiles';
import { Certifications } from './components/Certifications';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error';
}

function App() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // default
  });

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    triggerToast(`Switched to ${next} theme!`, 'success');
  };

  // Sync theme attribute with state on mount & state change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toast trigger function passed to components
  const triggerToast = (message: string, type: 'success' | 'error') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <>
      {/* Premium UX helpers */}
      <CustomCursor />
      <AnimatedBackground />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main content grid */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Stats />
        <About />
        <Achievements />
        <Education />
        <Skills />
        <Projects />
        <CPProfiles />
        <Certifications />
        <Resume />
        <Contact onShowToast={triggerToast} />
      </main>

      {/* Recruiter Pinned Footer */}
      <footer style={footerStyle}>
        <div className="container" style={footerContainerStyle}>
          <div style={footerBrandStyle}>
            <span>&lt;</span>SJB<span style={{ color: '#10b981' }}> /&gt;</span>
          </div>
          <p style={copyStyle}>
            &copy; 2026 SHAIK JAHEER BASHA. All rights reserved. Crafted with React, TypeScript & Framer Motion.
          </p>
          <div style={badgeRowStyle}>
            <span style={footerBadgeStyle}>SDE Intern Candidate</span>
            <span style={{ ...footerBadgeStyle, color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.15)' }}>Google/Microsoft Worthy</span>
          </div>
        </div>
      </footer>

      {/* Toast Notification HUD */}
      <div style={toastContainerStyle}>
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                ...toastStyle,
                borderLeft: `4px solid ${toast.type === 'success' ? '#10b981' : '#f43f5e'}`,
              }}
            >
              {toast.type === 'success' ? (
                <CheckCircle size={18} style={{ color: '#10b981' }} />
              ) : (
                <AlertCircle size={18} style={{ color: '#f43f5e' }} />
              )}
              <span style={toastTextStyle}>{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

// Inline Styles
const footerStyle: React.CSSProperties = {
  backgroundColor: 'rgba(3, 7, 18, 0.9)',
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '40px 0',
  position: 'relative',
  zIndex: 10,
};

const footerContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  textAlign: 'center',
};

const footerBrandStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 800,
  fontFamily: 'var(--font-heading)',
  color: 'var(--text-primary)',
  letterSpacing: '-0.5px',
};

const copyStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: '#64748b',
};

const badgeRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const footerBadgeStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  backgroundColor: 'rgba(99, 102, 241, 0.15)',
  color: '#6366f1',
  padding: '3px 10px',
  borderRadius: '12px',
  fontWeight: 700,
};

const toastContainerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  zIndex: 100000,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  pointerEvents: 'none',
};

const toastStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '16px 20px',
  borderRadius: '10px',
  backgroundColor: 'rgba(15, 23, 42, 0.9)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  color: '#f8fafc',
  minWidth: '280px',
  maxWidth: '400px',
  pointerEvents: 'auto',
};

const toastTextStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: 600,
};

export default App;
