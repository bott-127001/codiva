"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Zap, CheckCircle } from 'lucide-react';
import { type Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  glow?: boolean;
}

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

export function ProjectCard({ project, glow = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!glow) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hoverQuery = window.matchMedia('(hover: none)');

    const checkPreferences = () => {
      // shouldAnimate is true if reduced motion is NOT preferred and the device DOES support hover (mouse/trackpad pointer)
      setShouldAnimate(!motionQuery.matches && !hoverQuery.matches);
    };

    checkPreferences();

    motionQuery.addEventListener('change', checkPreferences);
    hoverQuery.addEventListener('change', checkPreferences);

    return () => {
      motionQuery.removeEventListener('change', checkPreferences);
      hoverQuery.removeEventListener('change', checkPreferences);
    };
  }, [glow]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glow || !shouldAnimate) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleLinkClick = (url: string, type: string) => {
    console.log(`Opening ${type} for project ${project.title}:`, url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getStatusConfig = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return {
          icon: CheckCircle,
          text: 'Completed',
          className: 'bg-codiva-green/10 text-codiva-green border-codiva-green/20'
        };
      case 'ongoing':
        return {
          icon: Zap,
          text: 'In Progress',
          className: 'bg-codiva-purple/10 text-codiva-purple border-codiva-purple/20'
        };
      case 'planned':
        return {
          icon: Calendar,
          text: 'Planned',
          className: 'bg-codiva-blue/10 text-codiva-blue border-codiva-blue/20'
        };
    }
  };

  const statusConfig = getStatusConfig(project.status);
  const StatusIcon = statusConfig.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative h-full p-[1px] rounded-xl overflow-hidden group bg-white/20 dark:bg-white/10 transition-all duration-300"
      >
        {/* Glow Border Effect */}
        {glow && shouldAnimate && (
          <div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(165px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(167, 139, 250, 0.95) 0%, rgba(56, 189, 248, 0.7) 50%, transparent 100%)`,
            }}
          />
        )}

        <Card className="glass-card hover:shadow-xl transition-all duration-300 h-full border-0 overflow-hidden relative z-10 flex flex-col bg-background/90 dark:bg-background/95 backdrop-blur-sm">
          {/* Background spotlight glow inside the card */}
          {glow && shouldAnimate && (
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(262px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(167, 139, 250, 0.22) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 80%)`,
              }}
            />
          )}

          <div className="relative z-10 flex flex-col h-full flex-grow">
            {/* Project Image */}
            {project.image && (
              <div className="relative overflow-hidden h-48 flex-shrink-0">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="outline"
                    className={`${statusConfig.className} backdrop-blur-sm`}
                  >
                    <StatusIcon className="h-3 w-3 mr-1" />
                    {statusConfig.text}
                  </Badge>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-codiva-blue to-codiva-purple text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
            )}

            <CardContent className="p-6 flex flex-col flex-grow">
              {/* Category */}
              <div className="mb-3">
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>

              {/* Title and Description */}
              <div className="mb-4">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-codiva-blue transition-colors cursor-pointer hover:text-codiva-blue">
                      {project.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-codiva-blue transition-colors">
                    {project.title}
                  </h3>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs bg-background/50 hover:bg-codiva-blue/10 hover:text-codiva-blue hover:border-codiva-blue/20 transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                {/* Test button - always visible */}
                <Button
                  size="sm"
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold"
                >
                  TEST BUTTON
                </Button>
                
                {project.demoUrl && (
                  <Button
                    size="sm"
                    onClick={() => {
                      console.log('Opening project URL:', project.demoUrl);
                      handleLinkClick(project.demoUrl!, 'project');
                    }}
                    className="flex-1 bg-gradient-to-r from-codiva-blue to-codiva-purple hover:from-codiva-blue/90 hover:to-codiva-purple/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                )}
                {!project.demoUrl && (
                  <div className="text-xs text-muted-foreground text-center w-full py-2">
                    Project link coming soon
                  </div>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleLinkClick(project.githubUrl!, 'GitHub')}
                    className="flex-1 border-codiva-purple text-codiva-purple hover:bg-codiva-purple hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                )}
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
