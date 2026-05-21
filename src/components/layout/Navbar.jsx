import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -65% 0px', threshold: 0 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 201,
          transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
          background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        }}
      >
        <nav
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ textDecoration: 'none' }}
            aria-label="Back to top"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'var(--accent-primary)', color: 'var(--bg-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Clash Display", sans-serif', fontWeight: 700, fontSize: '1rem',
              }}
            >
              AR
            </motion.div>
          </a>

          {/* Desktop links */}
          <ul
            style={{ gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}
            className="nav-desktop"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      textDecoration: 'none',
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      fontFamily: '"Satoshi", sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 600 : 500,
                      position: 'relative',
                      padding: '0.25rem 0',
                      transition: 'color 0.2s, font-weight 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = isActive ? 'var(--accent-primary)' : 'var(--text-primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? 'var(--accent-primary)' : 'var(--text-secondary)'; }}
                  >
                    {link.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute', bottom: '-4px', left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px', height: '4px', borderRadius: '50%',
                        background: 'var(--accent-primary)',
                        display: 'block',
                      }} />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Resume CTA */}
          <div className="nav-desktop" style={{ gap: '1rem', alignItems: 'center' }}>
            <motion.a
              href="/aravind-portfolio-v2/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0,245,212,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: '1px solid var(--accent-primary)',
                color: 'var(--accent-primary)',
                fontFamily: '"Satoshi", sans-serif',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-glow)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--text-primary)' }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <>
                  <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 200,
              width: '75vw', maxWidth: '320px',
              background: 'rgba(18,18,26,0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderLeft: '1px solid var(--border-subtle)',
              display: 'flex', flexDirection: 'column',
              paddingTop: '96px', paddingLeft: '2rem', paddingRight: '2rem',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{
                        textDecoration: 'none',
                        color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                        fontFamily: '"Satoshi", sans-serif',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <a
              href="/aravind-portfolio-v2/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '2.5rem',
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: '1px solid var(--accent-primary)',
                color: 'var(--accent-primary)',
                fontFamily: '"Satoshi", sans-serif',
                fontWeight: 600,
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 199, background: 'rgba(0,0,0,0.5)' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
