import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

/**
 * Layout compartido de las páginas legales (privacidad, términos): columna
 * angosta de prosa con el mismo Nav/Footer que el resto del sitio.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav home={false} />
      <main className="mx-auto max-w-[760px] px-5 pt-12 pb-16 sm:px-8 sm:pt-16">
        <div className="mb-3 font-mono text-[10px] tracking-[0.16em] text-river sm:text-[11px]">
          ★ LEGALES
        </div>
        <h1 className="m-0 font-display text-[34px] leading-[1.02] font-extrabold uppercase text-text sm:text-[46px]">
          {title}
        </h1>
        <p className="mt-3 font-mono text-[11px] tracking-[0.1em] text-muted uppercase">
          Última actualización: {updated}
        </p>
        <div className="mt-9 flex flex-col gap-7">{children}</div>
      </main>
      <Footer home={false} />
    </>
  );
}

/** Bloque de sección: subtítulo + contenido. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="m-0 mb-2.5 font-display text-[22px] leading-tight font-bold uppercase text-text sm:text-[25px]">
        {heading}
      </h2>
      <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-text-2 sm:text-[16px]">
        {children}
      </div>
    </section>
  );
}
