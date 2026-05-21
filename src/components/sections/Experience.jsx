import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experience, certifications } from '../../data/experience';
import { SectionWrapper } from '../layout/SectionWrapper';

const itemVariants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const WORK_COLOR = '#00F5D4';
const EDU_COLOR  = '#FFC247';

function WorkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  );
}

function EduIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 10-10-7L2 10l10 7 10-7z"/>
      <path d="M6 12v5c0 1.1 2.686 2 6 2s6-.9 6-2v-5"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 80%', 'end 20%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="section-pad" style={{ position: 'relative', zIndex: 2, overflow: 'hidden' }}>
      {/* Ambient teal — top-right */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '5%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,212,0.06) 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />
      {/* Ambient yellow — bottom-left */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,194,71,0.05) 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Section label */}
        <SectionWrapper delay={0}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: 'var(--accent-primary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            04 / Experience
          </p>
          <h2 style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-primary)', marginBottom: '3.5rem', lineHeight: 1.1 }}>
            Where I&apos;ve{' '}
            <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              worked
            </span>
          </h2>
        </SectionWrapper>

        {/* Timeline */}
        <div ref={timelineRef} style={{ position: 'relative', paddingLeft: '2.5rem' }}>

          {/* Animated vertical line */}
          <div style={{ position: 'absolute', left: '0.65rem', top: 0, bottom: 0, width: '2px', background: 'var(--border-subtle)', transformOrigin: 'top' }}>
            <motion.div
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                background: 'var(--gradient-accent)',
                transformOrigin: 'top',
                scaleY,
                height: '100%',
                borderRadius: '2px',
              }}
            />
          </div>

          {/* Entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experience.map((entry, i) => (
              <motion.div
                key={entry.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{ position: 'relative' }}
              >
                {/* Dot on timeline */}
                {(() => {
                  const dotColor = entry.type === 'work' ? WORK_COLOR : EDU_COLOR;
                  return (
                    <div
                      style={{
                        position: 'absolute', left: '-2.5rem', top: '1.4rem',
                        width: '14px', height: '14px', borderRadius: '50%',
                        background: dotColor,
                        border: `2px solid var(--bg-primary)`,
                        boxShadow: `0 0 10px ${dotColor}70`,
                        zIndex: 1,
                      }}
                    />
                  );
                })()}

                {/* Card */}
                {(() => {
                  const color = entry.type === 'work' ? WORK_COLOR : EDU_COLOR;
                  return (
                    <div
                      style={{
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        background: 'var(--gradient-card)',
                        border: `1px solid ${color}28`,
                        borderLeft: `3px solid ${color}`,
                        transition: 'box-shadow 0.3s, border-color 0.3s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 40px ${color}14, 0 0 0 1px ${color}35`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      {/* ── Colored header band ─── */}
                      <div style={{
                        padding: '1.25rem 1.5rem',
                        background: `linear-gradient(135deg, ${color}18 0%, ${color}05 100%)`,
                        borderBottom: `1px solid ${color}20`,
                        position: 'relative',
                      }}>
                        {/* Type label + Present badge row */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                            fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem',
                            color, textTransform: 'uppercase', letterSpacing: '0.12em',
                          }}>
                            {entry.type === 'work' ? <WorkIcon /> : <EduIcon />}
                            {entry.type === 'work' ? 'Work Experience' : 'Education'}
                          </span>
                          {entry.isCurrent && (
                            <span className="pulse-dot" style={{
                              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                              padding: '0.22rem 0.75rem', borderRadius: '9999px',
                              background: `${color}18`, border: `1px solid ${color}50`,
                              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem',
                              color, letterSpacing: '0.06em',
                            }}>
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />
                              Present
                            </span>
                          )}
                        </div>

                        <h3 style={{
                          fontFamily: '"Clash Display", sans-serif', fontWeight: 700,
                          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                          color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '0.3rem',
                        }}>
                          {entry.title}
                        </h3>

                        <p style={{
                          fontFamily: '"Satoshi", sans-serif', fontSize: '0.9rem',
                          color, fontWeight: 600, margin: 0,
                        }}>
                          {entry.organization}
                        </p>
                      </div>

                      {/* ── Card body ─── */}
                      <div style={{ padding: '1.1rem 1.5rem 1.4rem' }}>
                        {/* Period + Location */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.85rem' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            <CalendarIcon /> {entry.period}
                          </span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontFamily: '"Satoshi", sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            <PinIcon /> {entry.location}
                          </span>
                        </div>

                        <p style={{
                          fontFamily: '"Satoshi", sans-serif', fontSize: '0.88rem',
                          color: 'var(--text-secondary)', lineHeight: 1.75,
                          marginBottom: entry.techUsed.length > 0 ? '1rem' : 0,
                        }}>
                          {entry.description}
                        </p>

                        {entry.techUsed.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {entry.techUsed.map((tech) => (
                              <span key={tech} style={{
                                padding: '0.25rem 0.65rem', borderRadius: '9999px',
                                background: `${color}0e`, border: `1px solid ${color}30`,
                                fontSize: '0.68rem', color,
                                fontFamily: '"JetBrains Mono", monospace',
                              }}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <SectionWrapper delay={0.1}>
          <div style={{ marginTop: '3.5rem' }}>
            <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Certifications
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {certifications.map((cert) => (
                <span
                  key={cert}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '9999px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    fontFamily: '"Satoshi", sans-serif',
                  }}
                >
                  🎓 {cert}
                </span>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
