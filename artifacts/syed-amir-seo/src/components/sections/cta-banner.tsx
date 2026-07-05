import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/scroll-reveal';

export function CTABanner() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal variant="scaleIn">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px]" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 mb-4"
                >
                  <Zap className="h-6 w-6 text-primary" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Ready to Dominate{' '}
                  <span className="text-gradient">Search Results?</span>
                </h2>
                <p className="mt-3 text-muted-foreground max-w-lg text-lg">
                  Get a free, no-obligation SEO audit and discover exactly what's
                  holding your site back from page one.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Button
                  size="lg"
                  className="rounded-full px-8 glow-primary group"
                  onClick={() => scrollTo('#contact')}
                >
                  Get Free Audit
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                  onClick={() => scrollTo('#case-studies')}
                >
                  See Results
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
