"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, Calendar, Zap, CheckCircle } from 'lucide-react';
import { projects, type Project } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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

function ProjectCard({ project }: { project: Project }) {
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
      <Card className="glass-card hover:shadow-xl transition-all duration-300 h-full border-0 overflow-hidden group">
        {/* Project Image */}
        {project.image && (
          <div className="relative overflow-hidden h-48">
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

        <CardContent className="p-6 flex flex-col h-full">
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
      </Card>
    </motion.div>
  );
}

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