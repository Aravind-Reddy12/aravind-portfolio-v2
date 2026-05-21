import { cn } from '../../utils/cn';

export function TechTag({ name, className = '' }) {
  return (
    <span
      className={cn(
        'font-code inline-flex items-center px-3 py-1 rounded-full text-xs border transition-all duration-150 cursor-default select-none',
        className,
      )}
      style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.7rem',
        background: 'var(--bg-tertiary)',
        color: 'var(--text-secondary)',
        borderColor: 'var(--border-subtle)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-accent)';
        e.currentTarget.style.color = 'var(--accent-primary)';
        e.currentTarget.style.background = 'var(--accent-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.color = 'var(--text-secondary)';
        e.currentTarget.style.background = 'var(--bg-tertiary)';
      }}
    >
      {name}
    </span>
  );
}
