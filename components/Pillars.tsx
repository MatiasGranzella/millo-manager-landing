import { Building2, History, LayoutGrid, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pillars: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: History,
    title: "Historia viva",
    text: "552 cartas de River, de La Máquina al plantel actual. Cada una con su rating, su rareza y sus 6 atributos.",
  },
  {
    icon: LayoutGrid,
    title: "Armá tu XI",
    text: "8 formaciones, 15 puestos y química por posición. Arrastrá, probá y guardá tu once ideal.",
  },
  {
    icon: Trophy,
    title: "Competí en serio",
    text: "Liga, Copa Argentina, Supercopa, Libertadores, Sudamericana, Recopa y Mundial de Clubes.",
  },
  {
    icon: Building2,
    title: "Dirigí el club",
    text: "Instalaciones, mercado, entrenamiento y una dirigencia que te va a pedir resultados.",
  },
];

export function Pillars() {
  return (
    <section
      id="pilares"
      className="mx-auto max-w-[1200px] px-5 pt-16 pb-5 sm:px-8 sm:pt-[84px]"
    >
      <div className="max-w-[640px]">
        <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-river sm:text-[11px]">
          ★ QUÉ ES MILLO
        </div>
        <h2 className="m-0 font-display text-[32px] leading-[1.02] font-extrabold uppercase text-text sm:text-[46px] sm:leading-none">
          Cuatro formas de vivir
          <br />
          el club, en un solo lugar
        </h2>
        <p className="mt-3.5 text-[15px] leading-relaxed text-text-2 sm:mt-[18px] sm:text-[17px]">
          Millo une la historia de River con un manager de verdad. Entrás por la
          pasión y te quedás por el juego.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-11 sm:gap-[18px] lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 70} className="h-full">
            <div className="h-full rounded-[18px] border border-border-soft bg-surface p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[3px] hover:border-border-strong hover:shadow-[var(--shadow)] sm:rounded-[20px] sm:p-6">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] bg-[rgba(225,50,42,0.12)] text-river sm:mb-[18px] sm:h-12 sm:w-12 sm:rounded-[14px]">
                <Icon size={22} />
              </span>
              <div className="font-display text-[19px] leading-none font-bold uppercase text-text sm:text-[23px]">
                {title}
              </div>
              <p className="mt-2 text-[13px] leading-[1.5] text-text-2 sm:mt-2.5 sm:text-sm sm:leading-[1.55]">
                {text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
