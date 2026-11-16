"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientText } from '@/components/landing/Bits/GradientText';
import { MagneticLink } from '@/components/landing/Bits/MagneticButton';

const navigationItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services', badge: 'SaaS' },
  { name: 'Clients', href: '#projects' },
  { name: 'Designs', href: '/portfolio', badge: 'Live' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-background/70 border-b border-border/60 py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => handleNavClick('#hero')}
              className="text-2xl font-bold font-display tracking-tight cursor-pointer"
            >
              <GradientText>Codiva</GradientText>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-surface-1/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-border/60 shadow-lg">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  item.badge
                    ? 'text-foreground font-semibold hover:text-brand-accent'
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface-2/60'
                }`}
              >
                {item.name}
                {item.badge && (
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-brand/20 text-brand-accent border border-brand/30">
                    <Sparkles className="size-2.5" />
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right side CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <MagneticLink href="#contact" className="btn-bit text-xs py-2 px-4.5">
              Start a project <ArrowUpRight className="size-3.5" />
            </MagneticLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-2 rounded-2xl bg-surface-1/95 backdrop-blur-xl border border-border shadow-2xl">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-surface-2/70 rounded-xl transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-brand/20 text-brand-accent border border-brand/30">
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-bit w-full justify-center text-xs py-3"
                  >
                    Start a project <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
