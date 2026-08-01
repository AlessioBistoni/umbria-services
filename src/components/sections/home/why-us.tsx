import { Clock3, Gem, Handshake, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const reasons = [
  {
    icon: MapPin,
    title: "Ovunque tu sia",
    description:
      "Interveniamo a domicilio in tutta l'Umbria: nella tua casa vacanza, nel tuo agriturismo o hotel.",
  },
  {
    icon: Gem,
    title: "Su misura per te",
    description:
      "Ogni trattamento ed evento è costruito insieme a te, secondo le tue esigenze e i tuoi tempi.",
  },
  {
    icon: Handshake,
    title: "Rete di professionisti",
    description:
      "Un network selezionato di massoterapisti, istruttori, chef e artigiani di fiducia.",
  },
  {
    icon: Clock3,
    title: "Flessibilità totale",
    description:
      "Prenota quando vuoi: rispondiamo rapidamente per organizzare il tuo momento di relax.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Perché Sceglierci"
          title="Il Benessere, Senza Pensieri"
          description="Ci occupiamo di ogni dettaglio organizzativo, così tu puoi concentrarti solo su una cosa: rilassarti."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={i * 0.1}
              className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:scale-110 group-hover:rotate-3">
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
