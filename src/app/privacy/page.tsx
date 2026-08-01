import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description:
    "Informativa sulla privacy e sull'utilizzo dei cookie del sito Umbria Services, in conformità al Regolamento UE 2016/679 (GDPR).",
};

const sections = [
  {
    title: "1. Titolare del Trattamento",
    body: `Il Titolare del trattamento dei dati è ${siteConfig.name}, con sede in ${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city} (${siteConfig.address.province}), P.IVA ${siteConfig.vat}. Per qualsiasi richiesta relativa al trattamento dei tuoi dati personali puoi scrivere a ${siteConfig.email}.`,
  },
  {
    title: "2. Dati Raccolti",
    body: "Attraverso i moduli di contatto presenti sul sito raccogliamo i dati che ci fornisci volontariamente: nome e cognome, numero di telefono, indirizzo email, oggetto e contenuto della richiesta. Non raccogliamo automaticamente dati personali identificativi al di fuori di quanto indicato nella sezione Cookie.",
  },
  {
    title: "3. Finalità del Trattamento",
    body: "I dati raccolti sono utilizzati esclusivamente per rispondere alle richieste di informazioni, prenotazione di trattamenti e servizi, organizzazione di eventi e per l'invio di comunicazioni relative al servizio richiesto. Non utilizziamo i tuoi dati per finalità di marketing senza il tuo esplicito consenso.",
  },
  {
    title: "4. Base Giuridica e Conservazione",
    body: "Il trattamento si basa sul consenso espresso dall'utente al momento dell'invio del modulo di contatto. I dati sono conservati per il tempo necessario a gestire la richiesta e, successivamente, per l'eventuale adempimento di obblighi di legge (es. fiscali e contabili).",
  },
  {
    title: "5. Comunicazione dei Dati",
    body: "I tuoi dati non vengono venduti né ceduti a terzi per finalità commerciali. Potranno essere condivisi con i professionisti e i partner strettamente necessari all'erogazione del servizio richiesto (es. massoterapista, location partner), sempre nel rispetto della normativa vigente.",
  },
  {
    title: "6. Diritti dell'Interessato",
    body: "In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15-22 del GDPR: accesso, rettifica, cancellazione, limitazione, portabilità e opposizione al trattamento dei tuoi dati, scrivendo a " + siteConfig.email + ".",
  },
];

const cookieRows = [
  {
    tipo: "Cookie Tecnici",
    finalita:
      "Necessari al corretto funzionamento del sito (es. memorizzazione del consenso ai cookie).",
    durata: "Sessione / 12 mesi",
  },
  {
    tipo: "Cookie di Terze Parti (Mappe)",
    finalita:
      "Consentono la visualizzazione della mappa incorporata (Google Maps) nella pagina Contatti.",
    durata: "Secondo policy del fornitore",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Informazioni Legali"
        title="Privacy & Cookie Policy"
        description="Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali, in conformità al Regolamento UE 2016/679 (GDPR)."
        image={images.spaEssentials}
        crumb="Privacy & Cookie"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site max-w-3xl">
          <Reveal className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-heading text-xl font-bold sm:text-2xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h2 className="font-heading text-xl font-bold sm:text-2xl">
              7. Cookie Policy
            </h2>
            <p className="mt-3 text-muted-foreground">
              Questo sito utilizza un numero limitato di cookie tecnici e di
              terze parti, necessari a garantire la migliore esperienza di
              navigazione. Non utilizziamo cookie di profilazione a scopo
              pubblicitario.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Tipo</th>
                    <th className="px-5 py-3 font-semibold">Finalità</th>
                    <th className="px-5 py-3 font-semibold">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieRows.map((row, i) => (
                    <tr
                      key={row.tipo}
                      className={i % 2 === 1 ? "bg-secondary/20" : undefined}
                    >
                      <td className="px-5 py-3 font-medium">{row.tipo}</td>
                      <td className="px-5 py-3 text-muted-foreground">
                        {row.finalita}
                      </td>
                      <td className="px-5 py-3 text-muted-foreground">
                        {row.durata}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Puoi gestire o disabilitare i cookie in qualsiasi momento
              tramite le impostazioni del tuo browser. La disabilitazione dei
              cookie tecnici potrebbe compromettere il corretto
              funzionamento di alcune funzionalità del sito.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 rounded-2xl border border-border bg-secondary/30 p-6">
            <p className="text-sm text-muted-foreground">
              Ultimo aggiornamento: Luglio 2026. {siteConfig.name} si riserva
              il diritto di modificare la presente informativa in qualsiasi
              momento; eventuali modifiche saranno pubblicate su questa
              pagina.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
