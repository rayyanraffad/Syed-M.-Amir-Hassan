import { ScrollReveal } from '@/components/scroll-reveal';

const keywords = [
  'Technical SEO',
  'Keyword Research',
  'Link Building',
  'Content Strategy',
  'Local SEO',
  'E-commerce SEO',
  'Core Web Vitals',
  'Schema Markup',
  'Google Analytics',
  'Domain Authority',
  'Organic Traffic',
  'SERP Rankings',
];

export function Marquee() {
  const items = [...keywords, ...keywords];

  return (
    <div className="py-6 overflow-hidden border-y border-border/30 bg-card/20 backdrop-blur-sm">
      <ScrollReveal variant="fadeIn">
        <div className="relative flex">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {items.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {word}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
