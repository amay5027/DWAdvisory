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

  // Lock body scroll when overlay is open.
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close on escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-[var(--color-line)]"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="container-page flex items-center justify-between py-4 md:py-5">
          <a
            href="#top"
            className="flex items-center gap-3 group"
            aria-label={`${site.name} home`}
          >
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
                <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div
        aria-hidden={!open}
        className={[
          "md:hidden fixed inset-0 z-[55] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[var(--color-cream)]/97 backdrop-blur-xl" />

        <div className="relative h-full flex flex-col">
          {/* Top bar mirrors the sticky header */}
          <div className="container-page flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <DiamondMotif size={32} />
              <div className="leading-none">
                <div className="font-display text-[1.05rem] text-[var(--color-navy)] font-medium">
                  {site.name}
                </div>
                <div className="text-[9px] tracking-[0.22em] uppercase text-[var(--color-ink-muted)] mt-1">
                  {site.strapline}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-line)] text-[var(--color-navy)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Editorial menu list */}
          <nav className="container-page flex-1 flex flex-col justify-center -mt-12">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[var(--color-ink-muted)] mb-6">
              Index
            </div>
            <ul className="space-y-2">
              {nav.map((item, i) => (
                <li
                  key={item.href}
                  className={[
                    "transition-all duration-500",
                    open
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-3",
                  ].join(" ")}
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 border-b border-[var(--color-line)]"
                  >
                    <span className="font-display italic text-[var(--color-teal)] text-base tabular-nums w-7 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="font-display text-[2rem] leading-tight text-[var(--color-navy)] group-active:text-[var(--color-teal)] transition-colors">
                      {item.label}
                    </span>
                    <span
                      aria-hidden
                      className="ml-auto text-[var(--color-ink-muted)] group-active:text-[var(--color-teal)] transition-colors"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer with direct contact */}
          <div className="container-page pb-10 pt-6 border-t border-[var(--color-line)]">
            <div className="text-[10px] tracking-[0.24em] uppercase text-[var(--color-ink-muted)] mb-4">
              Or skip the menu
            </div>
            <div className="space-y-1">
              <a
                href={`mailto:${site.contact.email}`}
                className="block font-display text-[18px] text-[var(--color-navy)] break-all"
              >
                {site.contact.email}
              </a>
              <a
                href={site.contact.phoneHref}
                className="block font-display text-[18px] text-[var(--color-navy)]"
              >
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
