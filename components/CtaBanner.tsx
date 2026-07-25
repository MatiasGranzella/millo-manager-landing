import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * CTA compacto para páginas interiores (SEO). Empuja a la lista de espera de la
 * home, donde vive el único formulario real. Reutilizable con copy variable.
 */
export function CtaBanner({
  title = "Sumate a la lista de espera",
  subtitle = "Jugá gratis desde el navegador. Sé de los primeros en armar tu XI de leyendas.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-8 py-16">
      <div className="relative overflow-hidden rounded-[24px] border border-border-soft bg-[radial-gradient(120%_140%_at_80%_-20%,#2a2012,#15140f_55%,#0e0f12)] px-8 py-12 text-center text-white">
        <span className="millo-band -top-10 right-[80px] h-[420px] w-6" />
        <h2 className="relative m-0 font-display text-[32px] font-extrabold uppercase leading-[0.95] sm:text-[40px]">
          {title}
        </h2>
        <p className="relative mx-auto mt-3 max-w-[520px] text-[16px] leading-relaxed text-[#c9ced4]">
          {subtitle}
        </p>
        <Link
          href="/#waitlist"
          className="relative mt-6 inline-flex cursor-pointer items-center gap-[9px] rounded-[13px] bg-river px-[26px] py-[15px] text-base font-bold text-white no-underline shadow-[0_10px_26px_rgba(225,50,42,0.35)] transition-colors hover:bg-river-bright"
        >
          <ArrowRight size={19} />
          Quiero el acceso anticipado
        </Link>
      </div>
    </section>
  );
}
