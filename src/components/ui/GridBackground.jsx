export function GridBackground() {
  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>

      {/* ── Animated dot grid ─────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
        animation: 'grid-drift 25s linear infinite',
        willChange: 'background-position',
      }} />

      {/* ── Ambient orb 1 — teal, top-left ───────────────── */}
      {/* Softness baked into gradient stops — no filter:blur needed */}
      <div style={{
        position: 'absolute',
        top: '-15vh', left: '-10vw',
        width: '80vw', height: '80vw', maxWidth: '900px', maxHeight: '900px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,212,0.22) 0%, rgba(0,245,212,0.08) 40%, transparent 70%)',
        animation: 'orb-drift-a 20s ease-in-out infinite',
        willChange: 'transform',
      }} />

      {/* ── Ambient orb 2 — purple, right ────────────────── */}
      <div style={{
        position: 'absolute',
        top: '20vh', right: '-15vw',
        width: '65vw', height: '65vw', maxWidth: '800px', maxHeight: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(157,141,241,0.18) 0%, rgba(157,141,241,0.06) 45%, transparent 70%)',
        animation: 'orb-drift-b 25s ease-in-out infinite',
        willChange: 'transform',
      }} />

      {/* ── Ambient orb 3 — coral, bottom-left ──────────── */}
      <div style={{
        position: 'absolute',
        bottom: '5vh', left: '-8vw',
        width: '60vw', height: '60vw', maxWidth: '700px', maxHeight: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,107,0.16) 0%, rgba(255,107,107,0.05) 45%, transparent 70%)',
        animation: 'orb-drift-c 18s ease-in-out infinite',
        willChange: 'transform',
      }} />

      {/* ── Ambient orb 4 — amber, bottom-right ─────────── */}
      <div style={{
        position: 'absolute',
        bottom: '-10vh', right: '5vw',
        width: '55vw', height: '55vw', maxWidth: '620px', maxHeight: '620px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,194,71,0.15) 0%, rgba(255,194,71,0.05) 45%, transparent 70%)',
        animation: 'orb-drift-d 22s ease-in-out 3s infinite',
        willChange: 'transform',
      }} />

      {/* ── Ambient orb 5 — cyan, center ─────────────────── */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '45vw', height: '45vw', maxWidth: '550px', maxHeight: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.1) 0%, rgba(0,180,216,0.03) 50%, transparent 70%)',
        animation: 'orb-drift-e 30s ease-in-out 1s infinite',
        willChange: 'transform',
      }} />

      {/* ── Noise overlay ────────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0,
        opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }} />
    </div>
  );
}
