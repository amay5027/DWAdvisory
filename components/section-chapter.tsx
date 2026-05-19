type Props = {
  numeral: string;
  tone?: "light" | "dark";
};

/**
 * Small editorial chapter marker (e.g. "II.") that sits above the kicker.
 * Italic Instrument Serif at low opacity, magazine-style.
 */
export function SectionChapter({ numeral, tone = "light" }: Props) {
  return (
    <div
      className="font-display italic leading-none mb-3 tabular-nums tracking-[-0.01em]"
      style={{
        fontSize: "20px",
        color:
          tone === "dark"
            ? "rgba(255,255,255,0.45)"
            : "rgba(0,32,102,0.40)",
      }}
    >
      {numeral}.
    </div>
  );
}
