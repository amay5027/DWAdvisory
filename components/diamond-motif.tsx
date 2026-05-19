type Props = {
  size?: number;
  /** Which diamond is teal (others are navy). Default mirrors the logo. */
  accentIndex?: 0 | 1 | 2;
  className?: string;
  navyColor?: string;
  tealColor?: string;
  strokeWidth?: number;
};

/**
 * The three-diamond mark, drawn inline so it can be coloured, sized
 * and animated freely. Mirrors the proportions of the brand logo.
 */
export function DiamondMotif({
  size = 64,
  accentIndex = 2,
  className,
  navyColor = "#002066",
  tealColor = "#0088a8",
  strokeWidth = 14,
}: Props) {
  const diamonds = [
    { cx: 100, cy: 60 },   // top
    { cx: 60, cy: 110 },   // bottom-left
    { cx: 140, cy: 110 },  // bottom-right
  ];

  return (
    <svg
      width={size}
      height={(size * 140) / 200}
      viewBox="0 0 200 160"
      fill="none"
      className={className}
      aria-hidden
    >
      {diamonds.map((d, i) => (
        <rect
          key={i}
          x={d.cx - 25}
          y={d.cy - 25}
          width={50}
          height={50}
          transform={`rotate(45 ${d.cx} ${d.cy})`}
          stroke={i === accentIndex ? tealColor : navyColor}
          strokeWidth={strokeWidth}
        />
      ))}
    </svg>
  );
}

/** Single diamond used as bullet/divider. */
export function DiamondGlyph({
  size = 14,
  color = "#0088a8",
  filled = true,
  className,
}: {
  size?: number;
  color?: string;
  filled?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <rect
        x={4}
        y={4}
        width={16}
        height={16}
        transform="rotate(45 12 12)"
        fill={filled ? color : "none"}
        stroke={color}
        strokeWidth={filled ? 0 : 2}
      />
    </svg>
  );
}
