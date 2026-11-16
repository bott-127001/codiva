"use client";

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, Sparkles, Instagram, Twitter, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SpotlightCard } from '@/components/landing/Bits/SpotlightCard';
import { GradientText } from '@/components/landing/Bits/GradientText';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/codiva_labs/',
    icon: Instagram,
    handle: '@codiva_labs',
    enabled: true
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/codiva_tech',
    icon: Twitter,
    handle: '@codiva_tech',
    enabled: false
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/codiva.tech',
    icon: Facebook,
    handle: 'codiva.tech',
    enabled: false
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/codiva',
    icon: Linkedin,
    handle: 'Codiva',
    enabled: false
  }
];

export function ContactSection() {
  const { toast } = useToast();

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 eyebrow mb-4">
            <Sparkles className="size-3.5 text-brand-accent" />
            <span>Collaboration</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4">
            <GradientText>Let's Build Together</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Have a project in mind or looking for a long-term technology partner? Reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-8 rounded-3xl bg-surface-1/40 backdrop-blur-xl border border-border/60">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-xl bg-brand/15 text-brand-accent border border-brand/20">
                  <MessageSquare className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    We typically reply within 24 hours
                  </p>
                </div>
              </div>

              <form
                action="https://formspree.io/f/mzzvejnk"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Inquiry / Subscription Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="TurfFlow"
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-border/60 text-foreground focus:outline-none focus:border-brand transition-colors text-sm"
                  >
                    <option value="TurfFlow" className="bg-surface-1 text-foreground">TurfFlow – Turf Management SaaS</option>
                    <option value="Rvolx" className="bg-surface-1 text-foreground">Rvolx – Trading Signals Platform</option>
                    <option value="Aladin" className="bg-surface-1 text-foreground">Aladin – Forex Strategy Indicator (Waitlist)</option>
                    <option value="Prosperia" className="bg-surface-1 text-foreground">Prosperia – Real Estate AI Agent</option>
                    <option value="Custom Development" className="bg-surface-1 text-foreground">Custom Web / Platform Engineering</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Project / Subscription Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your business, timeline, goals, or the specific service you are interested in..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/60 border border-border/60 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand transition-colors text-sm resize-none"
                  />
                </div>

                {/* Anti-spam gotcha */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                <button
                  type="submit"
                  className="btn-bit w-full justify-center text-sm py-3.5 mt-2"
                >
                  <Send className="size-4" /> Send Inquiry
                </button>
              </form>
            </SpotlightCard>
          </motion.div>

          {/* Direct Details & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            {/* Email Contact Card */}
            <SpotlightCard className="p-6 rounded-3xl bg-surface-1/40 backdrop-blur-xl border border-border/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-brand-2/15 text-brand-2 border border-brand-2/20">
                  <Mail className="size-5" />
                </span>
                <div>
                  <h4 className="text-base font-bold font-display text-foreground">
                    Direct Email
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Business inquiries & partnerships
                  </p>
                </div>
              </div>
              <a
                href="mailto:itscodivalabs@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-brand-accent hover:underline font-mono"
              >
                itscodivalabs@gmail.com <ArrowUpRight className="size-3.5" />
              </a>
            </SpotlightCard>

            {/* Social Channels */}
            <SpotlightCard className="p-6 rounded-3xl bg-surface-1/40 backdrop-blur-xl border border-border/60">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Social Channels
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={social.name}
                      onClick={() => {
                        if (social.enabled) {
                          window.open(social.url, '_blank', 'noopener,noreferrer');
                        } else {
                          toast({
                            title: 'Coming Soon',
                            description: `${social.name} profile will be live shortly.`,
                          });
                        }
                      }}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border border-border/50 text-left transition-all ${
                        social.enabled
                          ? 'bg-surface-2/60 hover:border-brand/40 text-foreground hover:bg-surface-2'
                          : 'bg-surface-2/20 text-muted-foreground/60 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <Icon className="size-4 shrink-0 text-brand-accent" />
                      <div className="min-w-0">
                        <p className="text-xs font-medium truncate">{social.name}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{social.handle}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

            {/* Ready to launch note */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-brand/10 to-brand-2/10 border border-brand/20 backdrop-blur-md text-center">
              <CheckCircle className="size-8 text-brand-accent mx-auto mb-2" />
              <h4 className="text-base font-bold font-display text-foreground mb-1">
                Ready to Ship?
              </h4>
              <p className="text-xs text-muted-foreground">
                From concept to high-speed production code, we turn your ideas into reality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
