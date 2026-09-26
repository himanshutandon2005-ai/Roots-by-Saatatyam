import React, { ReactNode } from 'react';
import { motion, type Transition } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, y = 28, className = '' }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: EASE as unknown as Transition['ease'] }}
  >
    {children}
  </motion.div>
);

interface MaskLinesProps {
  lines: ReactNode[];
  delay?: number;
  stagger?: number;
  className?: string;
  lineClassName?: string;
}

export const MaskLines = ({
  lines,
  delay = 0,
  stagger = 0.12,
  className = '',
  lineClassName = '',
}: MaskLinesProps) => (
  <motion.span
    className={`block ${className}`}
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: stagger, delayChildren: delay } },
    }}
  >
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
        <motion.span
          className={`block will-change-transform ${lineClassName}`}
          variants={{
            hidden: { y: '115%' },
            show: { y: '0%', transition: { duration: 0.95, ease: EASE as unknown as Transition['ease'] } },
          }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </motion.span>
);

export const Overline = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <p
    className={`font-mono text-[11px] uppercase tracking-[0.3em] text-sage ${className}`}
  >
    {children}
  </p>
);
