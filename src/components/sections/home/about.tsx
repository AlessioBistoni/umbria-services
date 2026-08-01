import Image from "next/image";
import { Leaf } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { images } from "@/lib/images";

export function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-4xl shadow-xl">
            <Image
              src={images.umbriaWindow}
              alt="Vista sulla campagna umbra da un casale tradizionale"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden max-w-56 rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
            <Leaf className="h-6 w-6 text-primary" />
            <p className="mt-2 text-sm font-medium">
              &quot;La Vera Ricchezza è il Benessere, Prendersene Cura è la Nostra Missione.&quot;
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-strong">
              <span className="h-px w-6 bg-accent-strong" />
              Chi Siamo
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Wellbeing, Events &amp; Logistics
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-balance text-lg text-muted-foreground">
              Umbria Services nasce per affiancare l&apos;ospite che soggiorna
              nella nostra verde Umbria, alla ricerca del relax. Un unico
              punto di contatto per organizzare massaggi, yoga, trattamenti
              di bellezza, sport, cucina ed eventi esclusivi, ovunque tu ti
              trovi.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-balance text-muted-foreground">
              Selezioniamo i migliori professionisti del territorio per
              offrirti un&apos;esperienza di benessere impeccabile, con la
              flessibilità e la discrezione che meriti in vacanza, in una
              residenza privata o in una location esclusiva per il tuo
              evento.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
