import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { ManifestoBreak } from "@/components/manifesto-break";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Approach } from "@/components/sections/approach";
import { Services } from "@/components/sections/services";
import { Audiences } from "@/components/sections/audiences";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Reveal><Pillars /></Reveal>
        <Reveal><Audiences /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal>
          <ManifestoBreak
            primary="Year-end shouldn’t be the most"
            accent="interesting time we talk."
          />
        </Reveal>
        <Reveal><Approach /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal fadeOnly><Services /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
