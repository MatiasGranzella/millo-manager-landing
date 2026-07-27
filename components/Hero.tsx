import { PlayCircle, Swords } from "lucide-react";
import { PlayerCard } from "@/components/game/PlayerCard";
import { getIdolBySlug, getTopIdols } from "@/lib/game/players";
import { APP_URL } from "@/lib/site";

/**
 * Hero de la home. El H1 arranca con el nombre exacto de la app ("Millo
 * Manager") a propósito: es el nombre del cliente OAuth en Google Cloud y la
 * verificación falla si la home lo muestra distinto. Por lo mismo el párrafo de
 * abajo dice en una frase qué es la app y cómo se entra.
 */
export function Hero() {
  const featured = getIdolBySlug("enzo-francescoli") ?? getTopIdols(1)[0];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_88%_-10%,rgba(225,50,42,0.12),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-5 pt-11 pb-16 sm:px-8 lg:flex-row lg:gap-14 lg:pt-16 lg:pb-[72px]">
        <div className="w-full min-w-0 text-center lg:flex-[1.15] lg:text-left">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[rgba(225,50,42,0.25)] bg-[rgba(225,50,42,0.07)] px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-river sm:text-[11px]">
            ★ EL JUEGO DE LA HISTORIA DE RIVER
          </div>
          <h1 className="m-0 mb-1.5 font-display text-[40px] leading-[1.02] font-extrabold tracking-[-0.01em] uppercase text-text sm:text-[56px] lg:text-[64px] lg:leading-[1.04]">
            Millo <span className="text-river">Manager</span>
            <span className="mt-1.5 block text-[24px] leading-[1.1] font-bold text-text-2 sm:mt-2 sm:text-[32px] lg:text-[34px]">
              La historia de River, ahora se juega.
            </span>
          </h1>
          <p className="mx-auto my-5 max-w-[520px] text-[16px] leading-relaxed text-text-2 sm:my-6 sm:text-lg lg:mx-0">
            Millo Manager es un juego de fútbol tipo manager, gratis y sin
            descargas, dedicado a River Plate. Coleccioná a los ídolos de todas
            las épocas, armá tu mejor XI y dirigí a River en la liga y las copas.
            Se juega desde el navegador y entrás con tu cuenta de Google o con tu
            email.
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
            <a
              href={APP_URL}
              className="inline-flex cursor-pointer items-center justify-center gap-[9px] rounded-[13px] bg-river px-7 py-4 text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.4)] transition-colors hover:bg-river-bright"
            >
              <Swords size={19} />
              Jugar gratis
            </a>
            <a
              href="#como"
              className="inline-flex cursor-pointer items-center justify-center gap-[9px] rounded-[13px] border-[1.5px] border-border-strong bg-transparent px-6 py-4 text-base font-bold text-text no-underline transition-colors hover:bg-chip"
            >
              <PlayCircle size={19} />
              Ver cómo se juega
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex-none">
          <div className="absolute top-[10px] right-1.5 h-[440px] w-[30px] skew-x-[-20deg] rounded-[99px] bg-river opacity-[0.14]" />
          <div className="absolute -bottom-5 -left-[30px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(230,185,78,0.28),transparent_70%)] blur-lg" />
          {featured ? (
            <div className="animate-float relative block w-[280px] sm:w-[300px]">
              <PlayerCard idol={featured} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
