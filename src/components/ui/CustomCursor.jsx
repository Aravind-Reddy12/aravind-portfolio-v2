import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const rafRef  = useRef(null);
  const hovered = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.style.cursor = 'none';

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const dot = dotRef.current;
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top  = `${e.clientY}px`;
      }
    };

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, label');
      if (interactive && !hovered.current) {
        hovered.current = true;
        dotRef.current?.classList.add('c-hover');
        ringRef.current?.classList.add('c-hover');
      } else if (!interactive && hovered.current) {
        hovered.current = false;
        dotRef.current?.classList.remove('c-hover');
        ringRef.current?.classList.remove('c-hover');
      }
    };

    const animate = () => {
      const r = ringRef.current;
      if (r) {
        ring.current.x += (pos.current.x - ring.current.x) * 0.11;
        ring.current.y += (pos.current.y - ring.current.y) * 0.11;
        r.style.left = `${ring.current.x}px`;
        r.style.top  = `${ring.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
