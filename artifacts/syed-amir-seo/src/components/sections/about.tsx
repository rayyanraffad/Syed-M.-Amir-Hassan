import { Award, Target, Users } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { SectionWrapper } from '@/components/section-wrapper';

const highlights = [
  {
    icon: Award,
    title: '8+ Years Experience',
    description: 'Proven track record across e-commerce, SaaS, and local businesses.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is backed by data, analytics, and measurable KPIs.',
  },
  {
    icon: Users,
    title: '500+ Happy Clients',
    description: 'Long-term partnerships built on transparency and real growth.',
  },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          About Me
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Your Partner in <span className="text-gradient">Local Search Dominance</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          I specialize in Google Business Profile troubleshooting, local map pack optimization, and data-driven SEO strategies that connect local businesses with ready-to-buy customers.
        </p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <ScrollReveal variant="slideLeft">
          <div className="section-card p-8 lg:p-10 section-card-hover shimmer-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white">
                SA
              </div>
              <div>
                <h3 className="text-xl font-bold">Syed M. Amir Hassan</h3>
                <p className="text-muted-foreground">Local SEO & Google Business Profile Specialist</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Based in Lahore, Pakistan, I am a dedicated Local SEO expert and Google Business Profile Specialist. I help businesses around the world recover suspended profiles, solve NAP (Name, Address, Phone) consistency issues, and construct local search ranking campaigns that consistently increase customer acquisition.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Google Business Profile', 'Local SEO', 'Digital Marketing', 'Social Media', 'GBP Troubleshooting'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid gap-4">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <div className="section-card p-6 flex gap-4 section-card-hover group">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-shadow">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
