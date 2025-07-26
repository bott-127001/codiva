"use client";

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { TeamSection } from '@/components/team-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  console.log('Codiva portfolio page loaded');
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
