import { Camera, History, LayoutGrid, Swords } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const pillars: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: History,
    title: "Historia viva",
    text: 'Cada título, cada ídolo y cada "un día como hoy". Revivílos en video y línea del tiempo.',
  },
  {
    icon: LayoutGrid,
    title: "Armá tu XI",
    text: "Mezclá ídolos de todas las épocas y creá tu equipo histórico definitivo. Tu River ideal.",
  },
  {
    icon: Swords,
    title: "Competí",
    text: "Jugá la liga partido a partido, ganá monedas y experiencia, y subí de división.",
  },
  {
    icon: Camera,
    title: "Feed de hinchas",
    text: "Compartí tu cancha, tus formaciones y tu pasión con una comunidad que late igual que vos.",
  },
];

export function Pillars() {
  return (
    <section
      id="pilares"
      className="mx-auto max-w-[1200px] px-5 pt-16 pb-5 sm:px-8 sm:pt-[84px]"
    >
      <div className="max-w-[640px]">
        <h2 className="m-0 font-display text-[32px] leading-[1.02] font-extrabold uppercase text-text sm:text-[46px] sm:leading-none">
          Cuatro formas de vivir
          <br />
          el club, en un solo lugar
        </h2>
        <p className="mt-3.5 text-[15px] leading-relaxed text-text-2 sm:mt-[18px] sm:text-[17px]">
          Millo une historia, comunidad y competencia. Entrás por la pasión y te
          quedás por el juego.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-11 sm:gap-[18px] lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-[18px] border border-border-soft bg-surface p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-[3px] hover:shadow-[var(--shadow)] sm:rounded-[20px] sm:p-6"
          >
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
        ))}
      </div>
    </section>
  );
}
