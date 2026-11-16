"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarCheck, 
  TrendingUp, 
  Target, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Hourglass,
  Cpu,
  ShieldCheck,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import { subscriptionServices, type SubscriptionService } from '@/lib/data';
import { SpotlightCard } from '@/components/landing/Bits/SpotlightCard';
import { GradientText } from '@/components/landing/Bits/GradientText';
import { cn } from '@/lib/utils';

function getServiceIcon(type: SubscriptionService['iconType']) {
  switch (type) {
    case 'turf':
      return <CalendarCheck className="size-6 text-emerald-400" />;
    case 'signals':
      return <TrendingUp className="size-6 text-brand-accent" />;
    case 'indicator':
      return <Target className="size-6 text-amber-400" />;
    case 'ai-agent':
      return <Bot className="size-6 text-brand-2" />;
  }
}

function getServiceAccent(id: string) {
  switch (id) {
    case 'prosperia':
      return {
        badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
        textAccent: 'text-purple-400',
        borderHover: 'hover:border-purple-500/40',
        pillBg: 'bg-purple-500/10 text-purple-300'
      };
    case 'rvolx':
      return {
        badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        textAccent: 'text-cyan-400',
        borderHover: 'hover:border-cyan-500/40',
        pillBg: 'bg-cyan-500/10 text-cyan-300'
      };
    case 'turfflow':
      return {
        badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        textAccent: 'text-emerald-400',
        borderHover: 'hover:border-emerald-500/40',
        pillBg: 'bg-emerald-500/10 text-emerald-300'
      };
    default:
      return {
        badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        textAccent: 'text-amber-400',
        borderHover: 'hover:border-amber-500/40',
        pillBg: 'bg-amber-500/10 text-amber-300'
      };
  }
}

function ServiceCard({ service }: { service: SubscriptionService }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isDev = service.status === 'in-development';
  const accent = getServiceAccent(service.id);

  return (
    <div className="h-full">
      <SpotlightCard className={cn(
        "h-full flex flex-col justify-between p-5 sm:p-7 md:p-8 rounded-3xl bg-surface-1/50 backdrop-blur-xl border border-border/60 transition-all duration-300",
        accent.borderHover
      )}>
        <div>
          {/* Card Top: Logo + Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-3">
              {service.logo ? (
                <div className="size-14 sm:size-16 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center transition-transform duration-300 group-hover/spot:scale-105 shadow-md">
                  <img
                    src={service.logo}
                    alt={`${service.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="size-14 sm:size-16 rounded-2xl bg-surface-2/90 border border-border/60 shadow-inner flex items-center justify-center shrink-0">
                  {getServiceIcon(service.iconType)}
                </div>
              )}

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground tracking-tight group-hover/spot:text-brand-accent transition-colors">
                  {service.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-muted-foreground">
                  For {service.targetAudience}
                </span>
              </div>
            </div>

            {/* Status / Category Badge */}
            {isDev ? (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <Hourglass className="size-3 animate-spin" />
                {service.badge}
              </span>
            ) : (
              <span className={cn("inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider px-3 py-1 rounded-full border", accent.badgeBg)}>
                <Sparkles className="size-3" />
                {service.badge}
              </span>
            )}
          </div>

          {/* Tagline */}
          <p className={cn("text-xs sm:text-sm font-semibold mb-3 leading-snug", accent.textAccent)}>
            {service.tagline}
          </p>

          {/* Primary Summary */}
          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-5">
            {service.whatItIs}
          </p>

          {/* Key Deliverables Highlights (Quick Scan) */}
          <div className="space-y-2 mb-5">
            {service.coreConcepts.slice(0, 3).map((concept, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-foreground">{concept.title}:</strong> {concept.description.split('.')[0]}.</span>
              </div>
            ))}
          </div>

          {/* Expandable Technical Deep-Dive & Architecture */}
          <div className="mb-5">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-surface-2/60 hover:bg-surface-2 border border-border/50 text-xs font-mono transition-colors text-muted-foreground hover:text-foreground"
            >
              <span className="flex items-center gap-2">
                <Cpu className="size-3.5 text-brand-accent" />
                {isExpanded ? "Hide Technical Specifications" : "View Full Modules & Architecture Spec"}
              </span>
              {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3 space-y-3"
                >
                  {/* Problem Solved if applicable */}
                  {service.problemSolved && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
                      <AlertCircle className="size-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-amber-300">The Problem Solved: </span>
                        {service.problemSolved}
                      </div>
                    </div>
                  )}

                  {/* All Modules in Detail */}
                  <div className="space-y-2">
                    <h5 className="text-[11px] font-mono uppercase tracking-wider text-brand-accent">
                      Complete Module Breakdown
                    </h5>
                    {service.coreConcepts.map((concept, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-surface-2/40 border border-border/40 text-xs">
                        <div className="font-semibold text-foreground mb-1">
                          {concept.title}
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {concept.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture & Performance Metrics if applicable */}
                  {service.architectureDetails && service.architectureDetails.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h5 className="text-[11px] font-mono uppercase tracking-wider text-brand">
                        Architecture & Performance
                      </h5>
                      {service.architectureDetails.map((arch, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-surface-2/30 border border-border/30 text-xs">
                          <span className="font-semibold text-foreground">{arch.title}: </span>
                          <span className="text-[11px] text-muted-foreground">{arch.description}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {service.techStack.map((tech) => (
              <span key={tech} className="tech-chip bg-surface-2/70 text-muted-foreground text-[10px]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Pricing & Action Button */}
        <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-muted-foreground truncate">
            {service.pricingModel}
          </div>

          <a
            href={service.actionUrl || '#contact'}
            target={service.actionUrl?.startsWith('http') ? '_blank' : undefined}
            rel={service.actionUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={
              isDev
                ? "btn-ghost-bit text-xs py-2.5 px-4.5 justify-center hover:border-amber-400/50 hover:text-amber-300"
                : "btn-bit text-xs py-2.5 px-5 justify-center shadow-lg"
            }
          >
            {service.actionLabel} <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
}

export function SubscriptionServicesSection() {
  return (
    <section id="services" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 eyebrow mb-4">
            <Layers className="size-3.5 text-brand-accent" />
            <span>Proprietary Subscription Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4">
            <GradientText>Codiva Subscription Services</GradientText>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Specialized vertical SaaS platforms, quantitative trading engines, and autonomous AI systems built, operated, and maintained by Codiva on subscription.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {subscriptionServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
