import { services } from "@/lib/content";
import { SectionChapter } from "../section-chapter";

const NUMERALS = ["01", "02", "03"] as const;

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[var(--color-navy-deep)] text-[var(--color-cream)] overflow-hidden"
    >
      <div className="grain" />
      <BackgroundOrnament />

      <div className="container-page relative">
        <header className="max-w-3xl">
          <SectionChapter numeral="II" tone="dark" />
          <span className="kicker" style={{ color: "var(--color-teal-300)" }}>
            What I do
          </span>
          <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.06] text-white [text-wrap:balance]">
            Three disciplines.{" "}
            <span
              className="display-italic"
              style={{ color: "var(--color-teal-300)" }}
            >
              One joined-up advisor.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-white/65 text-[17px] leading-relaxed">
            The work breaks down into three areas. The value comes from treating
            them as one conversation, not three invoices.
          </p>
        </header>

        <div className="mt-16 md:mt-24 border-t border-white/10">
          {services.map((svc, i) => (
            <ServiceRow
              key={svc.title}
              numeral={NUMERALS[i]}
              title={svc.title}
              description={svc.description}
              items={svc.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  numeral,
  title,
  description,
  items,
}: {
  numeral: string;
  title: string;
  description: string;
  items: readonly string[];
}) {
  return (
    <article className="group relative border-b border-white/10">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-y-8 md:gap-x-16 lg:gap-x-24 py-12 md:py-16">
        {/* Left column: numeral + title + intro */}
        <div>
          <div className="flex items-baseline gap-5">
            <span
              className="font-display italic leading-none tabular-nums"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)",
                color: "var(--color-teal-300)",
              }}
            >
              {numeral}
            </span>
            <span className="text-[10.5px] tracking-[0.24em] uppercase text-white/45">
              Discipline
            </span>
          </div>

          <h3 className="mt-6 font-display text-[2rem] md:text-[2.5rem] leading-[1.05] text-white [text-wrap:balance]">
            {title}
          </h3>
          <p className="mt-4 text-[15.5px] leading-[1.65] text-white/65 max-w-md">
            {description}
          </p>
        </div>

        {/* Right column: items as a numbered, hairline-separated list */}
        <ul>
          {items.map((item, idx) => (
            <li
              key={item}
              className={[
                "flex items-baseline gap-5 py-3.5",
                idx > 0 ? "border-t border-white/10" : "",
              ].join(" ")}
            >
              <span className="text-[10.5px] tracking-[0.16em] uppercase text-white/40 tabular-nums w-7 shrink-0">
                0{idx + 1}
              </span>
              <span className="text-[15.5px] md:text-[16px] leading-[1.45] text-white/90">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover highlight bar at top of row */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[var(--color-teal-300)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
      />
    </article>
  );
}

function BackgroundOrnament() {
  return (
    <>
      {/* Soft teal aurora top-right */}
      <div
        aria-hidden
        className="absolute -top-48 -right-48 w-[800px] h-[800px] rounded-full opacity-[0.18]"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-teal) 0%, transparent 70%)",
        }}
      />
      {/* Faint diamond watermark, bottom-left */}
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 opacity-[0.04] select-none pointer-events-none"
      >
        <svg width="500" height="400" viewBox="0 0 500 400" fill="none">
          <rect
            x="160"
            y="40"
            width="180"
            height="180"
            transform="rotate(45 250 130)"
            stroke="#ffffff"
            strokeWidth="14"
          />
          <rect
            x="40"
            y="200"
            width="180"
            height="180"
            transform="rotate(45 130 290)"
            stroke="#ffffff"
            strokeWidth="14"
          />
          <rect
            x="280"
            y="200"
            width="180"
            height="180"
            transform="rotate(45 370 290)"
            stroke="#5cc6dc"
            strokeWidth="14"
          />
        </svg>
      </div>
    </>
  );
}
