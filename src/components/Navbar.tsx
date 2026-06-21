import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'CP Profile', href: '#cp' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar shrink & shadow state
      setIsScrolled(window.scrollY > 20);

      // 2. Scroll Progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 3. Active link tracker
      const currentScroll = window.scrollY + 150; // offset for nav height
      for (const item of navItems) {
        const target = document.querySelector(item.href);
        if (target) {
          const top = (target as HTMLElement).offsetTop;
          const height = (target as HTMLElement).offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(item.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <header style={{
        ...navbarStyle,
        height: isScrolled ? '70px' : '88px',
        backgroundColor: isScrolled ? 'var(--bg-navbar-scrolled)' : 'var(--bg-navbar)',
        borderBottom: isScrolled ? '1px solid var(--border-navbar-scrolled)' : '1px solid var(--border-navbar)',
        boxShadow: isScrolled ? 'var(--shadow-navbar-scrolled)' : 'var(--shadow-navbar)',
      }}>
        <div className="container" style={navContainerStyle}>
          {/* Logo */}
          <a href="#home" style={logoStyle}>
            <Terminal size={22} style={{ color: '#10b981', marginRight: '6px' }} />
            <span>&lt;</span>SJB<span style={{ color: '#6366f1' }}> /&gt;</span>
          </a>

          {/* Desktop Menu */}
          <nav style={desktopNavStyle}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                style={navLinkStyle}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={activeIndicatorStyle}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div style={actionsStyle}>
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="interactive"
              style={themeToggleStyle}
              aria-label="Toggle light/dark theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} style={{ color: '#f59e0b' }} />
              ) : (
                <Moon size={18} style={{ color: '#6366f1' }} />
              )}
            </button>

            <a href="#contact" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
              Let's Talk
            </a>
            
            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={mobileToggleStyle}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={mobileMenuOverlayStyle}
          >
            <div style={mobileMenuContainerStyle}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${activeSection === item.href ? 'active' : ''}`}
                  style={mobileNavLinkStyle}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn btn-primary" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ marginTop: '16px', width: '100%' }}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Inline styles for high customization and flexibility
const navbarStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 999,
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
};

const navContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  fontWeight: 800,
  fontFamily: 'var(--font-heading)',
  color: 'var(--text-primary)',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  letterSpacing: '-0.5px',
};

const desktopNavStyle: React.CSSProperties = {
  display: 'flex',
  gap: '32px',
  // will be hidden on mobile via CSS or handled dynamically (we will add responsive styles in App.css or index.css)
};

const navLinkStyle: React.CSSProperties = {
  position: 'relative',
  fontSize: '0.925rem',
  fontWeight: 600,
  textDecoration: 'none',
  padding: '8px 0',
  transition: 'color 0.2s ease',
};

const activeIndicatorStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '-4px',
  left: 0,
  width: '100%',
  height: '2px',
  backgroundColor: '#10b981',
  borderRadius: '2px',
};

const actionsStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const mobileToggleStyle: React.CSSProperties = {
  display: 'none', // Shown on mobile via media queries (in index.css we'll target this or handle it dynamically)
  background: 'none',
  border: 'none',
  color: 'var(--text-primary)',
  cursor: 'pointer',
  padding: '6px',
};

const themeToggleStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid var(--border-color)',
  borderRadius: '50%',
  width: '38px',
  height: '38px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  marginRight: '8px',
  color: 'var(--text-primary)',
};

const mobileMenuOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: '70px',
  left: 0,
  width: '100%',
  backgroundColor: 'var(--bg-dark)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  zIndex: 998,
  borderBottom: '1px solid var(--border-color)',
};

const mobileMenuContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  gap: '16px',
};

const mobileNavLinkStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  textDecoration: 'none',
  padding: '8px 0',
  borderBottom: '1px solid var(--border-color)',
};

// Add responsive stylesheet behavior inline or dynamically
// Let's add media query styles to src/index.css to handle desktop nav hide and mobile toggle show.
// Let's see if we should write them in index.css. Yes!
// In index.css, we can add:
// @media (max-width: 768px) {
//   header nav { display: none !important; }
//   header button { display: block !important; }
// }
