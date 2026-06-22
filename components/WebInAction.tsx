import Image from "next/image";
import { ArrowRight, Check, Lock } from "lucide-react";

const features = [
  "Se sincroniza con tu cuenta de la app",
  "Armá tu XI con más espacio en pantalla",
  "Gratis, sin tarjeta",
];

export function WebInAction() {
  return (
    <section id="web" className="mx-auto max-w-[1200px] px-8 pt-[84px] pb-5">
      <div className="flex flex-wrap items-center gap-14">
        <div className="min-w-[320px] flex-1">
          <div className="mb-3.5 font-mono text-[11px] tracking-[0.16em] text-river">
            SIN DESCARGAS
          </div>
          <h2 className="m-0 font-display text-[38px] leading-none font-extrabold uppercase text-text sm:text-[46px]">
            Vas a jugar desde el
            <br />
            navegador, sin instalar
          </h2>
          <p className="my-[18px] mb-6 max-w-[430px] text-[17px] leading-relaxed text-text-2">
            La experiencia completa de Millo también en tu compu. Historia,
            equipos y competencia, sin instalar nada.
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
            className="inline-flex cursor-pointer items-center gap-[9px] rounded-[13px] bg-river px-[26px] py-[15px] text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.35)] transition-colors hover:bg-river-bright"
          >
            <ArrowRight size={19} />
            Quiero el acceso anticipado
          </a>
        </div>

        <div className="min-w-[380px] flex-[1.2]">
          <div className="overflow-hidden rounded-2xl border border-border-soft shadow-[var(--shadow)]">
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0E0F12] px-4 py-3">
              <span className="h-[11px] w-[11px] rounded-full bg-[#ED5249]" />
              <span className="h-[11px] w-[11px] rounded-full bg-gold" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#2FA968]" />
              <span className="ml-3.5 inline-flex max-w-[280px] flex-1 items-center gap-[7px] rounded-lg bg-[#1C1E23] px-3 py-1.5 font-mono text-[11px] text-[#7C828D]">
                <Lock size={12} />
                millomanager.com.ar/jugar
              </span>
            </div>
            <Image
              src="/assets/shot-web.svg"
              alt="Millo Manager en el navegador"
              width={600}
              height={380}
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
