"use client";

import { ArrowUpRight } from "lucide-react";
import { GradientText } from "@/components/landing/Bits/GradientText";
import { MagneticLink } from "@/components/landing/Bits/MagneticButton";

export function Navbar() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
      <a href="/" className="font-display text-lg tracking-tight">
        <GradientText>Codiva</GradientText>
      </a>
      <nav className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="/#projects" className="nav-link hidden sm:inline">
          Projects
        </a>
        <a href="/#team" className="nav-link hidden sm:inline">
          Team
        </a>
        <MagneticLink href="/#contact" className="btn-bit">
          Start a project <ArrowUpRight className="size-4" />
        </MagneticLink>
      </nav>
    </header>
  );
}
