import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Trophy, Award, Zap, FileCode, GraduationCap, TrendingUp } from 'lucide-react';

interface AchievementItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  metric: string;
  color: string;
  bgGlow: string;
}

export const Achievements: React.FC = () => {
  const achievementsList: AchievementItem[] = [
    {
      icon: <Trophy size={24} />,
      title: "Problem Solving Milestone",
      subtitle: "Across online judges including Codeforces, LeetCode, CodeChef, and HackerRank.",
      metric: "1400+ Solved",
      color: "#f59e0b", // Gold
      bgGlow: "rgba(245, 158, 11, 0.15)"
    },
    {
      icon: <Award size={24} />,
      title: "CodeChef Division",
      subtitle: "2-Star competitive programmer on CodeChef active contests.",
      metric: "2★ Rating (Max 1465)",
      color: "#b45309", // Bronze/Brown
      bgGlow: "rgba(180, 83, 9, 0.15)"
    },
    {
      icon: <Zap size={24} />,
      title: "Codeforces Tier",
      subtitle: "Active rating achievement in division rounds.",
      metric: "1011 Max Rating",
      color: "#3b82f6", // Blue
      bgGlow: "rgba(59, 130, 246, 0.15)"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Oracle OCI AI Associate",
      subtitle: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.",
      metric: "Oracle AI Foundations",
      color: "#ea580c", // Oracle Orange
      bgGlow: "rgba(234, 88, 12, 0.15)"
    },
    {
      icon: <FileCode size={24} />,
      title: "HackerRank Skill Test",
      subtitle: "Verified intermediate problem solving credentials.",
      metric: "Problem Solving Int.",
      color: "#10b981", // Green
      bgGlow: "rgba(16, 185, 129, 0.15)"
    },
    {
      icon: <FileCode size={24} />,
      title: "HackerRank Language",
      subtitle: "Verified Python core fundamentals test.",
      metric: "Python Basic",
      color: "#06b6d4", // Cyan
      bgGlow: "rgba(6, 182, 212, 0.15)"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Competitive Experience",
      subtitle: "Participated in global and college-level competitive algorithms events.",
      metric: "30+ Rated Contests",
      color: "#a855f7", // Purple
      bgGlow: "rgba(168, 85, 247, 0.15)"
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
    <section id="achievements" style={{ borderBottom: '1px solid var(--border-color)', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Key Milestones</span>
          <h2 className="section-title title-glow">Key Achievements</h2>
        </div>

        {/* Grid of Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={gridStyle}
          className="achievements-grid"
        >
          {achievementsList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel"
              style={{
                ...cardStyle,
                borderLeft: `3px solid ${item.color}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.boxShadow = `0 12px 30px -10px ${item.color}33, var(--shadow-glow)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              {/* Icon & Metric */}
              <div style={headerRowStyle}>
                <div style={{ ...iconWrapperStyle, color: item.color, backgroundColor: item.bgGlow }}>
                  {item.icon}
                </div>
                <div style={{ ...metricStyle, color: item.color }}>{item.metric}</div>
              </div>

              {/* Title & Info */}
              <div style={infoStyle}>
                <h3 style={itemTitleStyle}>{item.title}</h3>
                <p style={itemSubtitleStyle}>{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <style>{`
        @media (max-width: 992px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .achievements-grid {
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '24px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const cardStyle: React.CSSProperties = {
  borderRadius: '16px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  height: '100%',
  border: '1px solid var(--border-color)',
  transition: 'var(--transition-fast)',
  backgroundColor: 'rgba(255, 255, 255, 0.01)',
};

const headerRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const iconWrapperStyle: React.CSSProperties = {
  width: '46px',
  height: '46px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const metricStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 800,
  fontSize: '1rem',
  textAlign: 'right',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  padding: '4px 10px',
  borderRadius: '12px',
  border: '1px solid var(--border-color)',
};

const infoStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const itemTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.1rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
};

const itemSubtitleStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
};
