import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { iconMap } from "@/components/shared/icon-map";
import { images } from "@/lib/images";

const smallCategories = [
  { slug: "sport", title: "Sport", icon: "Dumbbell" },
  { slug: "cucina", title: "Cucina", icon: "ChefHat" },
  { slug: "bambini", title: "Bambini", icon: "PartyPopper" },
  { slug: "trasporto", title: "Trasporto", icon: "Car" },
  { slug: "casa", title: "Per la Casa", icon: "Home" },
  { slug: "vari", title: "Eventi & Location", icon: "Star" },
];

export function ServicesOverview() {
  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="I Nostri Servizi"
          title="Tutto il Benessere, a Portata di Mano"
          description="Dai massaggi a domicilio agli eventi esclusivi: un'unica agenzia per organizzare ogni aspetto del tuo soggiorno in Umbria."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal className="group relative overflow-hidden rounded-3xl lg:col-span-2">
            <Link href="/trattamenti" className="block h-full">
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
                <Image
                  src={images.oilMassage}
                  alt="Massaggi ed estetica a domicilio"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    I Professionisti del Relax
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl">
                    Massaggi &amp; Estetica
                  </h3>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="group relative overflow-hidden rounded-3xl">
            <Link href="/servizi#benessere" className="block h-full">
              <div className="relative aspect-[16/10] w-full sm:h-full sm:aspect-auto">
                <Image
                  src={images.heroYoga}
                  alt="Yoga e Pilates in Umbria"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Mente &amp; Corpo
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white">
                    Yoga &amp; Pilates
                  </h3>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {smallCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <Reveal key={cat.slug} delay={0.15 + i * 0.05}>
                <Link
                  href={`/servizi#${cat.slug}`}
                  className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold">{cat.title}</span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
