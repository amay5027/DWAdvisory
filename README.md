# DW Advisory Website

Marketing site for **DW Advisory Ltd** (David Whiteman FCCA). Single-page,
contemporary, conversion-optimised. Next.js (App Router) + TypeScript +
Tailwind CSS v4. Designed to deploy to Vercel in one click.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Environment

Copy `.env.local.example` to `.env.local` and fill in:

```bash
# Get this from https://formspree.io (free tier).
NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx
```

If the variable is missing, the contact form gracefully falls back to a
`mailto:` link so the site still collects enquiries. The hosted form
gives much better conversion.

## Editing copy

All text on the site lives in [`lib/content.ts`](lib/content.ts). Edit
there to change headlines, services, testimonials, audiences, etc. No
JSX changes required.

## Deploying

```bash
npx vercel              # first time: link the project
npx vercel --prod       # promote to production
```

Set `NEXT_PUBLIC_FORMSPREE_ID` in the Vercel project settings (under
Environment Variables). Then add `dw-advisory.co.uk` as a custom domain
in the Vercel dashboard.

## Project structure

```
app/                    # Next.js App Router entry
  layout.tsx            # Fonts, metadata
  page.tsx              # Composes all sections
  globals.css           # Tailwind + design tokens
components/
  site-header.tsx
  site-footer.tsx
  diamond-motif.tsx     # SVG primitive used across the site
  sections/             # One file per page section
lib/
  content.ts            # All site copy in one place
public/
  logo-full.svg         # Full lockup
  logo-alt.svg, logo-light.svg, logo-mono.svg
  favicon.svg
images/                 # Original brand asset bundle (untouched)
```

## What David needs to provide

- **Formspree endpoint ID**. Free signup at [formspree.io](https://formspree.io).
- *(Optional)* A headshot photo to replace the editorial portrait placeholder.
- *(Optional)* Companies House registration number for the footer.
- *(Optional)* Replacement testimonial copy from real clients (current ones
  are plausible placeholders).
