import { motion } from 'framer-motion';
import { skillCategories, allSkills } from '../../data/skills';
import { SectionWrapper } from '../layout/SectionWrapper';

const categoryIcons = {
  frontend: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  backend: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2"/>
      <circle cx="6" cy="6" r="1" fill={color}/>
      <circle cx="6" cy="18" r="1" fill={color}/>
    </svg>
  ),
  database: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  tools: ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="section-pad-x0" style={{ position: 'relative', zIndex: 2, overflow: 'hidden' }}>
      {/* Ambient teal glow — bottom-left */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '0%', left: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,212,0.06) 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />
      {/* Faint purple — top-right */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(157,141,241,0.06) 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />

      {/* Marquee strip */}
      <div style={{ overflow: 'hidden', marginBottom: '4rem', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '0.75rem 0' }}>
        <div
          className="marquee-track"
          style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {marqueeItems.map((skill, i) => (
            <span key={i} style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
              {skill}
              <span style={{ margin: '0 1rem', color: 'var(--accent-primary)', opacity: 0.5 }}>·</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section label */}
          <SectionWrapper delay={0}>
            <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: 'var(--accent-primary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              02 / Skills
            </p>
            <h2 style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-primary)', marginBottom: '3rem', lineHeight: 1.1 }}>
              My{' '}
              <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                toolkit
              </span>
            </h2>
          </SectionWrapper>

          {/* Cards 2×2 grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.25rem',
            }}
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${cat.color}40` }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: `3px solid ${cat.color}`,
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  cursor: 'default',
                  transition: 'border-color 0.3s',
                }}
              >
                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    {categoryIcons[cat.id] && categoryIcons[cat.id]({ color: cat.color })}
                  </span>
                  <h3 style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}>
                    {cat.label}
                  </h3>
                </div>

                {/* Skill chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.72rem',
                        fontFamily: '"JetBrains Mono", monospace',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.15s',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = cat.color + '80';
                        e.currentTarget.style.color = cat.color;
                        e.currentTarget.style.background = cat.color + '15';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.background = 'var(--bg-primary)';
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
