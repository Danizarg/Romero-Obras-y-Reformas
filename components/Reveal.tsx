'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function MaskLines({
  lines,
  className = '',
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.09 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
