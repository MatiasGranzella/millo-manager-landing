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
    text: "Desafiá a otros hinchas en matches virtuales. Votá, ganá puntos y subí en el ranking.",
  },
  {
    icon: Camera,
    title: "Feed de hinchas",
    text: "Compartí tu cancha, tus formaciones y tu pasión con una comunidad que late igual que vos.",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="mx-auto max-w-[1200px] px-8 pt-[84px] pb-5">
      <div className="max-w-[640px]">
        <div className="mb-3.5 font-mono text-[11px] tracking-[0.16em] text-river">
          QUÉ ES MILLO
        </div>
        <h2 className="m-0 font-display text-[38px] leading-none font-extrabold uppercase text-text sm:text-[46px]">
          Cuatro formas de vivir
          <br />
          el club, en un solo lugar
        </h2>
        <p className="mt-[18px] text-[17px] leading-relaxed text-text-2">
          Millo une historia, comunidad y competencia. Entrás por la pasión y te
          quedás por el juego.
        </p>
      </div>

      <div className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-[20px] border border-border-soft bg-surface p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-[3px] hover:shadow-[var(--shadow)]"
          >
            <span className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-[14px] bg-[rgba(225,50,42,0.12)] text-river">
              <Icon size={24} />
            </span>
            <div className="font-display text-[23px] leading-none font-bold uppercase text-text">
              {title}
            </div>
            <p className="mt-2.5 text-sm leading-[1.55] text-text-2">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
