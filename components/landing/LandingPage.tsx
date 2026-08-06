"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Aurora } from "@/components/landing/Bits/Aurora";
import { GradientText } from "@/components/landing/Bits/GradientText";
import { SplitText } from "@/components/landing/Bits/SplitText";
import { MagneticLink } from "@/components/landing/Bits/MagneticButton";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { categories, demos, type Demo } from "@/data/demos";
import { cn } from "@/lib/utils";

// Lazy load below-the-fold or interactive elements to optimize bundle size and hydration
const Marquee = dynamic(() => import("@/components/landing/Bits/Marquee").then(m => m.Marquee), { ssr: false });
const DemoCard = dynamic(() => import("@/components/landing/Showcase/DemoCard").then(m => m.DemoCard), { ssr: false });
const PreviewModal = dynamic(() => import("@/components/landing/Showcase/PreviewModal").then(m => m.PreviewModal), { ssr: false });

export function LandingPage() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<Demo | null>(null);

  const list = useMemo(
    () => (active === "All" ? demos : demos.filter((d) => d.category === active)),
    [active],
  );
  const liveCount = demos.filter((d) => !d.placeholder).length;

  return (
    <main className="landing-page-theme relative min-h-screen overflow-x-clip bg-background">
      <Aurora />

      <Navbar />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          <Sparkles className="size-3.5 text-brand-accent" />
          {liveCount} live demos · click any frame
        </motion.div>

        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
          <SplitText text="See our" />
          <GradientText className="block">
            <SplitText text="designs in motion." delay={0.25} />
          </GradientText>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Not screenshots. Every card below is the real site, running live. Hover, expand, and
          click through the work we ship for founders and studios.
        </motion.p>
      </section>

      <Marquee
        className="relative z-10 border-y border-border/60 bg-surface-1/60"
        items={["React", "Next.js", "TailwindCSS", "Framer Motion", "Node.js", "MongoDB", "GA4"]}
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn("filter-chip", active === cat && "filter-chip-active")}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {list.map((demo, i) => (
            <DemoCard key={demo.id} demo={demo} index={i} onOpen={setOpen} />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-28 text-center">
        <h2 className="font-display text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
          Want one of these <GradientText>built for you?</GradientText>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Tell us the idea. We'll come back with a design direction and a live demo you can share
          with your team.
        </p>
        <MagneticLink
          href="/#contact"
          className="btn-bit mt-9 inline-flex text-base"
          magnet={22}
        >
          Talk to Codiva <ArrowUpRight className="size-4" />
        </MagneticLink>
      </section>

      <Footer />

      <PreviewModal demo={open} onClose={() => setOpen(null)} />
    </main>
  );
}
