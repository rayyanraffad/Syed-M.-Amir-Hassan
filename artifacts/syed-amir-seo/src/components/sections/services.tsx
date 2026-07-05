import {
  MapPin,
  Store,
  TrendingUp,
  Share2,
  ShieldAlert,
  BarChart3,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { SectionWrapper } from '@/components/section-wrapper';

const services = [
  {
    icon: Store,
    title: 'Google Business Profile Optimization',
    description:
      'Setup, review management, updates, and ranking strategies to boost local visibility.',
    color: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: MapPin,
    title: 'Local SEO Services',
    description:
      'Map citations, local keyword targeting, geo-specific optimization to rank in local map packs.',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing Services',
    description:
      'Results-driven planning and multi-channel strategy execution to drive customer calls and leads.',
    color: 'from-violet-500/20 to-violet-500/5',
  },
  {
    icon: Share2,
    title: 'Social Media Services',
    description:
      'Content plans and brand loyalty strategies to increase engagement and authority.',
    color: 'from-rose-500/20 to-rose-500/5',
  },
  {
    icon: ShieldAlert,
    title: 'GBP Troubleshooting',
    description:
      'Recovering suspended profiles, solving NAP (Name, Address, Phone) mismatch issues.',
    color: 'from-amber-500/20 to-amber-500/5',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Performance',
    description:
      'Track calls, clicks, impressions, and user interactions to continuously optimize conversions.',
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
];

export function Services() {
  return (
    <SectionWrapper id="services">
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Services
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          SEO Solutions That <span className="text-gradient">Deliver</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Comprehensive SEO services tailored to your business goals and industry.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <div className="section-card p-6 h-full group section-card-hover shimmer-border cursor-default">
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
