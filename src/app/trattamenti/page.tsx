import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Sparkle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { massaggi, trattamentiEstetici } from "@/lib/site-data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "I Professionisti del Relax | Massaggi & Trattamenti Estetici",
  description:
    "Massaggi rilassanti, sportivi, terapeutici e ayurvedici, trattamenti estetici a domicilio in Umbria: scopri tutti i nostri trattamenti su appuntamento.",
};

const gallery = [images.hotStones, images.outdoorMassageBW, images.heroMassage];

export default function TrattamentiPage() {
  return (
    <>
      <PageHero
        eyebrow="I Professionisti del Relax"
        title="Benessere & Bellezza in Vacanza con Te"
        description="Scopri i nostri trattamenti ideali per il tuo relax, su appuntamento, direttamente a casa tua."
        image={images.oilMassage}
        crumb="Trattamenti"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Massaggi"
            title="Una Manualità per Ogni Esigenza"
            description="Dalle coccole rilassanti al recupero sportivo, fino al massaggio di coppia: scegliamo insieme il trattamento più adatto a te."
          />

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:sticky lg:top-28 lg:grid-cols-1">
              {gallery.map((src, i) => (
                <Reveal
                  key={src}
                  delay={i * 0.1}
                  className="relative aspect-[4/3] w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl shadow-md sm:w-auto lg:aspect-[4/3]"
                >
                  <Image
                    src={src}
                    alt="Massaggio professionale Umbria Services"
                    fill
                    sizes="(min-width: 1024px) 30vw, 80vw"
                    className="object-cover"
                  />
                </Reveal>
              ))}
            </div>

            <RevealGroup className="space-y-5">
              {massaggi.map((m, i) => (
                <Reveal
                  key={m.slug}
                  delay={i * 0.06}
                  className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-heading text-xl font-bold">
                      {m.nome}
                    </h3>
                    {m.durata && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Clock3 className="h-3.5 w-3.5" />
                        {m.durata}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {m.descrizione}
                  </p>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Trattamenti Estetici"
              title="Prenditi Cura di Te, Fino nei Dettagli"
              description="Un servizio estetico completo per sentirti al meglio, in ogni occasione."
              className="mx-0"
            />
            <RevealGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {trattamentiEstetici.map((t, i) => (
                <Reveal
                  key={t}
                  delay={i * 0.04}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm"
                >
                  <Sparkle className="h-4 w-4 shrink-0 text-accent-strong" />
                  {t}
                </Reveal>
              ))}
            </RevealGroup>
            <Reveal delay={0.3} className="mt-9">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link href="/contatti">Prenota un Trattamento</Link>
              </Button>
            </Reveal>
          </div>

          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={images.facialTreatment}
                alt="Trattamento estetico viso"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={images.flowerBath}
                alt="Trattamento benessere con fiori"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
