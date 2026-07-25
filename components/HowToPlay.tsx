import { History, LayoutGrid, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    text: "Combiná cartas, elegí formación y buscá la mejor valoración. Tu equipo, tus reglas.",
  },
  {
    n: "03",
    icon: Trophy,
    title: "Competí y ganá",
    text: "Jugá los partidos de la liga, ganá monedas y experiencia, y desbloqueá nuevas cartas.",
  },
];

export function HowToPlay() {
  return (
    <section id="como" className="mx-auto max-w-[1200px] px-8 pt-[84px] pb-5">
      <div className="mx-auto max-w-[620px] text-center">
        <h2 className="m-0 font-display text-[38px] leading-none font-extrabold uppercase text-text sm:text-[46px]">
          De hincha a campeón
          <br />
          en tres pasos
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {steps.map(({ n, icon: Icon, title, text }) => (
          <div
            key={n}
            className="rounded-[20px] border border-border-soft bg-surface p-7"
          >
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
        ))}
      </div>
    </section>
  );
}
