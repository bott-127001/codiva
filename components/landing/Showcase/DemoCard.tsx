"use client";

import { ArrowUpRight, Expand, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/landing/Bits/SpotlightCard";
import { TiltCard } from "@/components/landing/Bits/TiltCard";
import { LivePreview } from "@/components/landing/Showcase/LivePreview";
import type { Demo } from "@/data/demos";

export function DemoCard({
  demo,
  index,
  onOpen,
}: {
  demo: Demo;
  index: number;
  onOpen: (demo: Demo) => void;
}) {
  const live = Boolean(demo.url) && !demo.placeholder;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard>
        <SpotlightCard className="flex h-full flex-col">
          <div className="browser-chrome">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
            <span className="url-pill">{live ? new URL(demo.url).host : "preview.pending"}</span>
          </div>

          <div className="relative aspect-[16/11] overflow-hidden border-y border-border/60">
            {live ? (
              <>
                <LivePreview url={demo.url} />
                <button
                  type="button"
                  onClick={() => onOpen(demo)}
                  className="preview-overlay"
                  aria-label={`Open live preview of ${demo.title}`}
                >
                  <span className="preview-overlay-cta">
                    <Expand className="size-4" />
                    Open live preview
                  </span>
                </button>
              </>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-surface-2 text-center">
                <Lock className="size-5 text-muted-foreground" />
                <p className="max-w-[20ch] font-display text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  Preview slot open
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl leading-tight tracking-tight text-foreground">
                  {demo.title}
                </h3>
                <p className="mt-1 text-xs tracking-[0.2em] text-brand-accent uppercase">
                  {demo.category} · {demo.year}
                </p>
              </div>
              {live && (
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="icon-link"
                  aria-label={`Visit ${demo.title} in a new tab`}
                >
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{demo.blurb}</p>

            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {demo.stack.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </TiltCard>
    </motion.article>
  );
}
