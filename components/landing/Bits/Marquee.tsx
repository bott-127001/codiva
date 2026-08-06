"use client";

import { cn } from "@/lib/utils";

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("marquee-mask relative overflow-hidden", className)}>
      <div className="marquee-track flex w-max items-center gap-10 py-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-sm tracking-[0.28em] text-muted-foreground uppercase"
          >
            {item}
            <span className="text-brand-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
