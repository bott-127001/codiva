"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GradientText({
  children,
  className,
  animate = true,
}: {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}) {
  return (
    <span className={cn("gradient-text", animate && "gradient-text-animated", className)}>
      {children}
    </span>
  );
}
