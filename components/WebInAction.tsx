import { ArrowRight, Check, Lock } from "lucide-react";
import { MatchSim } from "@/components/game/MatchSim";

const features = [
  "Mismo juego en la compu y en el celular",
  "Armá tu XI con más espacio en pantalla",
  "Gratis, sin tarjeta",
];

export function WebInAction() {
  return (
    <section
      id="web"
      className="mx-auto max-w-[1200px] px-5 pt-16 pb-5 sm:px-8 sm:pt-[84px]"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="min-w-0 flex-1">
          <h2 className="m-0 font-display text-[32px] leading-[1.02] font-extrabold uppercase text-text sm:text-[46px] sm:leading-none">
            Vas a jugar desde el
            <br />
            navegador, sin instalar
          </h2>
          <p className="my-[18px] mb-6 max-w-[430px] text-[15px] leading-relaxed text-text-2 sm:text-[17px]">
            La experiencia completa de Millo también en tu compu. Viví los
            partidos en vivo, armá tu XI y competí, sin instalar nada.
          </p>
          <div className="mb-[30px] flex flex-col gap-3">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-[11px] text-[15px] text-text"
              >
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[rgba(47,169,104,0.15)] text-[#2FA968]">
                  <Check size={15} />
                </span>
                {f}
              </div>
            ))}
          </div>
          <a
            href="#waitlist"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-[9px] rounded-[13px] bg-river px-[26px] py-[15px] text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.35)] transition-colors hover:bg-river-bright sm:w-auto"
          >
            <ArrowRight size={19} />
            Quiero el acceso anticipado
          </a>
        </div>

        <div className="w-full min-w-0 lg:flex-[1.2]">
          <div className="overflow-hidden rounded-2xl border border-border-soft shadow-[var(--shadow)]">
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0E0F12] px-4 py-3">
              <span className="h-[11px] w-[11px] rounded-full bg-[#ED5249]" />
              <span className="h-[11px] w-[11px] rounded-full bg-gold" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#2FA968]" />
              <span className="ml-3.5 inline-flex min-w-0 max-w-[280px] flex-1 items-center gap-[7px] truncate rounded-lg bg-[#1C1E23] px-3 py-1.5 font-mono text-[11px] text-[#7C828D]">
                <Lock size={12} className="flex-none" />
                <span className="truncate">app.millomanager.com.ar</span>
              </span>
            </div>
            <div className="flex justify-center bg-[#0E0F12] p-3.5 sm:p-6">
              <MatchSim />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
