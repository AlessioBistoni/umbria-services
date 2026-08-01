import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-data";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src={images.tuscanyHills}
        alt="Colline umbre"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-black/70" />

      <div className="container-site relative text-center">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            Pronto a Concederti il Tuo Momento di Relax?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-primary-foreground/85">
            Scrivici oggi stesso: costruiamo insieme il programma di
            benessere perfetto per te, la tua famiglia o il tuo evento.
          </p>
        </Reveal>
        <Reveal
          delay={0.2}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="group rounded-full px-7 text-base"
          >
            <Link href="/contatti">
              Contattaci Ora
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/40 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={`tel:${siteConfig.phoneHref}`}>
              <Phone className="mr-1 h-4 w-4" />
              {siteConfig.phone}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
