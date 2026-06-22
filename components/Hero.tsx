import Image from "next/image";
import { PlayCircle, Swords } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_88%_-10%,rgba(225,50,42,0.12),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-8 pt-16 pb-[72px]">
        <div className="min-w-[340px] flex-[1.15]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-soft bg-chip px-[13px] py-[7px] font-mono text-[11px] tracking-[0.18em] text-river">
            ★ TODO RIVER, SIEMPRE
          </div>
          <h1 className="m-0 mb-1.5 font-display text-[44px] leading-[1.04] font-extrabold tracking-[-0.01em] uppercase text-text sm:text-[56px] lg:text-[64px]">
            La historia de River,
            <br />
            ahora se <span className="text-river">juega</span>.
          </h1>
          <p className="my-6 max-w-[480px] text-lg leading-relaxed text-text-2">
            Revisá cada gloria, armá tu mejor XI de todas las eras y competí
            contra la comunidad. La app donde ser de River se vive, se comparte y
            se juega.
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
          <div className="mt-[30px] flex items-center gap-3">
            <span className="flex">
              <span className="h-8 w-8 rounded-full border-2 border-bg bg-gradient-to-br from-river to-[#7E1413]" />
              <span className="-ml-[11px] h-8 w-8 rounded-full border-2 border-bg bg-gradient-to-br from-[#3A3E47] to-[#1C1E23]" />
              <span className="-ml-[11px] h-8 w-8 rounded-full border-2 border-bg bg-gradient-to-br from-gold to-[#B8882E]" />
              <span className="-ml-[11px] h-8 w-8 rounded-full border-2 border-bg bg-gradient-to-br from-[#C9CED4] to-[#8E949C]" />
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-text-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2FA968] shadow-[0_0_0_3px_rgba(47,169,104,0.2)]" />
              <b className="text-text">+2.300 hinchas</b> ya en la lista
            </span>
          </div>
        </div>

        <div className="relative mx-auto flex-none">
          <div className="absolute top-[30px] right-1.5 h-[520px] w-[30px] skew-x-[-20deg] rounded-[99px] bg-river opacity-[0.14]" />
          <div className="absolute -bottom-5 -left-[30px] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(230,185,78,0.28),transparent_70%)] blur-lg" />
          <Image
            src="/assets/shot-home.svg"
            alt="Pantalla de inicio de Millo Manager"
            width={300}
            height={600}
            priority
            className="animate-float relative block w-[300px] rounded-[46px] shadow-[var(--shadow),0_0_0_1px_var(--border)]"
          />
          <div className="absolute -top-4 -left-12 z-[2] flex items-center gap-2.5 rounded-[14px] border border-border-soft bg-surface px-3.5 py-[11px] shadow-[var(--shadow)]">
            <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[10px] bg-gradient-to-br from-[#F2D17A] to-[#C99A2E]">
              <span className="text-lg">🏆</span>
            </span>
            <div>
              <div className="font-display text-lg leading-none font-extrabold text-text">
                Match ganado
              </div>
              <div className="text-[11px] text-muted">+1 carta leyenda</div>
            </div>
          </div>
          <div className="absolute right-[-30px] bottom-[70px] flex items-center gap-2.5 rounded-[14px] border border-border-soft bg-surface px-3.5 py-[11px] shadow-[var(--shadow)]">
            <span className="font-display text-[30px] leading-none font-extrabold text-gold">
              96
            </span>
            <div>
              <div className="text-[13px] leading-[1.1] font-bold text-text">
                Tu River &apos;18
              </div>
              <div className="text-[11px] text-muted">valoración del XI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
