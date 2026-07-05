import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '3.2x', label: 'Avg. Traffic Growth' },
];

const rotatingWords = ['Rank Higher.', 'Optimize GBP.', 'Get More Calls.', 'Dominate Local Search.'];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-6 px-4 py-1.5 text-sm border-primary/30 bg-primary/10 text-primary"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Google Business Profile & Local SEO Specialist
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                {rotatingWords[wordIndex].split(' ').map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={word} className="text-gradient">
                      {word}{' '}
                    </span>
                  ) : (
                    <span key={word}>{word} </span>
                  ),
                )}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              I'm Syed M. Amir Hassan — a Local SEO and Google Business Profile optimization expert helping brands boost local visibility, drive organic map rankings, and convert searchers into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-8 glow-primary group"
                onClick={() => scrollTo('#contact')}
              >
                Start Your Growth
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
                onClick={() => scrollTo('#case-studies')}
              >
                View Case Studies
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                    className="text-2xl font-bold text-primary"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="section-card p-8 glow-accent shimmer-border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Organic Traffic</p>
                  <p className="text-3xl font-bold mt-1">+247%</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="flex items-end gap-2 h-40">
                {[35, 45, 40, 55, 50, 65, 60, 75, 70, 90, 85, 100].map(
                  (height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        delay: 0.6 + i * 0.05,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ scaleY: 1.05, originY: 1 }}
                    />
                  ),
                )}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Keywords', value: '1,240' },
                  { label: 'Backlinks', value: '8.5K' },
                  { label: 'Domain Auth', value: '72' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-secondary/50 p-3 text-center hover:bg-secondary/80 transition-colors"
                  >
                    <p className="text-lg font-bold">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 section-card px-4 py-3 text-sm font-medium"
            >
              🚀 #1 on Google
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 section-card px-4 py-3 text-sm"
            >
              <span className="text-primary font-bold">+312%</span> ROI
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
