import { testimonials, testimonialsIntro } from "@/lib/content";
import { SectionChapter } from "../section-chapter";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="container-page">
        <header className="max-w-2xl">
          <SectionChapter numeral="V" />
          <span className="kicker">{testimonialsIntro.kicker}</span>
          <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.06] [text-wrap:balance]">
            {testimonialsIntro.heading.pre}
            <span className="display-italic">{testimonialsIntro.heading.accent}</span>
          </h2>
        </header>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={t.role + t.org}
              className={[
                "relative p-7 md:p-8 rounded-3xl flex flex-col",
                i === 1
                  ? "bg-[var(--color-navy)] text-white md:translate-y-6"
                  : "bg-[var(--color-cream)] ring-1 ring-[var(--color-line)] text-[var(--color-ink)]",
              ].join(" ")}
            >
              <Quote tone={i === 1 ? "light" : "dark"} />

              <blockquote
                className={[
                  "mt-5 font-display text-[20px] md:text-[22px] leading-[1.35] [text-wrap:balance]",
                  i === 1 ? "text-white" : "text-[var(--color-navy)]",
                ].join(" ")}
              >
                {t.quote}
              </blockquote>

              <figcaption
                className={[
                  "mt-8 pt-6 border-t",
                  i === 1 ? "border-white/15" : "border-[var(--color-line)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "block font-medium",
                    i === 1 ? "text-white" : "text-[var(--color-navy)]",
                  ].join(" ")}
                >
                  {t.role}
                </span>
                <span
                  className={[
                    "block text-[13px] mt-0.5",
                    i === 1 ? "text-white/70" : "text-[var(--color-ink-muted)]",
                  ].join(" ")}
                >
                  {t.org}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-[11.5px] tracking-[0.04em] text-[var(--color-ink-muted)] max-w-xl mx-auto">
          {testimonialsIntro.disclaimer}
        </p>
      </div>
    </section>
  );
}

function Quote({ tone }: { tone: "light" | "dark" }) {
  const fill = tone === "light" ? "rgba(255,255,255,0.18)" : "var(--color-teal)";
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill={fill} aria-hidden>
      <path d="M0 32V18C0 8.5 5.5 1.5 16 0v6C9 8 6 12 6 18h10v14H0Zm24 0V18C24 8.5 29.5 1.5 40 0v6c-7 2-10 6-10 12h10v14H24Z" />
    </svg>
  );
}
