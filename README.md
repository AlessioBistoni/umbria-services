# Umbria Services

Sito web di Umbria Services — Wellbeing, Events & Logistics. Massaggi, yoga, trattamenti estetici e location esclusive per eventi in Umbria.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Compiler)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- [Framer Motion](https://motion.dev) per animazioni e transizioni
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) per il form di contatto
- [Resend](https://resend.com) per l'invio email dal form
- [Embla Carousel](https://www.embla-carousel.com) per la gallery location

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Form di Contatto

Il form in `/contatti` e `/location` invia le richieste via email tramite [Resend](https://resend.com). Per attivarlo in produzione:

1. Crea un account su [resend.com](https://resend.com) e genera una API key.
2. Copia `.env.example` in `.env.local` e imposta:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=info@umbriaservices.it
   ```
3. Riavvia il server. Senza `RESEND_API_KEY` il form risponde con un errore controllato (503) invece di inviare l'email.

## Struttura

- `src/app` — pagine (App Router): home, `trattamenti`, `servizi`, `location`, `contatti`, `privacy`
- `src/components/sections` — sezioni di homepage e pagine
- `src/components/layout` — Navbar e Footer
- `src/components/shared` — componenti riutilizzabili (form, reveal animations, page hero, ecc.)
- `src/lib/site-data.ts` — contenuti testuali del sito (servizi, trattamenti, location, partner)
- `src/lib/images.ts` — mappa delle immagini utilizzate

## Build

```bash
npm run build
npm run start
```

## Deploy

Progetto pronto per il deploy su [Vercel](https://vercel.com/new). Ricorda di impostare le variabili d'ambiente `RESEND_API_KEY` e `CONTACT_TO_EMAIL` nel progetto Vercel.
