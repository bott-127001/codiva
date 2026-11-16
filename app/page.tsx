"use client";

import { Aurora } from '@/components/landing/Bits/Aurora';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { SubscriptionServicesSection } from '@/components/services-section';
import { ProjectsSection } from '@/components/projects-section';
import { TeamSection } from '@/components/team-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="landing-page-theme relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Aurora />
      <Navigation />
      <HeroSection />
      <SubscriptionServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
