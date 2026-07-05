import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Stats } from '@/components/sections/stats';
import { Process } from '@/components/sections/process';
import { CaseStudies } from '@/components/sections/case-studies';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { CTABanner } from '@/components/sections/cta-banner';
import { AnimatedBackground } from '@/components/animated-background';
import { ScrollProgress } from '@/components/scroll-progress';
import { Marquee } from '@/components/marquee';
import { FloatingCTA } from '@/components/floating-cta';
import { SectionDivider } from '@/components/section-wrapper';

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Stats />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <CaseStudies />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <div id="faq">
          <FAQ />
        </div>
        <SectionDivider />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
