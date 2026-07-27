import { Plus } from "lucide-react";
import {
  IDOL_COUNT as total,
  IDOL_WITH_PHOTO_COUNT as conRetrato,
} from "@/lib/game/players";

/**
 * Preguntas frecuentes. Acordeón nativo (<details>) sin JS y con JSON-LD
 * FAQPage generado desde la MISMA fuente de datos (rich results en Google).
 */

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué es Millo Manager?",
    a: `Millo Manager es un football manager dedicado a River Plate: coleccionás las cartas de los ídolos del club de todas las épocas, armás tu mejor XI, definís la táctica y dirigís los partidos de la liga. Combina la historia de River con un juego tipo Ultimate Team.`,
  },
  {
    q: "¿Es gratis?",
    a: "Sí. Se juega gratis y sin tarjeta: no hay compras dentro del juego ni suscripción.",
  },
  {
    q: "¿Cómo creo mi cuenta?",
    a: "Con el botón «Jugar ahora» entrás al juego y creás tu cuenta con email y contraseña, o entrás directo con tu cuenta de Google. Si elegís Google, Millo Manager solo recibe tu nombre, tu email y tu foto de perfil, y los usa nada más que para crear e identificar tu cuenta de DT: no accedemos a Gmail, Drive, contactos ni a ningún otro dato de tu cuenta de Google, y no compartimos esa información con terceros.",
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
    a: `El juego tiene 552 jugadores de River hechos carta, de todas las épocas: de Ángel Labruna y La Máquina a Francescoli, Aimar, Crespo, Quintero, Julián Álvarez y Enzo Fernández. Cada uno con su rating, su rareza y sus atributos. En este sitio podés ver la ficha de ${total} de ellos, ${conRetrato} ya con su retrato al óleo.`,
  },
  {
    q: "¿Cómo se juega?",
    a: "Armás tu plantel con cartas de ídolos, elegís entre 8 formaciones y cuidás la química de cada puesto, y dirigís los partidos contra la IA. Vas ganando monedas y experiencia, abrís sobres, sumás cartas y subís de división.",
  },
  {
    q: "¿Qué tan profundo es el juego?",
    a: "Bastante más que juntar cartas. Hay 8 competiciones (liga, Copa Argentina, Supercopa, Libertadores, Sudamericana, Recopa y Mundial de Clubes), decisiones que tomás durante el partido —penales, cambios, actitud táctica—, entrenamiento, 10 tipos de lesión con su enfermería, mercado de pases y de DTs, mejoras de infraestructura del club, y una dirigencia que te pone objetivos y te puede echar si no los cumplís.",
  },
  {
    q: "¿Se juega contra otros usuarios?",
    a: "Por ahora no. Dirigís contra equipos manejados por la IA en las 8 competiciones, y competís con el resto de los DTs en un ranking global por nivel y títulos. El PvP está en la lista de deseos, pero todavía no existe.",
  },
  {
    q: "¿En qué dispositivos funciona?",
    a: "En cualquier dispositivo con navegador: celular, tablet o computadora. Está pensado mobile-first, así que se juega cómodo desde el teléfono.",
  },
  {
    q: "¿Cuándo puedo jugar?",
    a: "Ya podés: entrá con el botón «Jugar ahora», creá tu cuenta y empezá a dirigir. El juego está en desarrollo activo, así que seguimos sumando cartas y funciones; dejanos tu email si querés que te avisemos de las novedades.",
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
