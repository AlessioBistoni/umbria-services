import { Hero } from "@/components/sections/home/hero";
import { TrustBar } from "@/components/sections/home/trust-bar";
import { About } from "@/components/sections/home/about";
import { ServicesOverview } from "@/components/sections/home/services-overview";
import { WhyUs } from "@/components/sections/home/why-us";
import { LocationsTeaser } from "@/components/sections/home/locations-teaser";
import { Partners } from "@/components/sections/home/partners";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <ServicesOverview />
      <WhyUs />
      <LocationsTeaser />
      <Partners />
      <CtaBand />
    </>
  );
}
