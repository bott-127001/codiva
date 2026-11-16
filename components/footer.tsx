"use client";

import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { GradientText } from '@/components/landing/Bits/GradientText';

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#projects' },
  { name: 'Designs', href: '/portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/codiva_labs/', icon: Instagram, enabled: true },
  { name: 'Facebook', href: 'https://facebook.com/codiva.tech', icon: Facebook, enabled: false },
  { name: 'Twitter', href: 'https://twitter.com/codiva_tech', icon: Twitter, enabled: false },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/codiva', icon: Linkedin, enabled: false },
];

export function Footer() {
  const { toast } = useToast();
  
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSocialClick = (social: any) => {
    if (social.enabled) {
      handleNavClick(social.href);
    } else {
      toast({
        title: 'Coming Soon',
        description: `${social.name} channel will be live soon.`,
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-border/60 bg-surface-1/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-3xl font-bold font-display tracking-tight">
              <GradientText>Codiva</GradientText>
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Full-stack software engineers and UI architects building fast, engaging, and scalable modern web solutions.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <span>Code Driven by Vision</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Crafted with <Heart className="size-3 text-red-500 fill-current" /> by the Founders
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/90 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/90 mb-4">
                Connect
              </h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={social.name}
                      onClick={() => handleSocialClick(social)}
                      className={`icon-link ${!social.enabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                      title={social.name}
                    >
                      <Icon className="size-4" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="btn-ghost-bit text-xs py-2 px-3.5 hover:border-brand/40"
              >
                <ArrowUp className="size-3.5 mr-1" /> Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Codiva. All rights reserved.</p>
          <p className="tracking-[0.12em] uppercase font-mono text-[11px]">
            Next.js · TailwindCSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
