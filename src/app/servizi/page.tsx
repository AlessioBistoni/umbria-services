import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, RevealGroup } from "@/components/shared/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { iconMap } from "@/components/shared/icon-map";
import { serviceCategories } from "@/lib/site-data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Benessere, sport, cucina, intrattenimento, trasporti e molto altro: scopri tutti i servizi su misura di Umbria Services per il tuo soggiorno.",
};

export default function ServiziPage() {
  return (
    <>
      <PageHero
        eyebrow="Cosa Offriamo"
        title="I Servizi per il Tuo Soggiorno"
        description="Un'unica agenzia per organizzare benessere, sport, cucina, intrattenimento e logistica: dicci cosa ti serve, pensiamo a tutto noi."
        image={images.gymLunges}
        crumb="Servizi"
      />

      <nav className="sticky top-18 z-30 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="container-site scrollbar-none flex gap-2 overflow-x-auto py-3">
          {serviceCategories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="shrink-0 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="py-20 sm:py-28">
        <div className="container-site space-y-20">
          {serviceCategories.map((cat, index) => {
            const Icon = iconMap[cat.icon];
            return (
              <div
                key={cat.slug}
                id={cat.slug}
                className="scroll-mt-32 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16"
              >
                <Reveal>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">
                    {cat.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(serviceCategories.length).padStart(2, "0")}
                  </p>
                </Reveal>

                <RevealGroup className="grid gap-3 sm:grid-cols-2">
                  {cat.items.map((item, i) => (
                    <Reveal
                      key={item}
                      delay={i * 0.04}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition-colors hover:border-primary/40"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </Reveal>
                  ))}
                </RevealGroup>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary/30 py-16 text-center">
        <div className="container-site">
          <p className="text-balance text-muted-foreground">
            Non trovi quello che cerchi? Raccontaci la tua esigenza, la
            realizziamo su misura.
          </p>
          <Link
            href="/contatti"
            className="mt-4 inline-block font-semibold text-primary underline underline-offset-4"
          >
            Contattaci ora →
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
