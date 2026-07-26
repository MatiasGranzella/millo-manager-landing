"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Entrada suave al entrar en viewport. El estado oculto se aplica desde JS (no
 * desde el HTML server-rendered) a propósito: sin JS, o con
 * `prefers-reduced-motion`, el contenido se ve normal y el crawler siempre lo
 * lee. `delay` escalona las cards de una grilla.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    // Si ya está en pantalla al montar (hero, above the fold) no tiene sentido
    // ocultarlo para volver a mostrarlo: haría un flash.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setArmed(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${armed ? (shown ? "millo-reveal-in" : "millo-reveal") : ""} ${className}`}
      style={armed && shown ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
