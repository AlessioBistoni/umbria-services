import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-24">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />

      <div className="container-site relative pb-14 text-primary-foreground sm:pb-20">
        <Reveal className="flex items-center gap-1.5 text-xs font-medium text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">{crumb}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-6 bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-xl text-balance text-white/80">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
