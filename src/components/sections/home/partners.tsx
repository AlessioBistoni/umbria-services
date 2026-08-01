import { MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { partners } from "@/lib/site-data";

export function Partners() {
  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="I Nostri Partner"
          title="Insieme ai Migliori Indirizzi del Territorio"
          description="Collaboriamo con locali selezionati per completare la tua esperienza in Umbria."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {partners.map((partner, i) => (
            <Reveal
              key={partner.nome}
              delay={i * 0.1}
              className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <h3 className="font-heading text-xl font-bold text-primary">
                {partner.nome}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {partner.descrizione}
              </p>
              <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  {partner.indirizzo}, {partner.citta}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  {partner.telefono}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
