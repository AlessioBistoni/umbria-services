"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { locations } from "@/lib/site-data";

export function LocationsTeaser() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial sync of button state from the embla instance
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Location Esclusive"
            title="La Cornice Perfetta per il Tuo Evento"
            description="Ville, conventi storici e casali immersi nel verde: scopri gli spazi che selezioniamo per matrimoni ed eventi indimenticabili."
            className="mx-0"
          />
          <Reveal delay={0.15} className="flex shrink-0 gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Precedente"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Successivo"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-10 overflow-hidden" >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-5 flex">
              {locations.map((loc) => (
                <div
                  key={loc.slug}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] pl-5 sm:basis-[55%] lg:basis-[32%]"
                >
                  <Link
                    href="/location"
                    className="group relative block h-full overflow-hidden rounded-3xl"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={loc.image}
                        alt={loc.nome}
                        fill
                        sizes="(min-width: 1024px) 32vw, 80vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="font-heading text-xl font-bold text-white">
                            {loc.nome}
                          </h3>
                          <p className="mt-1.5 line-clamp-2 text-sm text-white/75">
                            {loc.descrizione}
                          </p>
                        </div>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-foreground transition-transform group-hover:rotate-45">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 text-center">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link href="/location">Scopri Tutte le Location</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
