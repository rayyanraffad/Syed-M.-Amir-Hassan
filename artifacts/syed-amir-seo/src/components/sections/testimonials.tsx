import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionWrapper } from '@/components/section-wrapper';

const testimonials = [
  {
    quote:
      "Syed Amir Hassan is a Master in his field",
    author: 'hassan imam',
    role: 'Local SEO Client',
    avatar: 'HI',
  },
  {
    quote:
      "I had an excellent experience while taking services from Amir. He is hardworking and compromising guy which increases the reliability of his services.",
    author: 'Zeeshan Bari',
    role: 'Business Owner',
    avatar: 'ZB',
  },
  {
    quote:
      "He is the best Local SEO expert. Amir is known as an expert in this area and he is surrounded by a star-studded team of similar hard-working people. There is no one better for Local SEO. If you just want better rankings, contact Syed Amir. I have consulted with him and I found him very helpful.",
    author: 'noor zahra',
    role: 'Local Consulting Client',
    avatar: 'NZ',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    [],
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <SectionWrapper>
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          What Clients <span className="text-gradient">Say</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div
          className="section-card p-8 sm:p-12 relative overflow-hidden max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg sm:text-xl leading-relaxed text-foreground/90">
                "{testimonials[current].quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
