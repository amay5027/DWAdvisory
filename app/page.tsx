import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
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
        <Reveal><Approach /></Reveal>
        <Reveal fadeOnly><Services /></Reveal>
        <Reveal><Audiences /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
