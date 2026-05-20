"use client";

import { useEffect, useState } from "react";

/**
 * Hairline scroll progress bar pinned to the very top of the viewport.
 * Sits above the sticky header. Premium magazine-style signal.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      setProgress(next);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 inset-x-0 h-[2px] z-[60] pointer-events-none"
    >
      <div
        className="h-full bg-[var(--color-teal)] origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
