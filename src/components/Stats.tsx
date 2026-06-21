import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart2, Star, Hash, BookOpen, Award } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1500; // 1.5 seconds animation
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutQuad easing
        const easeProgress = progress * (2 - progress);
        const currentCount = Math.floor(easeProgress * (end - start) + start);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  color: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, suffix, label, sublabel, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay }}
      className="glass-panel"
      style={{
        ...cardStyle,
        boxShadow: `0 10px 40px -10px rgba(0, 0, 0, 0.7)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.transform = 'translateY(-8px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ ...iconWrapperStyle, backgroundColor: `${color}15`, color: color }}>
        {icon}
      </div>
      <h3 style={valueStyle}>
        <AnimatedCounter value={value} suffix={suffix} />
      </h3>
      <h4 style={labelStyle}>{label}</h4>
      <p style={sublabelStyle}>{sublabel}</p>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const statsData = [
    {
      icon: <Hash size={24} />,
      value: 1400,
      suffix: "+",
      label: "Problems Solved",
      sublabel: "Across CP online judges",
      color: "#10b981", // Emerald
      delay: 0
    },
    {
      icon: <Star size={24} />,
      value: 2,
      suffix: " Star",
      label: "CodeChef Rating",
      sublabel: "Peak contest rating: 1465",
      color: "#a855f7", // Purple
      delay: 0.12
    },
    {
      icon: <BarChart2 size={24} />,
      value: 1011,
      suffix: "",
      label: "Codeforces Rating",
      sublabel: "Specialist Candidate in rated rounds",
      color: "#6366f1", // Indigo
      delay: 0.24
    },
    {
      icon: <BookOpen size={24} />,
      value: 400,
      suffix: "+",
      label: "LeetCode Solved",
      sublabel: "Mastered concepts in DSA and DP",
      color: "#f43f5e", // Rose
      delay: 0.36
    },
    {
      icon: <Award size={24} />,
      value: 5,
      suffix: "+",
      label: "Industry Credentials",
      sublabel: "AWS, IBM, Oracle, & HackerRank",
      color: "#0ea5e9", // Sky Blue
      delay: 0.48
    }
  ];

  return (
    <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
      <div className="container">
        <div style={gridStyle}>
          {statsData.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              color={stat.color}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '24px',
};

const cardStyle: React.CSSProperties = {
  borderRadius: '16px',
  padding: '36px 28px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
};

const iconWrapperStyle: React.CSSProperties = {
  width: '56px',
  height: '56px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  transition: 'transform 0.3s ease',
};

const valueStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '2.5rem',
  fontWeight: 800,
  letterSpacing: '-1px',
  color: 'var(--text-primary)',
  marginBottom: '8px',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.1rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: '6px',
};

const sublabelStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.4,
};
