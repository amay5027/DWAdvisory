import { approach } from "@/lib/content";
import { SectionChapter } from "../section-chapter";

export function Approach() {
  return (
    <section id="approach" className="relative py-16 md:py-32">
      <div className="container-page grid md:grid-cols-[1fr_1.25fr] gap-12 md:gap-20 items-start">
        <div className="md:sticky md:top-32">
          <SectionChapter numeral="III" />
          <span className="kicker">{approach.kicker}</span>
          <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.25rem)]">
            {approach.heading.pre}
            <span className="display-italic">{approach.heading.accent}</span>
            {approach.heading.post}
          </h2>
        </div>

        <div>
          <p className="text-[19px] md:text-[20px] leading-relaxed text-[var(--color-ink)]">
            {approach.body}
          </p>

          <figure className="mt-12 pl-6 md:pl-10 border-l-2 border-[var(--color-teal)]">
            <blockquote className="font-display italic text-[22px] md:text-[28px] leading-[1.3] text-[var(--color-navy)]">
              &ldquo;{approach.pullQuote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-[12px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
              {approach.pullQuoteAttribution}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
