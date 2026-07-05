import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionWrapper } from '@/components/section-wrapper';

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'Most clients see measurable improvements within 3-4 months, with significant ranking gains typically occurring between 4-6 months. SEO is a long-term investment, and results compound over time.',
  },
  {
    question: 'What makes your approach different?',
    answer:
      'I combine technical expertise with data-driven content strategy and ethical link building. Every recommendation is backed by analytics, and I provide transparent monthly reporting so you always know exactly where your investment is going.',
  },
  {
    question: 'Do you work with businesses in all industries?',
    answer:
      'Yes! I have experience across SaaS, e-commerce, healthcare, legal, local services, and more. Each industry requires a tailored approach, which is why I start every engagement with a deep discovery phase.',
  },
  {
    question: 'What does a free SEO audit include?',
    answer:
      'Your free audit covers technical health, on-page optimization, backlink profile analysis, competitor benchmarking, and a prioritized list of quick wins and long-term opportunities.',
  },
  {
    question: 'What are your pricing models?',
    answer:
      'I offer monthly retainer packages tailored to your goals and budget, as well as project-based pricing for specific initiatives like site migrations or content sprints. Book a call to discuss the best fit.',
  },
];

export function FAQ() {
  return (
    <SectionWrapper>
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          FAQ
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Common <span className="text-gradient">Questions</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="section-card p-6 sm:p-8 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
