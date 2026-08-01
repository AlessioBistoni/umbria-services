import { images } from "@/lib/images";

export const siteConfig = {
  name: "Umbria Services",
  tagline: "Wellbeing, Events & Logistics",
  description:
    "Massaggi, yoga e trattamenti di benessere a domicilio in Umbria. Prenota il tuo momento di relax con i professionisti di Umbria Services.",
  url: "https://www.umbriaservices.it",
  phone: "+39 347 905 1571",
  phoneHref: "+393479051571",
  phoneFixed: "+39 075 941 40 34",
  email: "info@umbriaservices.it",
  address: {
    street: "Via L. Da Vinci, 201",
    zip: "06019",
    city: "Pierantonio",
    province: "PG",
    country: "Italia",
  },
  vat: "IT 03521830541",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trattamenti", label: "Trattamenti" },
  { href: "/servizi", label: "Servizi" },
  { href: "/location", label: "Location Esclusive" },
  { href: "/contatti", label: "Contatti" },
] as const;

export type Massaggio = {
  slug: string;
  nome: string;
  descrizione: string;
  durata?: string;
};

export const massaggi: Massaggio[] = [
  {
    slug: "rilassante-antistress",
    nome: "Rilassante / Antistress",
    descrizione:
      "Manualità dolci e avvolgenti per coccolare il corpo e la mente. Un vero e proprio concentrato di benessere pensato per allontanare lo stress quotidiano.",
    durata: "50-80 min",
  },
  {
    slug: "defaticante-sportivo",
    nome: "Defaticante / Sportivo",
    descrizione:
      "L'accumulo di acido lattico nei muscoli dopo uno sforzo fisico provoca dolore e facilità ai crampi: questo massaggio aiuta il riassorbimento, alleviando le situazioni dolorose post attività.",
    durata: "50-60 min",
  },
  {
    slug: "terapeutico",
    nome: "Terapeutico",
    descrizione:
      "Manualità mirate che intervengono su situazioni dolorose, sia in fase acuta che cronica, per restituire mobilità e sollievo.",
    durata: "40-60 min",
  },
  {
    slug: "ayurvedico",
    nome: "Ayurvedico",
    descrizione:
      "Tradotto letteralmente significa \"Conoscenza della Vita\": nella visione ayurvedica la salute si identifica con il perfetto equilibrio dell'organismo nel suo insieme. Viene trattato tutto il corpo.",
    durata: "60-90 min",
  },
  {
    slug: "massaggio-di-coppia",
    nome: "Massaggio di coppia",
    descrizione:
      "Un piacevole momento di benessere da condividere insieme, in totale intimità nella location che preferite.",
    durata: "60 min",
  },
];

export const trattamentiEstetici: string[] = [
  "Manicure",
  "Pedicure",
  "Smalto Permanente",
  "Linfodrenaggio",
  "Trattamento Viso Benessere",
  "Trattamento Viso Anti Age",
  "Trattamento Rigenerante Corpo",
  "Trattamento Corpo Idratante Rivitalizzante",
  "Make Up Sposa",
  "Epilazione",
  "Parrucchiere / Coiffeur",
];

export type ServiceCategory = {
  slug: string;
  title: string;
  icon: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "benessere",
    title: "Benessere",
    icon: "Sparkles",
    items: [
      "Massaggi",
      "Estetica",
      "Riabilitazioni",
      "Yoga",
      "Pilates",
      "Biologo Nutrizionista",
    ],
  },
  {
    slug: "sport",
    title: "Sport",
    icon: "Dumbbell",
    items: [
      "Istruttore di Tennis",
      "Istruttore di Nuoto",
      "Istruttore di Pilates",
      "Istruttore di Acquagym",
      "Personal Trainer",
      "Lezioni di Equitazione",
      "Passeggiate a Cavallo",
    ],
  },
  {
    slug: "cucina",
    title: "Cucina",
    icon: "ChefHat",
    items: [
      "Degustazione Prodotti Tipici",
      "Chef a Domicilio",
      "Catering",
      "Corsi di Cucina",
      "Corsi di Cucina Biologica",
    ],
  },
  {
    slug: "bambini",
    title: "Intrattenimento Bambini",
    icon: "PartyPopper",
    items: ["Baby Sitter", "Animazione per Feste Private"],
  },
  {
    slug: "trasporto",
    title: "Trasporto",
    icon: "Car",
    items: ["Auto / Pulmino", "Noleggio Auto", "Elicottero / Aereo privato"],
  },
  {
    slug: "casa",
    title: "Per la Casa",
    icon: "Home",
    items: [
      "Idraulico",
      "Elettricista",
      "Giardiniere",
      "Falegname",
      "Tappezziere",
      "Vetraio",
      "Forniture Infissi",
      "Consulenze Fotovoltaico",
      "Consulenze Energie Rinnovabili",
    ],
  },
  {
    slug: "tour",
    title: "Tour",
    icon: "Map",
    items: ["Tour Culturali", "Tour Enogastronomici"],
  },
  {
    slug: "vari",
    title: "Servizi Vari",
    icon: "Star",
    items: [
      "Location esclusiva per Eventi",
      "Parrucchiere",
      "Fotografo",
      "Passeggiate alla ricerca del Tartufo",
      "Musica",
    ],
  },
];

export type Location = {
  slug: string;
  nome: string;
  descrizione: string;
  image: string;
};

export const locations: Location[] = [
  {
    slug: "convento",
    nome: "Convento",
    descrizione:
      "Un antico convento umbro restaurato con cura, cornice suggestiva per eventi e cerimonie indimenticabili.",
    image: images.umbriaWindow,
  },
  {
    slug: "capanne",
    nome: "Capanne",
    descrizione:
      "Un rifugio immerso nel verde della campagna umbra, perfetto per momenti intimi e ritiri di benessere.",
    image: images.tuscanyHills,
  },
  {
    slug: "casa-san-gabriel",
    nome: "Casa San Gabriel",
    descrizione:
      "Dimora storica dal fascino autentico, ideale per soggiorni esclusivi e celebrazioni private.",
    image: images.villaOnHill,
  },
  {
    slug: "chiesa-del-carmine",
    nome: "Chiesa del Carmine",
    descrizione:
      "Location di grande valore architettonico e spirituale, scenario unico per cerimonie ed eventi speciali.",
    image: images.stoneArchway,
  },
  {
    slug: "monticelli",
    nome: "Monticelli",
    descrizione:
      "Tra i colli umbri, un luogo panoramico su misura per matrimoni ed eventi all'aperto.",
    image: images.villaTerrace,
  },
  {
    slug: "villa-ranca",
    nome: "Villa Ranca",
    descrizione:
      "Elegante villa signorile con ampi spazi verdi, la scelta ideale per ricevimenti importanti.",
    image: images.greenValley,
  },
];

export type Partner = {
  nome: string;
  descrizione: string;
  indirizzo: string;
  citta: string;
  telefono: string;
};

export const partners: Partner[] = [
  {
    nome: "Barajà",
    descrizione: "Brunch & Fantasy Cocktail",
    indirizzo: "Via Rodolfo Morandi",
    citta: "Umbertide, PG",
    telefono: "075 930 25 66",
  },
  {
    nome: "Antico Caffè Giardino",
    descrizione: "Storico caffè nel cuore della città",
    indirizzo: "Via Venanzio Gabriotti, 16",
    citta: "Umbertide, PG",
    telefono: "075 930 25 66",
  },
];
