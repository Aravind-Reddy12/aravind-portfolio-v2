import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../../data/personal';
import { TypewriterText } from '../ui/TypewriterText';
import { ParticleCanvas } from '../ui/ParticleCanvas';

export function Hero() {
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const blob3 = useRef(null);

  /* ── rAF parallax — zero React re-renders ─────────────── */
  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      if (blob1.current) blob1.current.style.transform = `translate(${dx * 0.025}px,${dy * 0.025}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${dx * -0.018}px,${dy * -0.018}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${dx * 0.012}px,${dy * 0.012}px)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative', minHeight: '100dvh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', padding: '0 1.5rem',
        textAlign: 'center',
      }}
    >
      {/* ── Gradient blobs ───────────────────────────────── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div ref={blob1} className="blob-1" style={{
          position: 'absolute', top: '10%', left: '15%',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,245,212,0.12) 0%, rgba(0,245,212,0.04) 50%, transparent 70%)',
          willChange: 'transform',
        }} />
        <div ref={blob2} className="blob-2" style={{
          position: 'absolute', bottom: '15%', right: '10%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(157,141,241,0.1) 0%, rgba(157,141,241,0.03) 50%, transparent 70%)',
          willChange: 'transform',
        }} />
        <div ref={blob3} className="blob-3" style={{
          position: 'absolute', top: '55%', left: '45%',
          width: '420px', height: '420px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,107,0.08) 0%, rgba(255,107,107,0.02) 50%, transparent 70%)',
          willChange: 'transform',
        }} />
      </div>

      {/* ── Particle canvas ───────────────────────────────── */}
      <ParticleCanvas />

      {/* ── Main content ─────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.78rem',
            color: 'var(--accent-primary)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}
        >
          <span style={{ color: 'var(--text-muted)' }}>{'<'}</span>
          {' '}Hello, I&apos;m{' '}
          <span style={{ color: 'var(--text-muted)' }}>{'/>'}</span>
        </motion.p>

        {/* ── Name — letter-by-letter reveal ───────────────── */}
        <h1
          style={{
            fontFamily: '"Clash Display", "Syne", "Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.2rem, 9vw, 6.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '0.6rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 0.02em',
          }}
        >
          {personal.name.split('').map((char, i) => (
            <span
              key={i}
              style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.08em' }}
            >
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.65,
                  delay: 0.25 + i * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: 'inline-block',
                  color: i < 7 ? 'var(--text-primary)' : 'var(--text-primary)',
                  /* 'Aravind' = chars 0-6, ' ' = 7, 'Reddy' = 8-12 */
                }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* ── Role — TypewriterText ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{ marginBottom: '1.5rem', minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span style={{
            fontFamily: '"Clash Display", "Syne", sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(1.1rem, 3.5vw, 2.2rem)',
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            <TypewriterText />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          style={{
            fontFamily: '"Satoshi", sans-serif',
            fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            margin: '0 auto 2rem',
            lineHeight: 1.75,
          }}
        >
          {personal.tagline}
        </motion.p>

        {/* ── Availability badge ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem', borderRadius: '9999px',
            background: 'rgba(0,245,212,0.08)',
            border: '1px solid rgba(0,245,212,0.25)',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.72rem',
            color: 'var(--accent-primary)',
            letterSpacing: '0.05em',
          }}>
            <span className="pulse-dot" style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--accent-primary)', display: 'inline-block',
            }} />
            Open to new roles &nbsp;·&nbsp; Hyderabad, India
          </span>
        </motion.div>

        {/* ── CTAs ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.45 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 36px rgba(0,245,212,0.55)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.85rem 2.2rem', borderRadius: '9999px',
              background: 'var(--accent-primary)', color: 'var(--bg-primary)',
              fontFamily: '"Satoshi", sans-serif', fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none',
            }}
          >
            View My Work
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          <motion.a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(0,245,212,0.2)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.85rem 2.2rem', borderRadius: '9999px',
              border: '1px solid var(--border-accent)', color: 'var(--accent-primary)',
              fontFamily: '"Satoshi", sans-serif', fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-glow)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </motion.a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          background: 'none', border: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          zIndex: 2, cursor: 'pointer',
        }}
      >
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>scroll</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <svg className="chevron-anim" width="18" height="10" viewBox="0 0 18 10" fill="none" style={{ animationDelay: '0s' }}>
            <path d="M1 1l8 8 8-8" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg className="chevron-anim" width="18" height="10" viewBox="0 0 18 10" fill="none" style={{ animationDelay: '0.15s', opacity: 0.4 }}>
            <path d="M1 1l8 8 8-8" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.button>
    </section>
  );
}
