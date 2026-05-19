import { pillars, pillarsIntro } from "@/lib/content";
import { DiamondGlyph } from "../diamond-motif";

const NUMERALS = ["I", "II", "III"] as const;

export function Pillars() {
  return (
    <section className="relative py-24 md:py-32 bg-white border-y border-[var(--color-line)] overflow-hidden">
      <BackgroundOrnament />

      <div className="container-page relative">
        {/* Intro */}
        <div className="max-w-3xl">
          <span className="kicker">{pillarsIntro.kicker}</span>
          <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.06] [text-wrap:balance]">
            {pillarsIntro.heading.pre}
            <span className="display-italic">{pillarsIntro.heading.accent}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[16.5px] md:text-[17px] leading-[1.6] text-[var(--color-ink-muted)]">
            {pillarsIntro.sub}
          </p>
        </div>

        {/* Three pillars — open editorial layout, no card boxes */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 relative">
          {pillars.map((p, i) => (
            <Pillar
              key={p.title}
              numeral={NUMERALS[i]}
              title={p.title}
              body={p.body}
              tagline={p.tagline}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillar({
  numeral,
  title,
  body,
  tagline,
  index,
}: {
  numeral: string;
  title: string;
  body: string;
  tagline: string;
  index: number;
}) {
  return (
    <article
      className={[
        "group relative px-0 md:px-8 py-10 md:py-2 flex flex-col",
        // Vertical separators on desktop, horizontal on mobile
        index > 0 ? "md:border-l border-[var(--color-line)] border-t md:border-t-0" : "",
      ].join(" ")}
    >
      <header className="flex items-baseline gap-4">
        <span className="font-display italic text-[var(--color-teal)] text-[2.25rem] leading-none tabular-nums">
          {numeral}
        </span>
        <span className="flex-1 h-px bg-[var(--color-line)]" aria-hidden />
      </header>

      <div className="mt-6 mb-7">
        <Illustration variant={index} />
      </div>

      <h3 className="font-display text-[1.75rem] md:text-[2rem] leading-[1.1] text-[var(--color-navy)] [text-wrap:balance]">
        {title}
      </h3>

      <p className="mt-4 text-[15.5px] leading-[1.65] text-[var(--color-ink-muted)] max-w-md">
        {body}
      </p>

      <footer className="mt-7 pt-5 border-t border-[var(--color-line)] flex items-center justify-between gap-3">
        <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-ink-muted)]">
          {tagline}
        </span>
        <DiamondGlyph size={9} color="var(--color-teal)" />
      </footer>
    </article>
  );
}

/**
 * Three custom illustrations in the brand diamond vocabulary.
 * 0 = Proactive (growing momentum left → right)
 * 1 = Peace of mind (enclosed, concentric)
 * 2 = Numbers tell a story (ascending stair)
 */
function Illustration({ variant }: { variant: number }) {
  const NAVY = "var(--color-navy)";
  const TEAL = "var(--color-teal)";

  if (variant === 0) {
    return (
      <svg
        viewBox="0 0 180 80"
        className="w-full max-w-[180px] h-auto transition-transform duration-700 group-hover:translate-x-1"
        aria-hidden
      >
        {/* Three diamonds scaling up left → right, ending with teal filled */}
        <rect
          x={4}
          y={32}
          width={16}
          height={16}
          transform="rotate(45 12 40)"
          stroke={NAVY}
          strokeOpacity={0.28}
          strokeWidth={2.4}
          fill="none"
        />
        <rect
          x={50}
          y={22}
          width={26}
          height={26}
          transform="rotate(45 63 35)"
          stroke={NAVY}
          strokeOpacity={0.55}
          strokeWidth={3}
          fill="none"
        />
        <rect
          x={110}
          y={8}
          width={44}
          height={44}
          transform="rotate(45 132 30)"
          stroke={TEAL}
          strokeWidth={3.5}
          fill="none"
        />
        {/* Trailing arrow tip */}
        <path
          d="M 158 30 L 174 30 M 168 24 L 174 30 L 168 36"
          stroke={TEAL}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={0.7}
        />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg
        viewBox="0 0 120 100"
        className="w-full max-w-[120px] h-auto"
        aria-hidden
      >
        {/* Concentric rings ripple out from the centred diamond */}
        <g className="origin-center transition-transform duration-700 group-hover:scale-[1.06]">
          <circle
            cx={60}
            cy={50}
            r={44}
            stroke={NAVY}
            strokeOpacity={0.12}
            strokeWidth={1}
            fill="none"
          />
          <circle
            cx={60}
            cy={50}
            r={34}
            stroke={NAVY}
            strokeOpacity={0.22}
            strokeWidth={1}
            fill="none"
          />
          <circle
            cx={60}
            cy={50}
            r={24}
            stroke={NAVY}
            strokeOpacity={0.32}
            strokeWidth={1}
            fill="none"
          />
          <rect
            x={46}
            y={36}
            width={28}
            height={28}
            transform="rotate(45 60 50)"
            stroke={TEAL}
            strokeWidth={3.2}
            fill="none"
          />
        </g>
      </svg>
    );
  }

  // variant === 2 — three diamonds rising as a tiny bar chart, plus a connecting line
  return (
    <svg
      viewBox="0 0 180 100"
      className="w-full max-w-[180px] h-auto"
      aria-hidden
    >
      {/* Subtle baseline */}
      <line
        x1={4}
        y1={94}
        x2={176}
        y2={94}
        stroke={NAVY}
        strokeOpacity={0.18}
        strokeWidth={1}
      />
      {/* Connecting trend line */}
      <path
        d="M 20 76 L 70 56 L 130 30"
        stroke={TEAL}
        strokeOpacity={0.45}
        strokeWidth={1.6}
        fill="none"
        strokeLinecap="round"
        className="transition-opacity duration-500 group-hover:opacity-100 opacity-60"
      />
      {/* Diamond 1, lowest */}
      <rect
        x={10}
        y={66}
        width={20}
        height={20}
        transform="rotate(45 20 76)"
        stroke={NAVY}
        strokeOpacity={0.45}
        strokeWidth={2.6}
        fill="none"
      />
      {/* Diamond 2, mid */}
      <rect
        x={56}
        y={42}
        width={28}
        height={28}
        transform="rotate(45 70 56)"
        stroke={NAVY}
        strokeOpacity={0.65}
        strokeWidth={3}
        fill="none"
      />
      {/* Diamond 3, highest, teal */}
      <rect
        x={112}
        y={12}
        width={36}
        height={36}
        transform="rotate(45 130 30)"
        stroke={TEAL}
        strokeWidth={3.2}
        fill="none"
      />
    </svg>
  );
}

function BackgroundOrnament() {
  return (
    <div
      aria-hidden
      className="absolute -bottom-32 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.025]"
    >
      <svg width="900" height="700" viewBox="0 0 900 700" fill="none">
        {/* Large faint version of the three-diamond mark */}
        <rect x="350" y="100" width="200" height="200" transform="rotate(45 450 200)" stroke="#002066" strokeWidth="20" />
        <rect x="190" y="280" width="200" height="200" transform="rotate(45 290 380)" stroke="#002066" strokeWidth="20" />
        <rect x="510" y="280" width="200" height="200" transform="rotate(45 610 380)" stroke="#002066" strokeWidth="20" />
      </svg>
    </div>
  );
}
