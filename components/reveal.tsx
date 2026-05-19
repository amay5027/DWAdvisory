"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Drop the translate, only fade. Useful for full-bleed dark sections. */
  fadeOnly?: boolean;
  /** Render as a different element instead of div. */
  as?: "div" | "section";
};

/**
 * Reveals children on first intersection with the viewport.
 * Respects prefers-reduced-motion via the global CSS reset in globals.css.
 */
export function Reveal({ children, delay = 0, className = "", fadeOnly, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={[
        "transition-all ease-[cubic-bezier(0.2,0.7,0.2,1)] duration-[900ms] will-change-transform",
        visible
          ? "opacity-100 translate-y-0"
          : fadeOnly
            ? "opacity-0"
            : "opacity-0 translate-y-5",
        className,
      ].join(" ")}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
