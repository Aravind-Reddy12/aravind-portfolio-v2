import { useEffect, useRef } from 'react';

const REPEL = 100;

function makeParticle(w, h) {
  return {
    x:          Math.random() * w,
    y:          Math.random() * h,
    angle:      Math.random() * Math.PI * 2,
    angleSpeed: (Math.random() - 0.5) * 0.006,
    speed:      Math.random() * 0.22 + 0.08,
    pushX:      0,
    pushY:      0,
    r:          Math.random() * 1.1 + 0.5,
    alpha:      Math.random() * 0.18 + 0.06,
  };
}

export function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouse     = useRef({ x: -999, y: -999 });
  const pts       = useRef([]);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const count   = window.innerWidth < 768 ? 35 : 70;
      pts.current   = Array.from({ length: count }, () =>
        makeParticle(canvas.width, canvas.height)
      );
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.parentElement?.addEventListener('mousemove', onMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const p = pts.current;

      for (let i = 0; i < p.length; i++) {
        const a = p[i];

        /* autonomous drift — angle slowly curves over time */
        a.angle += a.angleSpeed;
        a.x += Math.cos(a.angle) * a.speed + a.pushX;
        a.y += Math.sin(a.angle) * a.speed + a.pushY;

        /* decay mouse push */
        a.pushX *= 0.92;
        a.pushY *= 0.92;

        /* mouse repulsion adds to push offset */
        const mdx = a.x - mouse.current.x;
        const mdy = a.y - mouse.current.y;
        const md  = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < REPEL && md > 0) {
          const f = ((REPEL - md) / REPEL) * 0.25;
          a.pushX += (mdx / md) * f;
          a.pushY += (mdy / md) * f;
        }

        /* wrap edges */
        if (a.x < 0)              a.x = canvas.width;
        if (a.x > canvas.width)   a.x = 0;
        if (a.y < 0)              a.y = canvas.height;
        if (a.y > canvas.height)  a.y = 0;

        /* subtle glow halo */
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00F5D4';
        ctx.globalAlpha = a.alpha * 0.15;
        ctx.fill();

        /* core dot */
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = '#00F5D4';
        ctx.globalAlpha = a.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current  = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      ro.disconnect();
      canvas.parentElement?.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
      }}
    />
  );
}
