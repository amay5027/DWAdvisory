import { DiamondMotif } from "./diamond-motif";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative bg-[var(--color-navy-deep)] text-[var(--color-cream)] overflow-hidden"
    >
      <div className="grain" />
      <BackgroundOrnament />

      <div className="container-page relative">
        {/* Personal sign-off */}
        <div className="pt-20 md:pt-28 pb-14 md:pb-20 max-w-3xl">
          <div className="text-[10.5px] tracking-[0.24em] uppercase text-white/45">
            Closing note
          </div>

          <p className="mt-8 text-[18px] md:text-[20px] leading-[1.55] text-white/75 max-w-xl">
            If you’ve read this far, that’s a good sign. The hard part is
            picking up the phone. The rest, I can help with.
          </p>

          <div className="mt-10 font-display italic text-white leading-[0.95] tracking-[-0.015em] text-[clamp(3rem,7.5vw,6.5rem)]">
            Talk soon.
          </div>

          <SignatureMark />

          <div className="mt-3 flex items-center gap-3 text-white/55 text-[13px]">
            <span className="font-display italic text-[18px] text-white/85">
              David
            </span>
            <span className="text-[10.5px] tracking-[0.22em] uppercase">
              FCCA · Founder, DW Advisory
            </span>
          </div>
        </div>

        {/* Practical ledger row */}
        <div className="border-t border-white/10 py-10 md:py-12 grid md:grid-cols-4 gap-8">
          <LedgerCell label="Email" value={site.contact.email} href={`mailto:${site.contact.email}`} />
          <LedgerCell label="Phone" value={site.contact.phone} href={site.contact.phoneHref} />
          <LedgerCell label="Replies" value="Within one working day" />
          <LedgerCell label="Working with" value="UK SMEs, founders, contractors" />
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <DiamondMotif size={26} navyColor="#ffffff" tealColor="#5cc6dc" />
            <div className="leading-none">
              <div className="font-display text-[15px] text-white">{site.legalName}</div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-white/50 mt-1">
                {site.strapline}
              </div>
            </div>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-white/65">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[var(--color-teal-300)] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-[11px] tracking-[0.04em] text-white/40">
            © {year} {site.legalName}. {site.principal.credentials}, Fellow of the ACCA. Registered in England &amp; Wales.
          </div>
        </div>
      </div>
    </footer>
  );
}

function LedgerCell({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const valueClass =
    "font-display text-[20px] md:text-[22px] text-white leading-tight tracking-[-0.01em] [text-wrap:balance]";
  return (
    <div>
      <div className="text-[10px] tracking-[0.22em] uppercase text-white/45 mb-2">
        {label}
      </div>
      {href ? (
        <a href={href} className={`${valueClass} hover:text-[var(--color-teal-300)] transition-colors break-words`}>
          {value}
        </a>
      ) : (
        <div className={valueClass}>{value}</div>
      )}
    </div>
  );
}

function SignatureMark() {
  // Hand-drawn underline-style swoosh, like a signature line.
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 28"
      className="mt-4 w-[200px] md:w-[260px] h-auto text-[var(--color-teal-300)] opacity-80"
    >
      <path
        d="M2 16 Q 45 4, 95 12 T 200 14 T 318 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BackgroundOrnament() {
  return (
    <>
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-teal) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 select-none pointer-events-none opacity-[0.035]"
      >
        <svg width="540" height="440" viewBox="0 0 540 440" fill="none">
          <rect x="170" y="40" width="200" height="200" transform="rotate(45 270 140)" stroke="#ffffff" strokeWidth="16" />
          <rect x="40" y="200" width="200" height="200" transform="rotate(45 140 300)" stroke="#ffffff" strokeWidth="16" />
          <rect x="300" y="200" width="200" height="200" transform="rotate(45 400 300)" stroke="#5cc6dc" strokeWidth="16" />
        </svg>
      </div>
    </>
  );
}
