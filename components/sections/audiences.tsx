import { audiences, audiencesIntro } from "@/lib/content";
import { SectionChapter } from "../section-chapter";

const NUMERALS = ["I", "II", "III"] as const;

export function Audiences() {
  return (
    <section id="audiences" className="relative py-16 md:py-32">
      <div className="container-page">
        <header className="max-w-3xl mb-14 md:mb-20">
          <SectionChapter numeral="I" />
          <span className="kicker">{audiencesIntro.kicker}</span>
          <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.06] [text-wrap:balance]">
            {audiencesIntro.heading.pre}
            <span className="display-italic">{audiencesIntro.heading.accent}</span>
          </h2>
        </header>

        <div className="border-t border-[var(--color-line)]">
          {audiences.map((aud, i) => (
            <AudienceRow
              key={aud.title}
              numeral={NUMERALS[i]}
              title={aud.title}
              sectorLabel={aud.sectorLabel}
              body={aud.body}
              questions={aud.questions}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceRow({
  numeral,
  title,
  sectorLabel,
  body,
  questions,
}: {
  numeral: string;
  title: string;
  sectorLabel: string;
  body: string;
  questions: readonly string[];
}) {
  return (
    <article className="group relative border-b border-[var(--color-line)]">
      <div className="grid md:grid-cols-[80px_1fr_1fr] gap-y-6 md:gap-x-12 lg:gap-x-20 py-12 md:py-16">
        {/* Numeral column */}
        <div className="flex md:block items-baseline gap-4">
          <div className="font-display italic text-[var(--color-teal)] text-[3rem] md:text-[3.75rem] leading-none tabular-nums">
            {numeral}
          </div>
          <div className="md:mt-4 text-[10.5px] tracking-[0.22em] uppercase text-[var(--color-ink-muted)]">
            {sectorLabel}
          </div>
        </div>

        {/* Headline + body */}
        <div>
          <h3 className="font-display text-[1.75rem] md:text-[2.25rem] leading-[1.1] text-[var(--color-navy)] [text-wrap:balance]">
            {title}
          </h3>
          <p className="mt-4 text-[16px] leading-[1.65] text-[var(--color-ink-muted)] max-w-prose">
            {body}
          </p>
        </div>

        {/* Questions column */}
        <div className="md:border-l md:border-[var(--color-line)] md:pl-12 lg:pl-16">
          <div className="text-[10.5px] tracking-[0.22em] uppercase text-[var(--color-ink-muted)] mb-5">
            Questions I answer
          </div>
          <ul className="space-y-4">
            {questions.map((q) => (
              <li
                key={q}
                className="font-display italic text-[18px] md:text-[20px] leading-[1.35] text-[var(--color-navy)] [text-wrap:balance]"
              >
                &ldquo;{q}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Subtle teal highlight on hover, sits beneath the row */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[var(--color-teal)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
      />
    </article>
  );
}
