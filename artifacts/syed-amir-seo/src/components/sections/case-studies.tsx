import { useState } from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { SectionWrapper } from '@/components/section-wrapper';

const cases = [
  {
    client: 'TechFlow SaaS',
    industry: 'SaaS',
    result: '+312% Organic Traffic',
    description:
      'Rebuilt site architecture and content hub strategy, ranking 180+ keywords in top 3.',
    metrics: ['180+ Top 3 Keywords', '4.2x Lead Growth', '6 Month Timeline'],
    gradient: 'from-emerald-600/30 to-emerald-900/10',
    details: {
      challenge:
        'TechFlow had strong product-market fit but virtually zero organic visibility. Their blog was thin, site architecture was flat, and competitors dominated every core keyword.',
      solution:
        'Implemented a topic cluster strategy, rebuilt information architecture, optimized 40+ landing pages, and launched a digital PR campaign earning 120+ high-authority backlinks.',
      outcomes: [
        'Organic traffic grew 312% in 6 months',
        '180 keywords ranking in top 3 positions',
        'Lead generation increased 4.2x from organic',
        'Domain Authority rose from 28 to 52',
      ],
    },
  },
  {
    client: 'LuxeStyle Co.',
    industry: 'E-commerce',
    result: '+189% Revenue from SEO',
    description:
      'Product page optimization and category restructuring drove massive organic sales growth.',
    metrics: ['$2.4M Organic Revenue', '890 Product Rankings', '8 Month Timeline'],
    gradient: 'from-violet-600/30 to-violet-900/10',
    details: {
      challenge:
        'LuxeStyle was spending heavily on paid ads with declining ROAS. Their 2,000+ product pages had duplicate content, slow load times, and poor internal linking.',
      solution:
        'Executed a full e-commerce SEO overhaul: canonicalization, faceted navigation cleanup, product schema markup, and a content-driven category strategy.',
      outcomes: [
        '$2.4M in organic revenue within 8 months',
        '890 product pages ranking on page 1',
        'Page load speed improved by 47%',
        'Organic revenue now exceeds paid ad spend',
      ],
    },
  },
  {
    client: 'GreenLeaf Dental',
    industry: 'Local Business',
    result: '#1 Local Pack Rankings',
    description:
      'Local SEO campaign dominating Google Maps across 12 locations in the metro area.',
    metrics: ['12 Locations Optimized', '340% More Calls', '3 Month Timeline'],
    gradient: 'from-amber-600/30 to-amber-900/10',
    details: {
      challenge:
        'GreenLeaf Dental had 12 locations but inconsistent NAP data, unoptimized Google Business Profiles, and zero local content strategy.',
      solution:
        'Standardized citations across 80+ directories, optimized all GBP listings with photos and posts, built location-specific landing pages, and implemented a review generation system.',
      outcomes: [
        'All 12 locations ranking #1 in local pack',
        'Phone calls increased 340% from Google',
        'Online appointment bookings up 215%',
        'Average review rating improved to 4.9 stars',
      ],
    },
  },
];

export function CaseStudies() {
  const [selected, setSelected] = useState<(typeof cases)[0] | null>(null);

  return (
    <SectionWrapper id="case-studies">
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Case Studies
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Real Results for <span className="text-gradient">Real Brands</span>
        </h2>
      </ScrollReveal>

      <StaggerContainer className="grid lg:grid-cols-3 gap-6">
        {cases.map((study) => (
          <StaggerItem key={study.client}>
            <button
              onClick={() => setSelected(study)}
              className="section-card overflow-hidden h-full group section-card-hover text-left w-full shimmer-border"
            >
              <div
                className={`h-32 bg-gradient-to-br ${study.gradient} flex items-end p-6`}
              >
                <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm">
                  {study.industry}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{study.client}</h3>
                    <p className="text-primary font-semibold mt-1">{study.result}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl border-card-border bg-card/95 backdrop-blur-xl">
          {selected && (
            <>
              <DialogHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {selected.industry}
                </Badge>
                <DialogTitle className="text-2xl">{selected.client}</DialogTitle>
                <DialogDescription className="flex items-center gap-2 text-primary font-semibold text-base">
                  <TrendingUp className="h-4 w-4" />
                  {selected.result}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-2">
                <div>
                  <h4 className="font-semibold mb-2">The Challenge</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.details.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">The Solution</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.details.solution}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Key Outcomes</h4>
                  <ul className="space-y-2">
                    {selected.details.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="w-full rounded-full glow-primary"
                  onClick={() => {
                    setSelected(null);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start a Similar Project
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
