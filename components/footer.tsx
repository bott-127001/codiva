"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Github, Linkedin, Mail, ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Team', href: '#team' },
  { name: 'Projects', href: '#projects' },
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
    console.log('Footer navigation to:', href);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSocialClick = (social: any) => {
    if (social.enabled) {
      handleNavClick(social.href);
    } else {
      toast({
        title: 'Yet to open',
        description: `${social.name} is not available yet.`,
        variant: 'default',
      });
    }
  };

  const scrollToTop = () => {
    console.log('Scrolling to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold gradient-text mb-4">Codiva</h3>
                <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                  A startup of passionate full-stack developers and digital marketers 
                  creating scalable, modern web solutions that drive business growth.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                  <span>by the Codiva team</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <nav className="space-y-3">
                  {quickLinks.map((link) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="block text-muted-foreground hover:text-codiva-blue transition-colors duration-200 text-left"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Connect */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.button
                        key={social.name}
                        onClick={() => handleSocialClick(social)}
                        className={`flex items-center gap-3 transition-colors duration-200 group ${social.enabled ? 'text-muted-foreground hover:text-codiva-blue' : 'text-muted-foreground/50 cursor-not-allowed'}`}
                        whileHover={social.enabled ? { x: 4 } : {}}
                        disabled={!social.enabled}
                      >
                        <Icon className={`h-4 w-4 transition-transform ${social.enabled ? 'group-hover:scale-110' : ''}`} />
                        <span>{social.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
                
                {/* Back to Top Button */}
                <motion.div className="mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={scrollToTop}
                    className="border-codiva-blue/20 text-codiva-blue hover:bg-codiva-blue hover:text-white transition-all duration-300"
                  >
                    <ArrowUp className="h-4 w-4 mr-2" />
                    Back to Top
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Codiva. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Built with Next.js & Tailwind CSS</span>
            <span className="hidden sm:inline">•</span>
            <span>Deployed on Vercel</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

console.log('Footer component loaded');