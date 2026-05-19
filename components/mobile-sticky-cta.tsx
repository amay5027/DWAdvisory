"use client";

import { useEffect, useState } from "react";

/**
 * Mobile-only sticky CTA bar at the bottom of the viewport.
 * Slides in when the hero scrolls out of view, slides out when it
 * comes back. Stays out of the way of the bottom masthead.
 */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Visible once less than 25% of the hero is in view.
        setVisible(entry.intersectionRatio < 0.25);
      },
      { threshold: [0, 0.25, 0.5, 1] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={[
        "fixed inset-x-0 bottom-0 z-40 md:hidden transition-all duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <div className="bg-[var(--color-cream)]/95 backdrop-blur-md border-t border-[var(--color-line)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href="#contact"
          className="group flex items-center justify-center gap-2.5 w-full rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] py-3.5 text-[14.5px] font-medium shadow-[var(--shadow-card)] active:bg-[var(--color-navy-deep)]"
        >
          Book a 30-minute call
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </a>
      </div>
    </div>
  );
}
