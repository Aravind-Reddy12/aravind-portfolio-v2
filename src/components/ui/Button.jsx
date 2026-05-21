import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Button({ children, variant = 'primary', href, onClick, icon, className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer select-none';

  const variants = {
    primary: 'bg-accent-primary text-bg-primary hover:shadow-[0_0_24px_rgba(0,245,212,0.5)] hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border border-accent-primary text-accent-primary hover:bg-accent-glow hover:shadow-[0_0_20px_rgba(0,245,212,0.25)] hover:scale-[1.02] active:scale-[0.98]',
  };

  const style =
    variant === 'outline'
      ? { '--tw-bg-opacity': 1, background: 'transparent', color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }
      : { background: 'var(--accent-primary)', color: 'var(--bg-primary)' };

  const El = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <El
        href={href}
        onClick={onClick}
        className={cn(base, className)}
        style={style}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {icon && <span>{icon}</span>}
        {children}
      </El>
    </motion.div>
  );
}
