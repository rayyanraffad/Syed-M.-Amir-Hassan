import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { SectionWrapper } from '@/components/section-wrapper';

const steps = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description:
      'Comprehensive site audit, competitor analysis, and keyword opportunity mapping.',
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description:
      'Custom SEO roadmap with prioritized actions, timelines, and KPI targets.',
  },
  {
    step: '03',
    title: 'Implementation',
    description:
      'Technical fixes, content creation, and link building executed with precision.',
  },
  {
    step: '04',
    title: 'Monitor & Optimize',
    description:
      'Continuous tracking, A/B testing, and strategy refinement for sustained growth.',
  },
];

export function Process() {
  return (
    <SectionWrapper id="process">
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          My Process
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          How We <span className="text-gradient">Win Together</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          A transparent, proven framework that turns SEO into a predictable growth channel.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
          <StaggerItem key={item.step}>
            <div className="section-card p-6 h-full relative overflow-hidden group section-card-hover">
              <div className="absolute top-0 right-0 text-7xl font-bold text-primary/5 -mr-2 -mt-2 group-hover:text-primary/10 transition-colors">
                {item.step}
              </div>
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
