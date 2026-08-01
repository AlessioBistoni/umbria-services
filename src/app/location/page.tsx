import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { locations } from "@/lib/site-data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Location Esclusive per Eventi & Matrimoni",
  description:
    "Ville, conventi storici e casali immersi nel verde dell'Umbria: scopri le location esclusive di Umbria Services per matrimoni ed eventi indimenticabili.",
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Eventi & Matrimoni"
        title="La Tua Location Esclusiva"
        description="Selezioniamo dimore storiche, ville e casali immersi nella campagna umbra per rendere unico ogni tuo evento."
        image={images.villaTerrace}
        crumb="Location Esclusive"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site space-y-20">
          {locations.map((loc, i) => (
            <Reveal
              key={loc.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-xl">
                <Image
                  src={loc.image}
                  alt={loc.nome}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
                  {loc.nome}
                </h2>
                <p className="mt-4 max-w-md text-balance text-muted-foreground">
                  {loc.descrizione}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Richiedi Informazioni"
              title="Raccontaci il Tuo Evento"
              description="Data, numero di invitati, stile che desideri: scrivici e ti aiuteremo a scegliere la location perfetta."
              className="mx-0"
            />
          </div>
          <Reveal delay={0.15} className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
            <ContactForm defaultSubject="Richiesta informazioni Location Esclusiva" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
