"use client";

import { useEffect, useState } from "react";
import { DiamondMotif } from "./diamond-motif";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-[var(--color-line)]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="container-page flex items-center justify-between py-4 md:py-5">
        <a href="#top" className="flex items-center gap-3 group" aria-label={`${site.name} home`}>
          <DiamondMotif size={36} />
          <div className="leading-none">
            <div className="font-display text-[1.15rem] tracking-tight text-[var(--color-navy)] font-medium">
              {site.name}
            </div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-muted)] mt-1">
              {site.strapline}
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-ink)] hover:text-[var(--color-teal)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] text-sm px-5 py-2.5 hover:bg-[var(--color-navy-deep)] transition-colors"
          >
            Book a call
            <span aria-hidden>→</span>
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-line)] text-[var(--color-navy)]"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
            <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-line)] bg-[var(--color-cream)]">
          <nav className="container-page flex flex-col py-4 gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[var(--color-ink)] border-b border-[var(--color-line)] last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] py-3"
            >
              Book a call
              <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
