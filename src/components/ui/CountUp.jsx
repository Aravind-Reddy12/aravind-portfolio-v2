import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function CountUp({ value, duration = 1400 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  const match  = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const t  = Math.min((now - start) / duration, 1);
      const e  = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setCount(Math.round(e * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
