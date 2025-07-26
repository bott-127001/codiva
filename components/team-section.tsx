"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { teamMembers, type TeamMember } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function TeamMemberCard({ member }: { member: TeamMember }) {
  // Removed handleSocialClick and all social links rendering

  return (
    <motion.div variants={cardVariants} whileHover={{ y: -8 }} className="h-full">
      <Card className="glass-card hover:shadow-xl transition-all duration-300 h-full border-0 bg-card-gradient">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Avatar and basic info */}
          <div className="flex flex-col items-center text-center mb-6">
            {/* Avatar removed */}
            <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
            <p className="text-codiva-purple font-medium mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6 flex-grow">
            <h4 className="text-sm font-semibold text-foreground mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-codiva-blue/10 text-codiva-blue hover:bg-codiva-blue/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {member.certifications.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">Certifications</h4>
              <div className="space-y-2">
                {member.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-lg">{cert.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.url && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 flex-shrink-0"
                        onClick={() => window.open(cert.url!, '_blank', 'noopener,noreferrer')}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Removed Social Links section */}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function TeamSection() {
  console.log('Rendering team section with', teamMembers.length, 'members');

  return (
    <section id="team" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            The passionate individuals behind Codiva's innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

console.log('Team section component loaded');