/**
 * Single source of truth for all site copy.
 * Edit here without touching JSX.
 */

export const site = {
  name: "DW Advisory",
  legalName: "DW Advisory Ltd",
  strapline: "Accounts · Tax · Business",
  principal: {
    name: "David Whiteman",
    credentials: "FCCA",
    role: "Founder",
  },
  contact: {
    email: "david.whiteman@dw-advisory.co.uk",
    phone: "+44 (0)7841 422824",
    phoneHref: "tel:+447841422824",
    responseTime: "I read every enquiry myself and reply within one working day.",
  },
} as const;

export const nav = [
  { label: "Who I work with", href: "#audiences" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  kicker: "Chartered Accountant · UK SMEs",
  headline: {
    line1: "Your numbers are telling you something.",
    accent: "My job is to help you hear it in time.",
  },
  sub: "I’m David Whiteman, a chartered accountant working with UK founders, contractors and owner-managed businesses. Compliance is the floor. What you actually pay for is judgement, foresight, and peace of mind.",
  primaryCta: { label: "Book a 30-minute call", href: "#contact" },
  secondaryCta: { label: "Email me directly", href: "mailto:david.whiteman@dw-advisory.co.uk" },
  trustStrip: [
    "FCCA, 20+ years in practice",
    "Replies within one working day",
    "Fixed monthly fees, no surprises",
  ],
} as const;

export const pillarsIntro = {
  kicker: "What you actually pay for",
  heading: {
    pre: "The three things ",
    accent: "that actually matter.",
  },
  sub: "Anyone can file your accounts. The work that pays for itself is everything that happens before and after the deadline.",
} as const;

export const pillars = [
  {
    title: "Proactive advice",
    body: "I don’t wait for year-end to tell you what went wrong. We talk quarterly, run the numbers together, and make the call before the deadline, not after.",
    tagline: "Quarterly check-ins, not annual surprises",
  },
  {
    title: "Peace of mind",
    body: "HMRC, Companies House, payroll, VAT, all handled, all on time. You get one person who knows your business and actually picks up the phone.",
    tagline: "One number to call. Mine.",
  },
  {
    title: "Numbers that tell a story",
    body: "Management accounts you can read without a glossary. Forecasts that show what happens if you hire, raise, or hold steady. Numbers that turn into decisions.",
    tagline: "Decisions, not data dumps",
  },
] as const;

export const approach = {
  kicker: "How I work",
  heading: {
    pre: "Most accountants tell you ",
    accent: "what happened.",
    post: " My job is to tell you what to do about it.",
  },
  body:
    "Compliance is the floor, not the ceiling. Filing accurate accounts and tax returns is the price of entry. What you actually pay for is judgement. Whether to take the dividend or the salary. Whether the R&D claim is worth the scrutiny. Whether to hire now or wait a quarter. Whether the offer on the table is the right one. That’s the work I most enjoy, and it’s the work I’m best at.",
  pullQuote:
    "Founders don’t lose sleep over a missed VAT deadline. They lose sleep over not knowing whether next month works. That’s the thing worth fixing.",
  pullQuoteAttribution: "David Whiteman, FCCA",
} as const;

export const services = [
  {
    title: "Accounts",
    description:
      "Statutory and management accounting done quietly and on time, and used as a tool, not a filing exercise.",
    items: [
      "Statutory accounts and Companies House filings",
      "Monthly or quarterly management accounts",
      "Cloud bookkeeping setup (Xero, QuickBooks, FreeAgent)",
      "Cash-flow forecasting and scenario modelling",
      "Board-ready reporting for founders and investors",
    ],
  },
  {
    title: "Tax",
    description:
      "Tax planning that joins up the business and the people behind it, not two separate spreadsheets.",
    items: [
      "Corporation Tax planning and returns",
      "R&D tax credits (claim preparation and defence)",
      "EIS / SEIS advance assurance and compliance",
      "Self Assessment for directors and contractors",
      "VAT registration, returns and MTD compliance",
      "Director remuneration and dividend planning",
    ],
  },
  {
    title: "Business advisory",
    description:
      "The conversations that don’t fit neatly into a tax return. The ones that change the trajectory of a business.",
    items: [
      "Pre-revenue and fundraising readiness",
      "Equity, options and share-scheme structuring",
      "Pricing, margin and unit economics review",
      "Hiring affordability and remuneration design",
      "Exit, acquisition and succession planning",
    ],
  },
] as const;

export const audiencesIntro = {
  kicker: "Who I work with",
  heading: {
    pre: "Founders, freelancers and the ",
    accent: "businesses behind the businesses.",
  },
} as const;

export const audiences = [
  {
    title: "Start-ups & founders",
    sectorLabel: "Pre-seed → Series B",
    body: "From first invoice to Series A. I set up the books so they survive due diligence, advise on EIS/SEIS and R&D, and tell you straight when the model isn’t working yet.",
    questions: [
      "Is our runway really 14 months?",
      "Can we claim R&D on this build?",
      "What does the cap table look like after this round?",
    ],
  },
  {
    title: "Contractors & consultants",
    sectorLabel: "Limited-company professionals",
    body: "Limited-company contractors and independent consultants who’d rather make decisions on a phone call than wait three weeks for an email reply.",
    questions: [
      "Salary, dividend or pension this year?",
      "Am I inside or outside IR35 on this contract?",
      "Should I be VAT-registered yet?",
    ],
  },
  {
    title: "Established SMEs",
    sectorLabel: "£250k → £10m turnover",
    body: "Owner-managed businesses who’ve outgrown their original accountant and want a real advisor, not just a year-end checkbox.",
    questions: [
      "Where is margin actually being lost?",
      "Can we afford the next two hires?",
      "What does a clean exit look like in three years?",
    ],
  },
] as const;

export const about = {
  kicker: "About David",
  heading: "Two decades. Hundreds of businesses. One phone number.",
  body: [
    "I’m a Fellow of the Association of Chartered Certified Accountants (FCCA) with over twenty years in practice. I set up DW Advisory because I wanted to do the work I most enjoy, sitting alongside owner-managers and founders, translating financial reality into clear next steps.",
    "I’ve worked with early-stage SaaS founders through their first R&D claims, helped contractors get IR35 right without overpaying tax, and steered established SMEs through hiring spikes, downturns and exits. The thread connecting all of it is judgement, knowing which questions matter and answering them before they become problems.",
    "It’s a small practice on purpose. You get me, not a junior. You get a phone call, not a ticket number.",
  ],
} as const;

export const testimonialsIntro = {
  kicker: "What clients say",
  heading: {
    pre: "Three short notes ",
    accent: "from the past year.",
  },
  disclaimer:
    "Client identities held confidential. Verified attributable references available on request.",
} as const;

export const testimonials = [
  {
    quote:
      "He sorted our R&D claim and our board pack in the same week, and for the first time the numbers actually made sense to our investors. Easily the most useful hire we’ve made.",
    role: "Co-founder & CEO",
    org: "Series A SaaS, London",
  },
  {
    quote:
      "I’ve been a contractor for eleven years and David is the first accountant who picked up the phone the same day. Clear advice, no jargon, no surprises at year-end.",
    role: "Independent management consultant",
    org: "Owner-managed Ltd",
  },
  {
    quote:
      "We thought we were doing fine until David showed us where the margin was actually leaking. He saved us more than his fees in the first year and he’s still finding things.",
    role: "Managing Director",
    org: "Specialist manufacturer, Midlands",
  },
] as const;

export const contact = {
  kicker: "Let’s talk",
  heading: {
    pre: "Let’s talk numbers, ",
    accent: "and what they could mean ",
    post: "for you.",
  },
  body:
    "A 30-minute introductory call is free, with no obligation. Tell me what you’re working on and what’s keeping you up at night. You’ll leave the call with at least one concrete thing to act on, whether or not we end up working together.",
  promises: [
    "Initial call is free and genuinely useful",
    "Fixed monthly fees, no surprise invoices",
    "Direct access to David, never an account manager",
  ],
  businessStages: [
    "Pre-launch / idea stage",
    "Pre-revenue or just trading",
    "Trading under £250k turnover",
    "£250k – £2m turnover",
    "£2m+ turnover",
    "Contractor / consultant",
  ],
} as const;
