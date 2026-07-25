import { PlayCircle, Swords } from "lucide-react";
import { PlayerCard } from "@/components/game/PlayerCard";
import { getIdolBySlug, getTopIdols } from "@/lib/game/players";

export function Hero() {
  const featured = getIdolBySlug("enzo-francescoli") ?? getTopIdols(1)[0];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_88%_-10%,rgba(225,50,42,0.12),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-8 pt-16 pb-[72px]">
        <div className="min-w-[340px] flex-[1.15]">
          <h1 className="m-0 mb-1.5 font-display text-[44px] leading-[1.04] font-extrabold tracking-[-0.01em] uppercase text-text sm:text-[56px] lg:text-[64px]">
            La historia de River,
            <br />
            ahora se <span className="text-river">juega</span>.
          </h1>
          <p className="my-6 max-w-[480px] text-lg leading-relaxed text-text-2">
            Revisá cada gloria, coleccioná a los ídolos de todas las épocas y
            armá tu mejor XI. La app donde ser de River se vive, se comparte y se
            juega.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex cursor-pointer items-center gap-[9px] rounded-[13px] bg-river px-7 py-4 text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.4)] transition-colors hover:bg-river-bright"
            >
              <Swords size={19} />
              Sumate a la lista de espera
            </a>
            <a
              href="#como"
              className="inline-flex cursor-pointer items-center gap-[9px] rounded-[13px] border-[1.5px] border-border-strong bg-transparent px-6 py-4 text-base font-bold text-text no-underline transition-colors hover:bg-chip"
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
            <div className="animate-float relative block w-[300px]">
              <PlayerCard idol={featured} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
