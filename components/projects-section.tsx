"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects, type Project } from '@/lib/data';
import { ProjectCard } from './project-card';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProjectsSection() {
  const completedProjects = projects.filter(p => p.status === 'completed');
  const ongoingProjects = projects.filter(p => p.status === 'ongoing');
  
  console.log('Projects loaded:', {
    total: projects.length,
    completed: completedProjects.length,
    ongoing: ongoingProjects.length
  });

  // Debug: Log completed projects and their demo URLs
  console.log('Completed projects with demo URLs:', 
    completedProjects.map(p => ({
      title: p.title,
      demoUrl: p.demoUrl,
      hasDemoUrl: !!p.demoUrl
    }))
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Showcasing our expertise through innovative solutions and cutting-edge technology
          </p>
        </motion.div>

        <Tabs defaultValue="completed" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 p-1 h-12">
              <TabsTrigger 
                value="completed" 
                className="text-sm font-medium data-[state=active]:bg-codiva-blue data-[state=active]:text-white"
              >
                Completed ({completedProjects.length})
              </TabsTrigger>
              <TabsTrigger 
                value="ongoing"
                className="text-sm font-medium data-[state=active]:bg-codiva-purple data-[state=active]:text-white"
              >
                Ongoing ({ongoingProjects.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="completed">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="ongoing">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {ongoingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

console.log('Projects section component loaded');