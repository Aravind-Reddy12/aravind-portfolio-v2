import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const num = String(project.index + 1).padStart(2, '0');

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          exit={{    opacity: 0, scale: 0.88, y: 30  }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%', maxWidth: '680px',
            maxHeight: '88vh',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
            background: 'var(--bg-secondary)',
            border: `1px solid ${project.color}50`,
            boxShadow: `0 0 60px ${project.color}20, 0 24px 80px rgba(0,0,0,0.6)`,
          }}
        >
          {/* ── Colored header ───────────────────────────── */}
          <div
            className="modal-header-pad"
            style={{
              position: 'relative',
              background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}08 100%)`,
              borderBottom: `1px solid ${project.color}30`,
              flexShrink: 0,
            }}
          >
            {/* Big faint number */}
            <div aria-hidden="true" style={{
              position: 'absolute', right: '1.5rem', top: '-0.5rem',
              fontFamily: '"Clash Display", sans-serif', fontWeight: 700,
              fontSize: '6rem', lineHeight: 1,
              color: project.color, opacity: 0.08, userSelect: 'none',
              pointerEvents: 'none',
            }}>
              {num}
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                width: '32px', height: '32px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)', cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = project.color + '30'; e.currentTarget.style.color = project.color; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{
                padding: '0.2rem 0.65rem', borderRadius: '9999px',
                background: project.color + '22', border: `1px solid ${project.color}50`,
                fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
                color: project.color, letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                {project.type === 'professional' ? '⚡ Professional' : '🔨 Personal'}
              </span>
            </div>

            <h2 style={{
              fontFamily: '"Clash Display", sans-serif', fontWeight: 700,
              fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
              color: 'var(--text-primary)', lineHeight: 1.2,
              marginBottom: project.role ? '0.4rem' : 0,
            }}>
              {project.title}
            </h2>

            {project.role && (
              <p style={{
                fontFamily: '"Satoshi", sans-serif', fontSize: '0.85rem',
                color: project.color, fontWeight: 600,
              }}>
                {project.role}
              </p>
            )}
          </div>

          {/* ── Scrollable body ───────────────────────────── */}
          <div className="modal-body-pad" style={{ overflowY: 'auto', flex: 1 }}>

            <p style={{
              fontFamily: '"Satoshi", sans-serif', fontSize: '0.95rem',
              color: 'var(--text-secondary)', lineHeight: 1.8,
              marginBottom: '1.75rem',
            }}>
              {project.description}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: '1.75rem' }}>
              <p style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem',
                color: project.color, letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '0.75rem',
              }}>
                Key Highlights
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {project.highlights.map((h, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                    fontFamily: '"Satoshi", sans-serif', fontSize: '0.9rem',
                    color: 'var(--text-primary)', lineHeight: 1.5,
                  }}>
                    <span style={{ color: project.color, flexShrink: 0, marginTop: '0.15rem', fontWeight: 700 }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div style={{ marginBottom: '2rem' }}>
              <p style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem',
                color: project.color, letterSpacing: '0.12em',
                textTransform: 'uppercase', marginBottom: '0.75rem',
              }}>
                Tech Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {project.techStack.map((tech) => (
                  <span key={tech} style={{
                    padding: '0.3rem 0.75rem', borderRadius: '9999px',
                    background: project.color + '12',
                    border: `1px solid ${project.color}35`,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.72rem', color: project.color,
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.github || project.live) && (
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.6rem 1.25rem', borderRadius: '9999px',
                      background: project.color, color: '#0A0A0F',
                      fontFamily: '"Satoshi", sans-serif', fontWeight: 700,
                      fontSize: '0.85rem', textDecoration: 'none',
                      transition: 'opacity 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
                  >
                    <GitHubIcon /> View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.6rem 1.25rem', borderRadius: '9999px',
                      border: `1px solid ${project.color}60`, color: project.color,
                      fontFamily: '"Satoshi", sans-serif', fontWeight: 600,
                      fontSize: '0.85rem', textDecoration: 'none',
                      transition: 'background 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = project.color + '18'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none'; }}
                  >
                    <ExternalIcon /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
