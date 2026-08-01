import { CalendarCheck, HeartHandshake, MapPinned, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const stats = [
  {
    icon: HeartHandshake,
    title: "Professionisti Qualificati",
    description: "Massoterapisti, estetiste e istruttori selezionati",
  },
  {
    icon: MapPinned,
    title: "Servizio a Domicilio",
    description: "Veniamo noi, ovunque tu soggiorni in Umbria",
  },
  {
    icon: CalendarCheck,
    title: "Su Appuntamento",
    description: "Prenota l'orario più comodo per te, ogni giorno",
  },
  {
    icon: ShieldCheck,
    title: "Qualità Garantita",
    description: "Cura del dettaglio dal primo contatto al trattamento",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 py-10">
      <div className="container-site grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.title} delay={i * 0.08} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <stat.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">{stat.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
