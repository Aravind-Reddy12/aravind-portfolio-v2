import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const directionMap = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0  } },
  down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0  } },
  left:  { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0  } },
  right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0  } },
};

export function SectionWrapper({ children, direction = 'up', delay = 0, className = '' }) {
  const variants = {
    hidden: directionMap[direction].hidden,
    visible: {
      ...directionMap[direction].visible,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
