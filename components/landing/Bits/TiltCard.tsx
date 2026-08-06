"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/** 3D tilt-on-hover wrapper (React Bits "TiltedCard"). */
export function TiltCard({
  children,
  className,
  strength = 9,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-strength, strength]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [strength, -strength]);

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
