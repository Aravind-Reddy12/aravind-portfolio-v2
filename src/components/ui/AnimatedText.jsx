import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0 } },
};

const wordVariants = {
  hidden:  { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function AnimatedText({ text, tag: Tag = 'p', className = '', once = true }) {
  const words = text.split(' ');

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      className="overflow-hidden"
    >
      <Tag className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.28em' }}>
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
