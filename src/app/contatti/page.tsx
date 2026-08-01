import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/lib/site-data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Umbria Services per prenotare massaggi, trattamenti estetici, yoga o organizzare il tuo evento in Umbria. Rispondiamo rapidamente.",
};

const mapQuery = encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city} ${siteConfig.address.province}, Italia`
);

const infoCards = [
  {
    icon: MapPin,
    title: "Indirizzo",
    lines: [
      siteConfig.address.street,
      `${siteConfig.address.zip} ${siteConfig.address.city} (${siteConfig.address.province})`,
    ],
  },
  {
    icon: Phone,
    title: "Telefono",
    lines: [siteConfig.phone, siteConfig.phoneFixed],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [siteConfig.email],
  },
  {
    icon: Clock3,
    title: "Orari",
    lines: ["Tutti i giorni, su appuntamento", "9:00 – 20:00"],
  },
];

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Parliamone"
        title="Contattaci"
        description="Raccontaci cosa desideri: un massaggio, un ritiro yoga o l'organizzazione del tuo evento. Ti rispondiamo il prima possibile."
        image={images.spaEssentials}
        crumb="Contatti"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.08}
              className="rounded-3xl border border-border bg-card p-7 text-center shadow-sm"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <card.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold">
                {card.title}
              </h3>
              <div className="mt-1.5 space-y-0.5 text-sm text-muted-foreground">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-site mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-9">
            <h2 className="font-heading text-2xl font-bold">
              Inviaci un Messaggio
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Compila il modulo: ti risponderemo entro poche ore.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe
              title="Mappa Umbria Services"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full min-h-[420px] w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
