import { useEffect, useRef } from 'react';

export function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '2px', zIndex: 100,
        background: 'var(--border-subtle)',
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%', width: '0%',
          background: 'var(--gradient-accent)',
          boxShadow: '0 0 8px var(--accent-primary)',
          transition: 'width 0.08s linear',
        }}
      />
    </div>
  );
}
