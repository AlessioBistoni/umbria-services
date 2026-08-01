import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().trim().min(2, "Inserisci il tuo nome"),
  telefono: z
    .string()
    .trim()
    .min(6, "Inserisci un numero di telefono valido")
    .max(20, "Numero di telefono troppo lungo"),
  email: z.string().trim().email("Inserisci un indirizzo email valido"),
  oggetto: z.string().trim().min(2, "Indica l'oggetto della richiesta"),
  messaggio: z.string().trim().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
  privacy: z.boolean().refine((v) => v === true, {
    message: "Devi accettare l'informativa privacy per continuare",
  }),
  // honeypot field: must stay empty, invisible to real users
  website: z.string().max(0),
});

export type ContactInput = z.infer<typeof contactSchema>;
