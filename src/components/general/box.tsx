import { motion } from 'framer-motion';
import { ComponentChildren } from 'preact';

interface BoxProps {
  className?: string;
  children: ComponentChildren;
}

export default function Box({ className, children }: BoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.025 }}
      viewport={{ once: true }}
      className={'bg-white rounded-md p-4 ' + className}
    >
      {children}
    </motion.div>
  );
}
