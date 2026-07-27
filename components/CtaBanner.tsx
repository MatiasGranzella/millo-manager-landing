import { ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/site";

/**
 * CTA compacto para páginas interiores (SEO). Manda directo al juego.
 * Reutilizable con copy variable.
 */
export function CtaBanner({
  title = "Jugá gratis a Millo Manager",
  subtitle = "Creá tu cuenta y armá tu XI de leyendas. Gratis, desde el navegador.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-8 sm:py-16">
      <div className="relative overflow-hidden rounded-[24px] border border-border-soft bg-[radial-gradient(120%_140%_at_80%_-20%,#2a2012,#15140f_55%,#0e0f12)] px-5 py-10 text-center text-white sm:px-8 sm:py-12">
        <span className="millo-band -top-10 right-[80px] h-[420px] w-6" />
        <h2 className="relative m-0 font-display text-[28px] font-extrabold uppercase leading-[0.98] sm:text-[40px] sm:leading-[0.95]">
          {title}
        </h2>
        <p className="relative mx-auto mt-3 max-w-[520px] text-[16px] leading-relaxed text-[#c9ced4]">
          {subtitle}
        </p>
        <a
          href={APP_URL}
          className="relative mt-6 inline-flex cursor-pointer items-center gap-[9px] rounded-[13px] bg-river px-[26px] py-[15px] text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.35)] transition-colors hover:bg-river-bright"
        >
          <ArrowRight size={19} />
          Empezar a jugar
        </a>
      </div>
    </section>
  );
}
