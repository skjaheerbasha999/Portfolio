import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Flame, Trophy, Award, Zap, Code, Cpu } from 'lucide-react';

interface CPPlatform {
  name: string;
  rank: string;
  ratingLabel: string;
  ratingValue: string;
  color: string;
  url: string;
  focus: string;
}

// Simple IntersectionObserver-based Animated Counter
const AnimatedCounter: React.FC<{ target: number; duration?: number; suffix?: string; prefix?: string }> = ({ target, duration = 1500, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
};

export const CPProfiles: React.FC = () => {
  // Competitive programming platforms dataset
  const platforms: CPPlatform[] = [
    {
      name: "Codeforces",
      rank: "Pupil Candidate",
      ratingLabel: "Current Rating",
      ratingValue: "1011",
      color: "#3b82f6", // Blue
      url: "https://codeforces.com/profile/skjaheerbasha999",
      focus: "Algorithmic Contests"
    },
    {
      name: "LeetCode",
      rank: "400+ Solved",
      ratingLabel: "Global Tier",
      ratingValue: "Top 12%",
      color: "#f59e0b", // Orange
      url: "https://leetcode.com/u/skjaheerbasha999/",
      focus: "Interview Preparation"
    },
    {
      name: "CodeChef",
      rank: "2-Star Coder",
      ratingLabel: "Peak Rating",
      ratingValue: "1465",
      color: "#b45309", // Brown
      url: "https://www.codechef.com/users/jaheer_999",
      focus: "Speed Programming"
    },
    {
      name: "HackerRank",
      rank: "5-Star Problem Solver",
      ratingLabel: "Algorithms Track",
      ratingValue: "5 Stars",
      color: "#10b981", // Green
      url: "https://www.hackerrank.com/profile/skjaheerbasha999",
      focus: "Language Proficiency"
    }
  ];

  // 6 Stats for Dashboard
  const dashboardStats = [
    {
      label: "Problems Solved",
      target: 1400,
      suffix: "+",
      color: "#f59e0b",
      icon: <Code size={20} />
    },
    {
      label: "Codeforces Rating",
      target: 1011,
      suffix: "",
      color: "#3b82f6",
      icon: <Zap size={20} />
    },
    {
      label: "CodeChef Rating",
      target: 2,
      suffix: "★",
      color: "#b45309",
      icon: <Award size={20} />
    },
    {
      label: "LeetCode Problems",
      target: 400,
      suffix: "+",
      color: "#f59e0b",
      icon: <Trophy size={20} />
    },
    {
      label: "HackerRank Solver",
      target: 5,
      suffix: "★",
      color: "#10b981",
      icon: <Cpu size={20} />
    },
    {
      label: "Rated Contests",
      target: 30,
      suffix: "+",
      color: "#a855f7",
      icon: <Flame size={20} />
    }
  ];

  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  // Generate simulated activity for solving consistency
  const generateSimulatedGrid = () => {
    const grid = [];
    const baseDate = new Date(2026, 0, 1);
    const columnsCount = 36;
    for (let c = 0; c < columnsCount; c++) {
      const colDays = [];
      for (let r = 0; r < 7; r++) {
        const dayOffset = c * 7 + r;
        const currentDate = new Date(baseDate);
        currentDate.setDate(baseDate.getDate() + dayOffset);
        
        const rand = Math.random();
        let level = 0;
        let solveCount = 0;
        if (rand > 0.82) {
          level = 4;
          solveCount = Math.floor(Math.random() * 4) + 6; // 6-9
        } else if (rand > 0.48) {
          level = 3;
          solveCount = Math.floor(Math.random() * 3) + 3; // 3-5
        } else if (rand > 0.22) {
          level = 2;
          solveCount = Math.floor(Math.random() * 2) + 1; // 1-2
        } else if (rand > 0.08) {
          level = 1;
          solveCount = 1;
        }

        colDays.push({
          level,
          count: solveCount,
          dateString: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        });
      }
      grid.push(colDays);
    }
    return grid;
  };

  const activityGrid = generateSimulatedGrid();

  const getCellColor = (level: number) => {
    switch (level) {
      case 4: return '#10b981';
      case 3: return 'rgba(16, 185, 129, 0.75)';
      case 2: return 'rgba(16, 185, 129, 0.45)';
      case 1: return 'rgba(16, 185, 129, 0.2)';
      default: return 'rgba(255, 255, 255, 0.03)';
    }
  };

  return (
    <section id="cp" style={{ borderBottom: '1px solid var(--border-color)', padding: '100px 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Coding Milestones</span>
          <h2 className="section-title title-glow">Competitive Programming</h2>
        </div>

        {/* Premium Statistics Dashboard */}
        <div style={statsGridStyle} className="cp-stats-grid">
          {dashboardStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.05 }}
              className="glass-panel"
              style={{
                ...statCardStyle,
                borderLeft: `2px solid ${stat.color}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = stat.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div style={{ ...statIconWrapperStyle, color: stat.color, backgroundColor: `${stat.color}15` }}>
                {stat.icon}
              </div>
              <div>
                <div style={statNumStyle}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div style={statLabelStyle}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Links Grid */}
        <div style={profilesGridStyle} className="cp-profiles-grid">
          {platforms.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="glass-panel"
              style={{
                ...profileCardStyle,
                borderLeft: `3px solid ${p.color}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 30px -10px ${p.color}33, var(--shadow-glow)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              <div style={profileHeaderStyle}>
                <h3 style={{ ...profileTitleStyle, color: p.color }}>{p.name}</h3>
                <span style={profileBadgeStyle}>{p.focus}</span>
              </div>

              <div style={profileStatsBoxStyle}>
                <div>
                  <div style={profileStatLabelStyle}>Level Rank</div>
                  <div style={profileStatValueStyle}>{p.rank}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={profileStatLabelStyle}>{p.ratingLabel}</div>
                  <div style={{ ...profileStatValueStyle, fontFamily: 'var(--font-mono)', color: '#10b981' }}>{p.ratingValue}</div>
                </div>
              </div>

              <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary interactive" style={{ width: '100%', marginTop: 'auto', gap: '6px', fontSize: '0.85rem' }}>
                <span>Submissions Profile</span>
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contribution Consistency Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-panel"
          style={graphBoxStyle}
        >
          <div style={graphHeaderStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flame size={20} style={{ color: '#10b981' }} />
              <h3 style={graphTitleStyle}>LeetCode & GitHub Solving Consistency</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span>850+ problems solved in the past year</span>
              <span style={greenBadgeStyle}>Active Streak</span>
            </div>
          </div>

          <div style={calendarWrapperStyle}>
            <div style={daysLabelStyle}>
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>
            
            <div style={cellsContainerStyle}>
              {activityGrid.map((column, cIdx) => (
                <div key={cIdx} style={colStyle}>
                  {column.map((day, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        ...cellStyle,
                        backgroundColor: getCellColor(day.level)
                      }}
                      onMouseEnter={() => setHoveredDay({ count: day.count, date: day.dateString })}
                      onMouseLeave={() => setHoveredDay(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div style={graphFooterStyle}>
            <div style={tooltipBoxStyle}>
              {hoveredDay ? (
                <span style={{ color: '#10b981', fontWeight: 600 }}>
                  {hoveredDay.count === 0 ? 'No problems' : `${hoveredDay.count} problems`} solved on {hoveredDay.date}
                </span>
              ) : (
                <span style={{ color: '#64748b' }}>Hover over cells to view stats</span>
              )}
            </div>

            <div style={legendStyle}>
              <span>Less</span>
              <div style={{ ...legendCellBase, backgroundColor: 'rgba(255, 255, 255, 0.03)' }} />
              <div style={{ ...legendCellBase, backgroundColor: 'rgba(16, 185, 129, 0.2)' }} />
              <div style={{ ...legendCellBase, backgroundColor: 'rgba(16, 185, 129, 0.45)' }} />
              <div style={{ ...legendCellBase, backgroundColor: 'rgba(16, 185, 129, 0.75)' }} />
              <div style={{ ...legendCellBase, backgroundColor: '#10b981' }} />
              <span>More</span>
            </div>
          </div>
        </motion.div>

      </div>
      <style>{`
        @media (max-width: 992px) {
          .cp-stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .cp-profiles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .cp-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .cp-profiles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

// Styles
const statsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '16px',
  maxWidth: '1200px',
  margin: '0 auto 40px auto',
};

const statCardStyle: React.CSSProperties = {
  borderRadius: '12px',
  padding: '16px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  border: '1px solid var(--border-color)',
  transition: 'all 0.2s ease',
  backgroundColor: 'rgba(255, 255, 255, 0.01)',
};

const statIconWrapperStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const statNumStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-heading)',
  lineHeight: 1.2,
};

const statLabelStyle: React.CSSProperties = {
  fontSize: '0.725rem',
  color: 'var(--text-secondary)',
  fontWeight: 600,
};

const profilesGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',
  marginBottom: '40px',
};

const profileCardStyle: React.CSSProperties = {
  borderRadius: '16px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  height: '220px',
  border: '1px solid var(--border-color)',
  transition: 'var(--transition-fast)',
  backgroundColor: 'rgba(255, 255, 255, 0.01)',
};

const profileHeaderStyle: React.CSSProperties = {
  marginBottom: '16px',
};

const profileTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.3rem',
  fontWeight: 700,
  marginBottom: '2px',
};

const profileBadgeStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'var(--text-secondary)',
};

const profileStatsBoxStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
};

const profileStatLabelStyle: React.CSSProperties = {
  fontSize: '0.725rem',
  color: '#64748b',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '0.5px',
};

const profileStatValueStyle: React.CSSProperties = {
  fontSize: '0.975rem',
  color: 'var(--text-primary)',
  fontWeight: 700,
  marginTop: '2px',
};

const graphBoxStyle: React.CSSProperties = {
  borderRadius: '16px',
  padding: '30px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  border: '1px solid var(--border-color)',
};

const graphHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '12px',
};

const graphTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
};

const greenBadgeStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  backgroundColor: 'rgba(16, 185, 129, 0.15)',
  color: '#10b981',
  padding: '2px 8px',
  borderRadius: '12px',
  fontWeight: 700,
};

const calendarWrapperStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
  overflowX: 'auto',
  paddingBottom: '8px',
};

const daysLabelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontSize: '0.75rem',
  color: '#64748b',
  height: '76px',
  padding: '4px 0',
  flexShrink: 0,
};

const cellsContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '3px',
};

const colStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
};

const cellStyle: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '2px',
  transition: 'transform 0.1s ease',
  cursor: 'pointer',
};

const graphFooterStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '12px',
};

const tooltipBoxStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  minHeight: '20px',
};

const legendStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '0.75rem',
  color: '#64748b',
};

const legendCellBase: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '2px',
};
