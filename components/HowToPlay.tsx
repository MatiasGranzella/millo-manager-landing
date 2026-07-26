import { History, LayoutGrid, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps: { n: string; icon: LucideIcon; title: string; text: string }[] = [
  {
    n: "01",
    icon: History,
    title: "Sumá tus cartas",
    text: "De 1986 a Madrid eterno o el plantel actual: empezá con las cartas de los ídolos que te marcaron.",
  },
  {
    n: "02",
    icon: LayoutGrid,
    title: "Armá tu XI",
    text: "Combiná cartas, elegí entre 8 formaciones y cuidá la química de cada puesto. Tu equipo, tus reglas.",
  },
  {
    n: "03",
    icon: Trophy,
    title: "Competí y ganá",
    text: "Dirigí los partidos fecha a fecha, ganá monedas y experiencia, y peleá la liga y las copas.",
  },
];

export function HowToPlay() {
  return (
    <section
      id="como"
      className="mx-auto max-w-[1200px] px-5 pt-16 pb-5 sm:px-8 sm:pt-[84px]"
    >
      <div className="mx-auto max-w-[620px] text-center">
        <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-river sm:text-[11px]">
          ★ CÓMO SE JUEGA
        </div>
        <h2 className="m-0 font-display text-[32px] leading-[1.02] font-extrabold uppercase text-text sm:text-[46px] sm:leading-none">
          De hincha a campeón
          <br />
          en tres pasos
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
        {steps.map(({ n, icon: Icon, title, text }, i) => (
          <Reveal key={n} delay={i * 70} className="h-full">
            <div className="h-full rounded-[20px] border border-border-soft bg-surface p-5 transition-all duration-200 hover:-translate-y-[3px] hover:border-border-strong hover:shadow-[var(--shadow)] sm:p-7">
              <div className="mb-4 flex items-center gap-3.5">
                <span className="font-display text-[46px] leading-[0.8] font-extrabold text-river">
                  {n}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-border-soft bg-surface-2 text-text">
                  <Icon size={22} />
                </span>
              </div>
              <div className="font-display text-2xl leading-none font-bold uppercase text-text">
                {title}
              </div>
              <p className="mt-2.5 text-[14.5px] leading-[1.55] text-text-2">
                {text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
