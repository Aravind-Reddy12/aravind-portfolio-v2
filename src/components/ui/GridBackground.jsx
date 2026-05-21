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
      }} />

      {/* ── Ambient orb 1 — teal, top-left ───────────────── */}
      <div style={{
        position: 'absolute',
        top: '-15vh', left: '-10vw',
        width: '65vw', height: '65vw', maxWidth: '800px', maxHeight: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,212,0.28) 0%, transparent 65%)',
        filter: 'blur(70px)',
        animation: 'orb-drift-a 20s ease-in-out infinite',
      }} />

      {/* ── Ambient orb 2 — purple, right ────────────────── */}
      <div style={{
        position: 'absolute',
        top: '20vh', right: '-15vw',
        width: '55vw', height: '55vw', maxWidth: '700px', maxHeight: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(157,141,241,0.24) 0%, transparent 65%)',
        filter: 'blur(80px)',
        animation: 'orb-drift-b 25s ease-in-out infinite',
      }} />

      {/* ── Ambient orb 3 — coral, bottom-left ──────────── */}
      <div style={{
        position: 'absolute',
        bottom: '5vh', left: '-8vw',
        width: '48vw', height: '48vw', maxWidth: '600px', maxHeight: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,107,0.22) 0%, transparent 65%)',
        filter: 'blur(75px)',
        animation: 'orb-drift-c 18s ease-in-out infinite',
      }} />

      {/* ── Ambient orb 4 — amber, bottom-right ─────────── */}
      <div style={{
        position: 'absolute',
        bottom: '-10vh', right: '5vw',
        width: '42vw', height: '42vw', maxWidth: '520px', maxHeight: '520px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,194,71,0.2) 0%, transparent 65%)',
        filter: 'blur(80px)',
        animation: 'orb-drift-d 22s ease-in-out 3s infinite',
      }} />

      {/* ── Ambient orb 5 — cyan, center ─────────────────── */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '35vw', height: '35vw', maxWidth: '450px', maxHeight: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.14) 0%, transparent 65%)',
        filter: 'blur(90px)',
        animation: 'orb-drift-e 30s ease-in-out 1s infinite',
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
