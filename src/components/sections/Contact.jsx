import { useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../../data/personal';
import { SectionWrapper } from '../layout/SectionWrapper';

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
      }}
    >
      {/* Background ambient blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Large teal glow — centre */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,245,212,0.13) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }} />
        {/* Purple blob — top-right */}
        <div style={{
          position: 'absolute', top: '-5%', right: '-5%',
          width: '450px', height: '450px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(157,141,241,0.1) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        {/* Warm blob — bottom-left */}
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,107,0.07) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>

        {/* Section label */}
        <SectionWrapper delay={0}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: 'var(--accent-primary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            05 / Contact
          </p>
        </SectionWrapper>

        {/* Big statement */}
        <SectionWrapper delay={0.1}>
          <h2 style={{
            fontFamily: '"Clash Display", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Let&apos;s build something{' '}
            <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              great
            </span>{' '}
            together
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <p style={{
            fontFamily: '"Satoshi", sans-serif',
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}>
            I&apos;m open to new roles, collaborations, and interesting projects.
            Whether you have a job in mind or just want to chat about tech — my inbox is always open.
          </p>
        </SectionWrapper>

        {/* Email block */}
        <SectionWrapper delay={0.3}>
          <div style={{
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}>
            <a
              href={`mailto:${personal.email}`}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                color: 'var(--accent-primary)',
                textDecoration: 'none',
                wordBreak: 'break-all',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              {personal.email}
            </a>
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Copy email address"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.5rem 1rem', borderRadius: '9999px',
                border: '1px solid var(--border-accent)',
                background: copied ? 'rgba(0,245,212,0.15)' : 'transparent',
                color: 'var(--accent-primary)',
                fontFamily: '"Satoshi", sans-serif',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>
          </div>

          {/* Send email CTA */}
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(0,245,212,0.45)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2.25rem', borderRadius: '9999px',
              background: 'var(--accent-primary)', color: 'var(--bg-primary)',
              fontFamily: '"Satoshi", sans-serif', fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', marginBottom: '3rem',
            }}
          >
            Send me an email
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center' }}>
            {[
              { href: personal.social.github,  Icon: GitHubIcon,   label: 'GitHub'   },
              { href: personal.social.linkedin, Icon: LinkedInIcon, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1, boxShadow: '0 8px 30px rgba(0,245,212,0.25)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '58px', height: '58px', borderRadius: '50%',
                  background: 'var(--bg-tertiary)', border: '1px solid rgba(0,245,212,0.2)',
                  color: 'var(--text-secondary)',
                  transition: 'border-color 0.25s, background 0.25s, color 0.25s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.background = 'rgba(0,245,212,0.1)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,245,212,0.2)';
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
