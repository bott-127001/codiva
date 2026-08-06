"use client";

import { useRef, type ComponentProps } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof motion.a> & { magnet?: number };

/** Anchor that leans toward the cursor (React Bits "Magnet"). */
export function MagneticLink({ className, magnet = 14, children, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });

  return (
    <motion.a
      ref={ref}
      style={{ x, y }}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * magnet * 2);
        y.set(((e.clientY - r.top) / r.height - 0.5) * magnet);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
