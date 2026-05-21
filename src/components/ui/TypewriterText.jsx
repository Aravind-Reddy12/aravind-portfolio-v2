import { useState, useEffect } from 'react';

const ROLES = [
  'Full Stack Developer',
  'Vue.js Specialist',
];

export function TypewriterText() {
  const [index,   setIndex]   = useState(0);
  const [display, setDisplay] = useState('');
  const [phase,   setPhase]   = useState('typing');

  useEffect(() => {
    const target = ROLES[index];
    let t;

    if (phase === 'typing') {
      if (display.length < target.length) {
        t = setTimeout(() => setDisplay(target.slice(0, display.length + 1)), 65);
      } else {
        t = setTimeout(() => setPhase('pause'), 2200);
      }
    } else if (phase === 'pause') {
      t = setTimeout(() => setPhase('deleting'), 400);
    } else {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(display.slice(0, -1)), 38);
      } else {
        setIndex((i) => (i + 1) % ROLES.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(t);
  }, [display, phase, index]);

  return (
    <span>
      {display}
      <span className="typewriter-cursor" />
    </span>
  );
}
