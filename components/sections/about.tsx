import { about, site } from "@/lib/content";
import { DiamondMotif } from "../diamond-motif";
import { SectionChapter } from "../section-chapter";

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-32 bg-[var(--color-cream-warm)]">
      <div className="container-page grid md:grid-cols-[1fr_1.5fr] gap-14 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <PortraitPlaceholder />
        </div>

        <div className="order-1 md:order-2">
          <SectionChapter numeral="II" />
          <span className="kicker">{about.kicker}</span>
          <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.25rem)]">
            {about.heading}
          </h2>

          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-[var(--color-ink)]">
            {about.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Badge>FCCA · Fellow, ACCA</Badge>
            <Badge>20+ years in practice</Badge>
            <Badge>Direct access to David</Badge>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] px-7 py-3.5 text-[15px] font-medium hover:bg-[var(--color-navy-deep)] transition-colors"
            >
              Speak to {site.principal.name.split(" ")[0]}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-[var(--color-line)] text-[var(--color-navy)] text-[13px] font-medium px-4 py-2">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)]" aria-hidden />
      {children}
    </span>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="relative max-w-md mx-auto md:mx-0">
      {/* Decorative offset frame, gives it editorial weight */}
      <div
        aria-hidden
        className="absolute -top-3 -left-3 right-6 bottom-6 rounded-2xl border border-[var(--color-navy)]/15"
      />

      <div className="relative">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-navy-deep)] relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/founder.jpg"
            alt="David Whiteman FCCA, founder of DW Advisory"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(1) contrast(1.05) brightness(0.98)" }}
            loading="lazy"
            decoding="async"
          />
          {/* Subtle navy duotone wash */}
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-color"
            style={{ background: "var(--color-navy)", opacity: 0.18 }}
          />
        </div>

        {/* Editorial caption strip beneath the photo */}
        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <div className="font-display italic text-[22px] text-[var(--color-navy)] leading-tight">
              David Whiteman, <span className="not-italic">FCCA</span>
            </div>
            <div className="mt-2 text-[11px] tracking-[0.22em] uppercase text-[var(--color-ink-muted)]">
              Founder, DW Advisory
            </div>
          </div>
          <DiamondMotif size={26} accentIndex={2} />
        </div>

        {/* Plate number, like a magazine figure caption */}
        <div className="mt-3 text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink-muted)]/70">
          Plate 01 · The principal
        </div>
      </div>
    </div>
  );
}
