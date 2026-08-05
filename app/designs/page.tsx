"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProjectCard } from '@/components/project-card';
import { projects, type Project } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Layers, Cpu, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DesignsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'ongoing' | 'planned'>('all');

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hoverQuery = window.matchMedia('(hover: none)');

    const checkPreferences = () => {
      setShouldAnimate(!motionQuery.matches && !hoverQuery.matches);
    };

    checkPreferences();

    motionQuery.addEventListener('change', checkPreferences);
    hoverQuery.addEventListener('change', checkPreferences);

    return () => {
      motionQuery.removeEventListener('change', checkPreferences);
      hoverQuery.removeEventListener('change', checkPreferences);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!shouldAnimate) return;
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty('--page-mouse-x', `${e.clientX}px`);
    container.style.setProperty('--page-mouse-y', `${e.clientY}px`);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'all') return true;
    return project.status === activeTab;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden bg-background text-foreground"
    >
      <Navigation />

      {/* Page-wide Cursor Spotlight Glow */}
      {shouldAnimate && (
        <>
          {/* Saturated color spotlight */}
          <div
            className="pointer-events-none fixed inset-0 z-0 opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(525px circle at var(--page-mouse-x, -9999px) var(--page-mouse-y, -9999px), rgba(167, 139, 250, 0.35) 0%, rgba(56, 189, 248, 0.22) 40%, rgba(52, 211, 153, 0.08) 75%, transparent 100%)`,
            }}
          />
          {/* Spotlight-reactive gray grid pattern */}
          <div
            className="pointer-events-none fixed inset-0 z-0 opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(156, 163, 175, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(156, 163, 175, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              WebkitMaskImage: `radial-gradient(412px circle at var(--page-mouse-x, -9999px) var(--page-mouse-y, -9999px), black 0%, transparent 100%)`,
              maskImage: `radial-gradient(412px circle at var(--page-mouse-x, -9999px) var(--page-mouse-y, -9999px), black 0%, transparent 100%)`,
            }}
          />
        </>
      )}

      {/* Floating Animated Shapes in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-40 left-10 w-40 h-40 bg-codiva-blue/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-60 h-60 bg-codiva-purple/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-48 h-48 bg-codiva-green/10 rounded-full blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-codiva-blue transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-codiva-purple/10 text-codiva-purple text-xs font-semibold uppercase tracking-wider mb-4 border border-codiva-purple/20">
              <Palette className="h-3 w-3" />
              Creative Showcase
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 gradient-text tracking-tight">
              Design & Development Gallery
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
              Explore our full collection of client interfaces, responsive platforms, 
              and technical achievements. Each project is crafted with visual excellence 
              and state-of-the-art full-stack architecture.
            </p>
          </motion.div>

          {/* Core Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-codiva-blue" />
              <span>Glassmorphic Interfaces</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-codiva-purple" />
              <span>Curated Palettes</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-codiva-green" />
              <span>Full-Stack Implementations</span>
            </div>
          </motion.div>
        </div>

        {/* Project Tabs & Filter Gallery */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-lg grid-cols-4 p-1 h-12">
              <TabsTrigger
                value="all"
                onClick={() => setActiveTab('all')}
                className="text-xs sm:text-sm font-medium data-[state=active]:bg-codiva-blue data-[state=active]:text-white"
              >
                All ({projects.length})
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                onClick={() => setActiveTab('completed')}
                className="text-xs sm:text-sm font-medium data-[state=active]:bg-codiva-blue data-[state=active]:text-white"
              >
                Completed ({projects.filter(p => p.status === 'completed').length})
              </TabsTrigger>
              <TabsTrigger
                value="ongoing"
                onClick={() => setActiveTab('ongoing')}
                className="text-xs sm:text-sm font-medium data-[state=active]:bg-codiva-purple data-[state=active]:text-white"
              >
                Ongoing ({projects.filter(p => p.status === 'ongoing').length})
              </TabsTrigger>
              <TabsTrigger
                value="planned"
                onClick={() => setActiveTab('planned')}
                className="text-xs sm:text-sm font-medium data-[state=active]:bg-codiva-green/80 data-[state=active]:text-white"
              >
                Planned ({projects.filter(p => p.status === 'planned').length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            {filteredProjects.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} glow={true} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg">No projects match the selected filter.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </main>
  );
}
