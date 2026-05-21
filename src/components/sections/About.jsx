import { motion } from 'framer-motion';
import { personal } from '../../data/personal';
import { SectionWrapper } from '../layout/SectionWrapper';
import { CountUp } from '../ui/CountUp';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="section-pad" style={{ position: 'relative', zIndex: 2 }}>
      {/* Background number */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '2rem', top: '2rem',
        fontFamily: '"Clash Display", sans-serif', fontWeight: 700,
        fontSize: 'clamp(6rem, 15vw, 12rem)',
        color: 'rgba(255,255,255,0.018)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>01</div>

      {/* Ambient purple glow — top-right */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(157,141,241,0.07) 0%, transparent 65%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section label */}
        <SectionWrapper delay={0}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: 'var(--accent-primary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            01 /&nbsp; About
          </p>
          <h2 style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: 1.1 }}>
            A bit about{' '}
            <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              me
            </span>
          </h2>
        </SectionWrapper>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: '3.5rem', alignItems: 'start' }}>

          {/* Bio */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {personal.bio.map((para, i) => (
              <motion.p key={i} variants={itemVariants} style={{
                fontFamily: '"Satoshi", sans-serif', fontSize: '1.05rem', lineHeight: 1.8,
                color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                marginBottom: '1.25rem',
              }}>
                {para}
              </motion.p>
            ))}

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.4rem 0.9rem', borderRadius: '9999px',
                background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)',
                fontSize: '0.78rem', color: 'var(--text-secondary)',
                fontFamily: '"JetBrains Mono", monospace',
              }}>
                📍 {personal.location}
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 0.9rem', borderRadius: '9999px',
                background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.25)',
                fontSize: '0.78rem', color: 'var(--accent-primary)',
                fontFamily: '"JetBrains Mono", monospace',
              }}>
                <span className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'inline-block' }} />
                Open to opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Stats card */}
          <SectionWrapper direction="left" delay={0.2}>
            <div style={{ background: 'var(--gradient-card)', border: '1px solid var(--border-subtle)', borderRadius: '1.25rem', padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                {personal.stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: '1.4rem 1rem', background: 'var(--bg-primary)',
                      borderRadius: '0.75rem', border: '1px solid var(--border-subtle)',
                      textAlign: 'center', transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,212,0.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 700, fontSize: '2.2rem', color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '0.4rem' }}>
                      <CountUp value={stat.value} />
                    </div>
                    <div style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '1.5rem 0' }} />

              <div>
                <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: 'var(--accent-primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  What I work with
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {['Vue 3', 'React', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'Redis', 'SSE'].map((tech) => (
                    <span key={tech} style={{
                      padding: '0.28rem 0.7rem', borderRadius: '9999px',
                      background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)',
                      fontSize: '0.72rem', color: 'var(--text-secondary)',
                      fontFamily: '"JetBrains Mono", monospace',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
