import {
  Building2,
  Gamepad2,
  HeartPulse,
  Megaphone,
  ShoppingCart,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

/**
 * La sección de profundidad: acá el visitante se entera de que Millo no es un
 * álbum de figuritas sino un manager. Cada dato duro del `chip` sale del motor
 * real del juego (repo millo), no es marketing inventado.
 */
const features: {
  icon: LucideIcon;
  title: string;
  chip: string;
  text: string;
}[] = [
  {
    icon: Gamepad2,
    title: "Decidís durante el partido",
    chip: "25 situaciones",
    text: "Penales, cambios, actitud táctica y decisiones en vivo que cambian el resultado. No mirás el partido: lo dirigís.",
  },
  {
    icon: Trophy,
    title: "Ocho competiciones",
    chip: "38 fechas de liga",
    text: "Liga y ascenso, Copa Argentina, Supercopa, Libertadores, Sudamericana, Recopa y Mundial de Clubes. Cada una con su formato real.",
  },
  {
    icon: ShoppingCart,
    title: "Mercado y sobres",
    chip: "173 clubes rivales",
    text: "Comprá, vendé y abrí sobres para completar el plantel. También fichás al DT que va a dirigirlo.",
  },
  {
    icon: HeartPulse,
    title: "Entrenamiento y lesiones",
    chip: "10 tipos de lesión",
    text: "Subí los atributos de tus jugadores, cuidá la condición física y manejá la enfermería fecha a fecha.",
  },
  {
    icon: Building2,
    title: "Tu club, tu infraestructura",
    chip: "6 instalaciones × 5 niveles",
    text: "Predio, gimnasio, kinesiología, inferiores. Cada mejora pega de verdad en el motor del partido.",
  },
  {
    icon: Megaphone,
    title: "Prensa, vestuario y dirigencia",
    chip: "55 logros",
    text: "Respondé a la prensa, bancá el vestuario y cumplí los objetivos de la dirigencia… o te echan.",
  },
];

export function GameFeatures() {
  return (
    <section
      id="juego"
      className="mx-auto max-w-[1200px] px-5 pt-16 pb-5 sm:px-8 sm:pt-[84px]"
    >
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-river sm:text-[11px]">
          ★ QUÉ VAS A PODER HACER
        </div>
        <h2 className="m-0 font-display text-[32px] leading-[1.02] font-extrabold uppercase text-text sm:text-[46px] sm:leading-none">
          No es solo juntar cartas.
          <br />
          Es dirigir a River.
        </h2>
        <p className="mx-auto mt-3.5 max-w-[560px] text-[15px] leading-relaxed text-text-2 sm:mt-[18px] sm:text-[17px]">
          Un motor de partido determinista, temporadas completas y un club que
          se te puede venir abajo si no das resultados.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-3">
        {features.map(({ icon: Icon, title, chip, text }, i) => (
          <Reveal key={title} delay={(i % 3) * 70} className="h-full">
            <div className="flex h-full flex-col rounded-[18px] border border-border-soft bg-surface p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[3px] hover:border-border-strong hover:shadow-[var(--shadow)] sm:rounded-[20px] sm:p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-[13px] bg-[rgba(225,50,42,0.12)] text-river">
                <Icon size={22} />
              </span>
              <div className="font-display text-[21px] leading-[1.05] font-bold uppercase text-text sm:text-[23px]">
                {title}
              </div>
              <p className="mt-2.5 grow text-[13.5px] leading-[1.55] text-text-2 sm:text-sm">
                {text}
              </p>
              <span className="mt-4 inline-flex w-fit items-center rounded-full border border-border-soft bg-surface-2 px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.1em] whitespace-nowrap text-muted uppercase">
                {chip}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
