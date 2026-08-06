"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Monitor, Smartphone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LivePreview } from "@/components/landing/Showcase/LivePreview";
import type { Demo } from "@/data/demos";

export function PreviewModal({ demo, onClose }: { demo: Demo | null; onClose: () => void }) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  return (
    <AnimatePresence>
      {demo && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-background/85 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 px-5 py-4">
            <div>
              <p className="font-display text-lg tracking-tight text-foreground">{demo.title}</p>
              <p className="text-xs tracking-[0.2em] text-brand-accent uppercase">
                {demo.category}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="device-toggle">
                <button
                  type="button"
                  onClick={() => setDevice("desktop")}
                  className={cn("device-btn", device === "desktop" && "device-btn-active")}
                  aria-label="Desktop preview"
                >
                  <Monitor className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setDevice("mobile")}
                  className={cn("device-btn", device === "mobile" && "device-btn-active")}
                  aria-label="Mobile preview"
                >
                  <Smartphone className="size-4" />
                </button>
              </div>
              <a
                href={demo.url}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost-bit"
              >
                Open site <ArrowUpRight className="size-4" />
              </a>
              <button type="button" onClick={onClose} className="icon-link" aria-label="Close">
                <X className="size-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-8">
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "h-full w-full overflow-hidden rounded-2xl border border-border/70 bg-surface-2 shadow-glow",
                device === "mobile" && "aspect-[9/19] h-auto max-h-full w-auto max-w-[380px]",
              )}
            >
              <LivePreview
                url={demo.url}
                eager
                interactive
                width={device === "mobile" ? 390 : 1440}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
