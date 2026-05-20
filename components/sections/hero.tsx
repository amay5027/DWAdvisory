import { hero, site } from "@/lib/content";
import { DiamondGlyph } from "../diamond-motif";

const HEADER_OFFSET = "72px";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden flex flex-col"
      style={{ height: `calc(100svh - ${HEADER_OFFSET})`, minHeight: "560px" }}
    >
      <BackgroundOrnament />

      <div className="container-page relative flex-1 flex flex-col justify-center py-6 md:py-10">
        <div className="max-w-[820px]">
          <span className="kicker anim-fade-up-1">{hero.kicker}</span>

          <h1 className="display mt-5 text-[clamp(1.625rem,4.8vw,3.75rem)] leading-[1.08] [text-wrap:balance] anim-fade-up-2">
            {hero.headline.line1}
            <br />
            <span className="display-italic">{hero.headline.accent}</span>
          </h1>

          <p className="mt-6 max-w-[36rem] text-[16px] md:text-[17px] leading-[1.55] text-[var(--color-ink-muted)] [text-wrap:pretty] anim-fade-up-3">
            {hero.sub}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-x-5 anim-fade-up-4">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center sm:justify-start gap-2.5 rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] px-6 py-3.5 sm:py-3 text-[14.5px] font-medium hover:bg-[var(--color-navy-deep)] transition-all shadow-[var(--shadow-card)] hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center sm:justify-start gap-2 px-2 py-2 text-[14.5px] font-medium text-[var(--color-navy)] underline underline-offset-[6px] decoration-[var(--color-teal)] decoration-2 hover:decoration-[var(--color-navy)] transition-colors"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <div className="anim-fade-up-5">
        <BottomMasthead />
      </div>
    </section>
  );
}

function BottomMasthead() {
  const items = [
    "FCCA, 20+ years",
    "Replies within one working day",
    "Fixed monthly fees",
  ];

  return (
    <div className="relative shrink-0 border-t border-[var(--color-line)] bg-[var(--color-cream)]/75 backdrop-blur-sm">
      <div className="container-page py-3 md:py-3.5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-7 gap-y-2.5">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/founder.jpg"
              alt={site.principal.name}
              className="w-9 h-9 rounded-full object-cover ring-1 ring-[var(--color-line)]"
              style={{ filter: "grayscale(1) contrast(1.05)" }}
              loading="eager"
              decoding="async"
            />
            <div className="leading-tight">
              <div className="text-[13px] text-[var(--color-navy)]">
                <span className="font-medium">{site.principal.name}</span>
                <span className="text-[var(--color-ink-muted)]">
                  {", "}
                  {site.principal.credentials}
                </span>
              </div>
              <div className="text-[10.5px] tracking-[0.18em] uppercase text-[var(--color-ink-muted)] mt-0.5">
                Founder, {site.legalName}
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-[11px] tracking-[0.16em] uppercase text-[var(--color-ink-muted)]">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2.5 whitespace-nowrap">
                <DiamondGlyph size={6} color="var(--color-teal)" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function BackgroundOrnament() {
  return (
    <>
      <div
        aria-hidden
        className="absolute -top-48 -right-48 w-[760px] h-[760px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-teal) 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[12%] -left-48 w-[480px] h-[480px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-navy) 0%, transparent 70%)",
        }}
      />
      <HeroAnimation />
    </>
  );
}

/**
 * Three diamonds float into the brand's signature trio formation on page
 * load, then a slow concentric ripple emanates from the centre.
 * Things come together, and stay calm.
 */
function HeroAnimation() {
  const NAVY = "#002066";
  const TEAL = "#0088a8";

  // Brand formation: top diamond, bottom-left, bottom-right (teal accent).
  // Anchored just off-centre, biased to the right so it sits behind the
  // hero's empty right-hand column on desktop without obscuring the
  // headline on mobile.
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
    >
      <svg
        viewBox="0 0 600 480"
        className="w-[140%] sm:w-[100%] max-w-[820px] -mr-12 sm:-mr-20 md:-mr-32 lg:-mr-44"
        style={{ filter: "blur(0.2px)" }}
      >
        {/* Ripples — rendered first so diamonds overlap them.
            Group opacity 0.32 keeps the peak visible without being garish. */}
        <g style={{ opacity: 0.32 }}>
          <circle
            cx="300"
            cy="240"
            r="80"
            fill="none"
            stroke={TEAL}
            strokeWidth="2.5"
            className="hero-ripple hero-ripple-1"
          />
          <circle
            cx="300"
            cy="240"
            r="80"
            fill="none"
            stroke={TEAL}
            strokeWidth="2.5"
            className="hero-ripple hero-ripple-2"
          />
          <circle
            cx="300"
            cy="240"
            r="80"
            fill="none"
            stroke={TEAL}
            strokeWidth="2.5"
            className="hero-ripple hero-ripple-3"
          />
        </g>

        {/* Diamond trio — formation matches the brand mark. Atmospheric
            opacity so it sits behind the headline without competing. */}
        <g style={{ opacity: 0.16 }}>
          {/* Top diamond (navy) */}
          <rect
            x="270"
            y="120"
            width="60"
            height="60"
            transform="rotate(45 300 150)"
            fill="none"
            stroke={NAVY}
            strokeWidth="10"
            className="hero-diamond hero-diamond-top"
          />
          {/* Bottom-left diamond (navy) */}
          <rect
            x="200"
            y="220"
            width="60"
            height="60"
            transform="rotate(45 230 250)"
            fill="none"
            stroke={NAVY}
            strokeWidth="10"
            className="hero-diamond hero-diamond-left"
          />
          {/* Bottom-right diamond (teal — the brand's signature accent) */}
          <rect
            x="340"
            y="220"
            width="60"
            height="60"
            transform="rotate(45 370 250)"
            fill="none"
            stroke={TEAL}
            strokeWidth="10"
            className="hero-diamond hero-diamond-right"
          />
        </g>
      </svg>
    </div>
  );
}
