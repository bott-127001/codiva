"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Per-character reveal, React Bits "SplitText" style. */
export function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {text.split(" ").map((word, wi) => (
        <span key={`${word}-${wi}`} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${char}-${ci}`}
              aria-hidden
              className="inline-block"
              initial={{ opacity: 0, y: "0.45em", rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + (wi * 4 + ci) * 0.022,
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </span>
  );
}
