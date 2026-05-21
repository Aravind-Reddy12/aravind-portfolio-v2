import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ProjectModal } from '../ui/ProjectModal';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.5 } },
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Projects() {
  const [active, setActive] = useState(null);

  const open  = (project, index) => setActive({ ...project, index });
  const close = () => setActive(null);

  return (
    <section id="projects" className="section-pad" style={{ position: 'relative', zIndex: 2, overflow: 'hidden' }}>
      {/* Ambient warm glow — bottom-left */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,107,0.06) 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />
      {/* Background number */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '2rem', top: '2rem',
        fontFamily: '"Clash Display", sans-serif', fontWeight: 700,
        fontSize: 'clamp(6rem, 15vw, 12rem)',
        color: 'rgba(255,255,255,0.018)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>03</div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section label */}
        <SectionWrapper delay={0}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: 'var(--accent-primary)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            03 /&nbsp; Projects
          </p>
          <h2 style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-primary)', marginBottom: '3.5rem', lineHeight: 1.1 }}>
            Things I&apos;ve{' '}
            <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              built
            </span>
          </h2>
        </SectionWrapper>

        {/* 2-column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              variants={cardVariants}
              onClick={() => open(project, i)}
              style={{
                background: 'none', border: 'none', padding: 0,
                cursor: 'pointer', textAlign: 'left', width: '100%',
              }}
              aria-label={`View details for ${project.title}`}
            >
              <ProjectCard project={project} index={i} />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  );
}

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: `0 0 0 1px ${project.color}50, 0 20px 50px ${project.color}18, 0 8px 30px rgba(0,0,0,0.4)` }}
      transition={{ duration: 0.3 }}
      style={{
        borderRadius: '1.1rem',
        overflow: 'hidden',
        background: 'var(--gradient-card)',
        border: `1px solid ${project.color}30`,
        height: '100%',
        display: 'flex', flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
    >
      {/* ── Colored header band ─────────────────────────── */}
      <div style={{
        padding: '1.5rem 1.5rem 1.25rem',
        background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}08 100%)`,
        borderBottom: `1px solid ${project.color}25`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Faint background number */}
        <span aria-hidden="true" style={{
          position: 'absolute', right: '0.75rem', top: '-0.75rem',
          fontFamily: '"Clash Display", sans-serif', fontWeight: 700,
          fontSize: '5rem', lineHeight: 1,
          color: project.color, opacity: 0.1, userSelect: 'none',
        }}>{num}</span>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{
            padding: '0.18rem 0.6rem', borderRadius: '9999px',
            background: project.color + '20', border: `1px solid ${project.color}45`,
            fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem',
            color: project.color, letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {project.type === 'professional' ? '⚡ Professional' : '🔨 Personal'}
          </span>
        </div>

        <h3 style={{
          fontFamily: '"Clash Display", sans-serif', fontWeight: 700,
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-primary)', lineHeight: 1.25,
          margin: 0,
        }}>
          {project.title}
        </h3>

        {project.role && (
          <p style={{
            fontFamily: '"Satoshi", sans-serif', fontSize: '0.78rem',
            color: project.color, fontWeight: 600, marginTop: '0.3rem',
          }}>
            {project.role}
          </p>
        )}
      </div>

      {/* ── Card body ───────────────────────────────────── */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Description — 2-line clamp */}
        <p style={{
          fontFamily: '"Satoshi", sans-serif', fontSize: '0.88rem',
          color: 'var(--text-secondary)', lineHeight: 1.65,
          marginBottom: '1rem', flex: 1,
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Tech tags — first 4 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} style={{
              padding: '0.22rem 0.6rem', borderRadius: '9999px',
              background: project.color + '10',
              border: `1px solid ${project.color}30`,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.68rem', color: project.color,
            }}>
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span style={{
              padding: '0.22rem 0.6rem', borderRadius: '9999px',
              background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.68rem', color: 'var(--text-muted)',
            }}>
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* View details CTA */}
        <div style={{
          paddingTop: '0.75rem',
          borderTop: `1px solid ${project.color}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.38rem 0.9rem', borderRadius: '9999px',
            background: `${project.color}12`,
            border: `1px solid ${project.color}35`,
            fontFamily: '"Satoshi", sans-serif', fontWeight: 700,
            fontSize: '0.78rem', color: project.color,
            transition: 'background 0.2s, border-color 0.2s',
          }}>
            View Details
            <ArrowIcon />
          </span>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.58rem', color: project.color,
            opacity: 0.45, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            click to expand
          </span>
        </div>
      </div>
    </motion.div>
  );
}
