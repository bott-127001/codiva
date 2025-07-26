"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Zap, Users } from 'lucide-react';

export function HeroSection() {
  const handleScrollToProjects = () => {
    console.log('Scrolling to projects section');
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    console.log('Scrolling to contact section');
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10 dark:opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/50"></div>
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-codiva-blue/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-codiva-purple/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Codiva
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-8 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Code Driven by Vision
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A startup of passionate full-stack developers and digital marketers creating 
            scalable, modern web solutions that drive business growth and user engagement.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
              <Code className="h-5 w-5 text-codiva-blue" />
              <span>Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
              <Zap className="h-5 w-5 text-codiva-purple" />
              <span>Modern Technologies</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
              <Users className="h-5 w-5 text-codiva-green" />
              <span>Expert Team</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="bg-codiva-blue hover:bg-codiva-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Our Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToContact}
              className="border-2 border-codiva-purple text-codiva-purple hover:bg-codiva-purple hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('Hero section component loaded');