import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCounter } from '@/hooks/use-counter';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionWrapper } from '@/components/section-wrapper';

const metrics = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 3, suffix: 'x', label: 'Average Traffic Growth' },
  { value: 150, suffix: 'M+', label: 'Organic Impressions' },
];

function StatCard({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const count = useCounter(value, 2000, inView);

  return (
    <div className="section-card p-8 text-center group section-card-hover">
      <motion.div
        className="text-4xl sm:text-5xl font-bold text-gradient"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {count}
        {suffix}
      </motion.div>
      <p className="mt-2 text-muted-foreground">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="results">
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Proven Results
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Numbers That <span className="text-gradient">Speak</span>
        </h2>
      </ScrollReveal>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <StatCard key={metric.label} {...metric} inView={inView} />
        ))}
      </div>
    </SectionWrapper>
  );
}
