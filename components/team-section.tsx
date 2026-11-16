"use client";

import { motion } from 'framer-motion';
import { Users, Award, ExternalLink, Sparkles } from 'lucide-react';
import { teamMembers, type TeamMember } from '@/lib/data';
import { SpotlightCard } from '@/components/landing/Bits/SpotlightCard';
import { GradientText } from '@/components/landing/Bits/GradientText';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function TeamMemberCard({ member }: { member: TeamMember }) {
  const isFounder = member.role.toLowerCase().includes('founder') && !member.role.toLowerCase().includes('co-founder');

  return (
    <motion.div variants={cardVariants} className="h-full">
      <SpotlightCard className="p-8 h-full flex flex-col justify-between rounded-3xl bg-surface-1/40 backdrop-blur-xl border-border/60 hover:border-brand/50 transition-all duration-300">
        <div>
          {/* Card Top / Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="eyebrow">
              <Sparkles className="size-3 text-brand-accent" />
              {isFounder ? 'Founder' : 'Co-Founder'}
            </span>
            <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
              Core Leadership
            </span>
          </div>

          {/* Profile Details */}
          <div className="text-left mb-6">
            <h3 className="text-2xl font-bold font-display text-foreground mb-1 tracking-tight">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-brand-accent mb-4">
              {member.role}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {member.bio}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 mb-3">
              Technical Expertise
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {member.skills.map((skill) => (
                <span key={skill} className="tech-chip bg-surface-2/60 text-foreground/90">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        {member.certifications.length > 0 && (
          <div className="pt-6 border-t border-border/50">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 mb-3 flex items-center gap-1.5">
              <Award className="size-3.5 text-brand-accent" />
              Credentials & Certifications
            </h4>
            <div className="space-y-2">
              {member.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-2/40 border border-border/40 hover:border-brand/30 transition-colors"
                >
                  <span className="text-base">{cert.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">
                      {cert.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  {cert.url && (
                    <button
                      onClick={() => window.open(cert.url!, '_blank', 'noopener,noreferrer')}
                      className="p-1 hover:text-brand-accent transition-colors text-muted-foreground"
                    >
                      <ExternalLink className="size-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </SpotlightCard>
    </motion.div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 eyebrow mb-4">
            <Users className="size-3.5 text-brand-accent" />
            <span>Leadership</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4">
            <GradientText>Meet the Founders</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            The visionary engineers and architects driving technology, design, and execution at Codiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
