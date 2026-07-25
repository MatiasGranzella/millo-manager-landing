import { Plus } from "lucide-react";
import { getAllIdols } from "@/lib/game/players";

/**
 * Preguntas frecuentes. Acordeón nativo (<details>) sin JS y con JSON-LD
 * FAQPage generado desde la MISMA fuente de datos (rich results en Google).
 */

const total = getAllIdols().length;

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué es Millo Manager?",
    a: `Millo Manager es un football manager dedicado a River Plate: coleccionás las cartas de los ídolos del club de todas las épocas, armás tu mejor XI, definís la táctica y dirigís los partidos de la liga. Combina la historia de River con un juego tipo Ultimate Team.`,
  },
  {
    q: "¿Es gratis?",
    a: "Sí. Se juega gratis y sin tarjeta. Sumate a la lista de espera con tu email para tener acceso apenas abramos.",
  },
  {
    q: "¿Tengo que descargar algo?",
    a: "No. Millo Manager se juega desde el navegador, en la compu o el celular. Sin descargas ni instalaciones.",
  },
  {
    q: "¿Es un juego oficial de River Plate?",
    a: "No. Es un proyecto hecho por hinchas, para hinchas. Es un sitio no oficial de fans, sin relación con el Club Atlético River Plate.",
  },
  {
    q: "¿Qué ídolos puedo conseguir?",
    a: `Hay ${total} jugadores de River hechos carta, de todas las épocas: de Ángel Labruna y La Máquina a Francescoli, Aimar, Crespo, Quintero, Julián Álvarez y Enzo Fernández. Cada uno con su rating, rareza y atributos reales.`,
  },
  {
    q: "¿Cómo se juega?",
    a: "Armás tu plantel con cartas de ídolos, elegís formación y química, y dirigís los partidos de la liga contra la IA. Vas ganando monedas y experiencia, abrís sobres, sumás cartas y subís de división.",
  },
  {
    q: "¿En qué dispositivos funciona?",
    a: "En cualquier dispositivo con navegador: celular, tablet o computadora. Está pensado mobile-first, así que se juega cómodo desde el teléfono.",
  },
  {
    q: "¿Cuándo puedo jugar?",
    a: "Estamos en etapa previa al lanzamiento. Dejá tu email en la lista de espera y te avisamos apenas puedas entrar a jugar.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-[860px] px-5 pt-16 pb-4 sm:px-8 sm:pt-[84px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-3.5 text-center font-mono text-[10px] tracking-[0.16em] text-river sm:text-[11px]">
        PREGUNTAS FRECUENTES
      </div>
      <h2 className="m-0 text-center font-display text-[32px] leading-[1.02] font-extrabold uppercase text-text sm:text-[46px] sm:leading-none">
        Todo lo que querés saber
      </h2>

      <div className="mt-8 flex flex-col gap-3 sm:mt-10">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-[16px] border border-border-soft bg-surface px-5 py-4 transition-colors open:border-border-strong"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[19px] font-bold text-text [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="flex size-7 flex-none items-center justify-center rounded-full bg-chip text-text-2 transition-transform duration-200 group-open:rotate-45">
                <Plus size={16} />
              </span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-text-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
