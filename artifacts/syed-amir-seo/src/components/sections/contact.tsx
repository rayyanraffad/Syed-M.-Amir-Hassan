import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionWrapper } from '@/components/section-wrapper';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaRedditAlien,
  FaPinterestP,
} from 'react-icons/fa6';

const ClutchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 14.88c-.9.5-1.95.72-3 .59-1.93-.24-3.5-1.74-3.83-3.66-.46-2.61 1.48-4.96 4.07-4.96.96 0 1.84.34 2.54.91.29.24.71.21.96-.08l.94-.94c.26-.26.24-.69-.04-.92C14.36 6.81 12.75 6.2 11 6.2c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5c2.31 0 4.4-.95 5.9-2.48.27-.27.24-.71-.05-.96l-.97-.94c-.26-.26-.7-.22-.96.08-.66.59-1.52.98-2.54.98z" />
  </svg>
);

const socialProfiles = [
  { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com' },
  { name: 'Twitter / X', icon: FaXTwitter, href: 'https://x.com' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  { name: 'TikTok', icon: FaTiktok, href: 'https://tiktok.com' },
  { name: 'Reddit', icon: FaRedditAlien, href: 'https://reddit.com' },
  { name: 'Pinterest', icon: FaPinterestP, href: 'https://pinterest.com' },
  { name: 'Clutch', icon: ClutchIcon, href: 'https://clutch.co' },
];

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <SectionWrapper id="contact">
      <ScrollReveal className="text-center mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Get In Touch
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Ready to <span className="text-gradient">Grow?</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Book a free SEO audit and discover untapped opportunities for your business.
        </p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-5 gap-8">
        <ScrollReveal variant="slideLeft" className="lg:col-span-2">
          <div className="section-card p-8 h-full flex flex-col justify-between section-card-hover">
            <div>
              <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@syedamir.com' },
                  { icon: Phone, label: 'Phone', value: '+92 324 4274867' },
                  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan — Worldwide' },
                  { icon: Clock, label: 'Hours', value: 'Open 24 hours (Mon-Sun)' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-sm sm:text-base">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="text-sm font-semibold mb-4 text-foreground">Find Me On</h4>
                <div className="flex flex-wrap gap-2.5">
                  {socialProfiles.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 rounded-lg bg-secondary/50 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all hover:scale-105"
                      title={social.name}
                    >
                      <social.icon className="h-4.5 w-4.5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Free Audit:</span>{' '}
                Get a comprehensive SEO analysis of your website — no strings attached.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideRight" className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="section-card p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input
                  required
                  placeholder="John Doe"
                  className="bg-secondary/50 border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="bg-secondary/50 border-border"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block">Website</label>
              <Input
                placeholder="https://yourwebsite.com"
                className="bg-secondary/50 border-border"
              />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                required
                rows={5}
                placeholder="Tell me about your SEO goals..."
                className="bg-secondary/50 border-border resize-none"
              />
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="mt-6 w-full sm:w-auto rounded-full px-8 glow-primary"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </form>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
