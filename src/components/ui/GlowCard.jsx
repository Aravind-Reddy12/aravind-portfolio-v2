import { useRef } from 'react';
import { cn } from '../../utils/cn';

export function GlowCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const animRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    /* ── 3D tilt ─────────────────────────────────────────── */
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) *  6;

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(() => {
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`;
    });

    /* ── Spotlight glow ──────────────────────────────────── */
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    if (animRef.current) cancelAnimationFrame(animRef.current);
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    card.style.borderColor = 'var(--border-subtle)';
    card.style.boxShadow   = 'none';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-accent)';
        e.currentTarget.style.boxShadow   = '0 0 40px rgba(0,245,212,0.1), 0 12px 40px rgba(0,0,0,0.5)';
      }}
      className={cn('relative rounded-2xl overflow-hidden', className)}
      style={{
        background:  'var(--gradient-card)',
        border:      '1px solid var(--border-subtle)',
        transition:  'transform 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.3s, box-shadow 0.3s',
        willChange:  'transform',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
