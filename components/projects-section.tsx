"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle, FolderGit2, Sparkles, ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { SpotlightCard } from '@/components/landing/Bits/SpotlightCard';
import { GradientText } from '@/components/landing/Bits/GradientText';

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function ProjectCard({ project }: { project: Project }) {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div variants={cardVariants} className="h-full">
      <SpotlightCard className="h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-surface-1/40 backdrop-blur-xl border border-border/60 hover:border-brand/50 transition-all duration-300">
        <div>
          {/* Simulated Browser Chrome */}
          <div className="browser-chrome border-b border-border/50 bg-surface-1/80">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
            <span className="url-pill truncate max-w-[220px]">
              {project.demoUrl ? project.demoUrl.replace(/^https?:\/\//, '') : project.title}
            </span>
          </div>

          {/* Project Image */}
          {project.image && (
            <div className="relative h-56 w-full overflow-hidden bg-surface-2/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/spot:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />

              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                  <CheckCircle className="size-3" /> Completed Client
                </span>
              </div>

              {project.featured && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand text-white shadow-lg backdrop-blur-md">
                    Featured
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <div className="mb-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-brand-accent">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-3 group-hover/spot:text-brand-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-chip bg-surface-2/60 text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 mt-auto flex items-center gap-3">
          {project.demoUrl ? (
            <button
              onClick={() => handleLinkClick(project.demoUrl!)}
              className="btn-bit text-xs py-2.5 px-5 flex-1 justify-center shadow-lg"
            >
              <ExternalLink className="size-3.5" /> Visit Live Website
            </button>
          ) : (
            <div className="text-xs text-muted-foreground/70 py-2.5 w-full text-center border border-dashed border-border/60 rounded-full">
              Live link coming soon
            </div>
          )}

          {project.githubUrl && (
            <button
              onClick={() => handleLinkClick(project.githubUrl!)}
              className="btn-ghost-bit text-xs py-2.5 px-3.5 hover:text-white"
              title="View Source"
            >
              <Github className="size-3.5" />
            </button>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export function ProjectsSection() {
  // Only show completed client projects
  const completedProjects = projects.filter((p) => p.status === 'completed');

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 eyebrow mb-4">
            <FolderGit2 className="size-3.5 text-brand-accent" />
            <span>Client Showcase</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4">
            <GradientText>Completed Client Sites</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Production web platforms built, optimized, and deployed for our clients.
          </p>
        </motion.div>

        {/* Completed Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {completedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Prominent CTA below: "See Our Designs" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-center text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Looking for more interactive templates, concepts, and live UI frames?
          </p>
          <a
            href="/portfolio"
            className="btn-bit text-sm sm:text-base py-3.5 px-8 inline-flex items-center gap-2.5 shadow-2xl hover:scale-105 transition-all"
          >
            <Sparkles className="size-4 text-brand-accent" />
            See Our Designs
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
