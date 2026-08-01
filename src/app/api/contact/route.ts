import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-data";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dati non validi", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Honeypot: silently accept bot submissions without sending anything.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { nome, telefono, email, oggetto, messaggio } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY non configurata: impossibile inviare l'email di contatto."
    );
    return NextResponse.json(
      { error: "Servizio email non configurato. Riprova più tardi o chiamaci direttamente." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} <onboarding@resend.dev>`,
      to,
      replyTo: email,
      subject: `Nuova richiesta dal sito: ${oggetto}`,
      text: [
        `Nome: ${nome}`,
        `Telefono: ${telefono}`,
        `Email: ${email}`,
        `Oggetto: ${oggetto}`,
        "",
        messaggio,
      ].join("\n"),
    });

    if (error) {
      console.error("Errore invio email Resend:", error);
      return NextResponse.json(
        { error: "Impossibile inviare il messaggio in questo momento." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Errore invio email:", err);
    return NextResponse.json(
      { error: "Impossibile inviare il messaggio in questo momento." },
      { status: 500 }
    );
  }
}
