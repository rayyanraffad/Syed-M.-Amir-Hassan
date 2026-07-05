import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  noPadding?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className,
  innerClassName,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-8 px-4 sm:px-6', className)}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'mx-auto max-w-7xl section-shell',
          !noPadding && 'p-6 sm:p-10 lg:p-12',
          innerClassName,
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className="px-6 max-w-4xl mx-auto">
      <div className="gradient-divider" />
    </div>
  );
}
