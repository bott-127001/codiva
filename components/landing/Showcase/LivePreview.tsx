"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a live site inside a scaled iframe. Only mounts once the frame
 * scrolls into view so a grid of demos doesn't hammer the network.
 */
export function LivePreview({
  url,
  width = 1440,
  className,
  eager = false,
  interactive = false,
}: {
  url: string;
  width?: number;
  className?: string;
  eager?: boolean;
  interactive?: boolean;
}) {
  const holder = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  const [visible, setVisible] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const [stalled, setStalled] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!visible || loaded) return;
    const t = setTimeout(() => setStalled(true), 9000);
    return () => clearTimeout(t);
  }, [visible, loaded]);

  useEffect(() => {
    const el = holder.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setContainerWidth(el.clientWidth);
      setContainerHeight(el.clientHeight);
      setScale(el.clientWidth / width);
    });
    ro.observe(el);
    setContainerWidth(el.clientWidth);
    setContainerHeight(el.clientHeight);
    setScale(el.clientWidth / width);

    let io: IntersectionObserver | undefined;
    if (!eager) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
        { rootMargin: "300px" },
      );
      io.observe(el);
    }
    return () => {
      ro.disconnect();
      io?.disconnect();
    };
  }, [width, eager]);

  return (
    <div ref={holder} className={cn("relative h-full w-full overflow-hidden", className)}>
      {visible ? (
        <iframe
          src={url}
          title={`Live preview of ${url}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          className={cn(
            "absolute top-0 left-0 origin-top-left border-0 transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            interactive ? "pointer-events-auto" : "pointer-events-none",
          )}
          style={{
            width: `${width}px`,
            height: containerHeight && containerWidth
              ? `${Math.round(containerHeight * (width / containerWidth))}px`
              : `${Math.round(width * 1.35)}px`,
            transform: `scale(${scale})`,
          }}
        />
      ) : null}
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center gap-3 bg-surface-2 px-6 text-center">
          {stalled ? (
            <p className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
              This site blocks embedding — open it in a new tab
            </p>
          ) : (
            <span className="loader-ring" />
          )}
        </div>
      )}
    </div>
  );
}
