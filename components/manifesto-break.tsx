import { DiamondGlyph } from "./diamond-motif";

type Props = {
  /** Primary line of the manifesto. */
  primary: string;
  /** Italic accent line, sits on a second line. */
  accent: string;
  /** Background style. Cream is the default. */
  tone?: "cream" | "warm" | "white";
};

/**
 * Full-bleed editorial break between sections. Magazine spread energy —
 * single moment of typographic punch in the middle of the long text flow.
 */
export function ManifestoBreak({ primary, accent, tone = "warm" }: Props) {
  const bg =
    tone === "warm"
      ? "var(--color-cream-warm)"
      : tone === "white"
        ? "#ffffff"
        : "var(--color-cream)";

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: bg }}
    >
      {/* Soft brand glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-teal) 0%, transparent 70%)",
        }}
      />

      <div className="container-page relative text-center max-w-[900px] mx-auto">
        <div className="flex items-center justify-center gap-3 opacity-60">
          <span className="h-px w-12 bg-[var(--color-teal)]" />
          <DiamondGlyph size={10} color="var(--color-teal)" />
          <span className="h-px w-12 bg-[var(--color-teal)]" />
        </div>

        <blockquote className="mt-8 md:mt-10 display text-[clamp(1.875rem,5.6vw,3.75rem)] leading-[1.08] [text-wrap:balance]">
          {primary}
          <br />
          <span className="display-italic">{accent}</span>
        </blockquote>
      </div>
    </section>
  );
}
