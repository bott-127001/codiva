"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Code2, Cpu, Rocket } from 'lucide-react';
import { GradientText } from '@/components/landing/Bits/GradientText';
import { SplitText } from '@/components/landing/Bits/SplitText';
import { MagneticLink } from '@/components/landing/Bits/MagneticButton';
import { Marquee } from '@/components/landing/Bits/Marquee';

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 eyebrow mb-8"
        >
          <Sparkles className="size-3.5 text-brand-accent animate-pulse" />
          <span>SaaS Incubator & Full-Stack Studio</span>
        </motion.div>

        <h1 className="max-w-5xl mx-auto font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.04em] mb-8">
          <SplitText text="Code Driven by" />
          <GradientText className="block mt-2">
            <SplitText text="Vision." delay={0.25} />
          </GradientText>
        </h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          From high-performance client web platforms to specialized subscription services — we engineer vertical SaaS products, quantitative trading engines, and autonomous AI agents.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <MagneticLink href="#services" className="btn-bit text-sm py-3 px-6 shadow-xl">
            Explore Subscription Services <ArrowUpRight className="size-4" />
          </MagneticLink>

          <a href="#projects" className="btn-ghost-bit text-sm py-3 px-6 backdrop-blur-md">
            View Client Sites
          </a>

          <a href="/portfolio" className="btn-ghost-bit text-sm py-3 px-6 backdrop-blur-md">
            <Sparkles className="size-3.5 text-brand-accent" />
            See Designs
          </a>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center gap-2">
            <Code2 className="size-4 text-brand-accent" />
            <span>Robust Full-Stack Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="size-4 text-brand" />
            <span>Modern Next.js & React Core</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="size-4 text-brand-2" />
            <span>Built for Speed & Conversion</span>
          </div>
        </motion.div>
      </div>

      {/* Tech Ticker Marquee */}
      <div className="mt-16 relative z-10 border-y border-border/60 bg-surface-1/40 backdrop-blur-md">
        <Marquee
          items={[
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "React",
            "Framer Motion",
            "Node.js",
            "MongoDB Atlas",
            "Python",
            "Figma UX/UI",
            "FastAPI",
          ]}
        />
      </div>
    </section>
  );
}
