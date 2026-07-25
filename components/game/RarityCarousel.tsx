"use client";

import { useEffect, useState } from "react";
import { PlayerCard } from "@/components/game/PlayerCard";
import { RARITY } from "@/lib/design/rarity";
import type { Idol } from "@/lib/game/players";

/**
 * Carrusel de cartas que va rotando por rareza (leyenda → platino → oro → plata
 * → bronce), mostrando una carta real de cada nivel con un crossfade. Deja claro
 * que existen los 5 niveles de rareza. Respeta `prefers-reduced-motion` (queda
 * fijo en la primera carta).
 */
export function RarityCarousel({ idols }: { idols: Idol[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (idols.length <= 1) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % idols.length), 2400);
    return () => clearInterval(id);
  }, [idols.length]);

  if (idols.length === 0) return null;
  const current = idols[i];
  const rarity = RARITY[current.card.rarity];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* la carta (crossfade por rareza); grid apilado para que el alto sea el
          de la carta más alta y el conjunto quede bien centrado en la sección */}
      <div className="grid w-[300px]">
        {idols.map((idol, idx) => (
          <div
            key={idol.slug}
            aria-hidden={idx !== i}
            className="col-start-1 row-start-1 transition-opacity duration-500"
            style={{ opacity: idx === i ? 1 : 0 }}
          >
            <PlayerCard idol={idol} />
          </div>
        ))}
      </div>

      {/* indicador de nivel actual + puntos */}
      <div className="flex items-center gap-2">
        {idols.map((idol, idx) => (
          <button
            key={idol.slug}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Ver carta ${RARITY[idol.card.rarity].label}`}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: idx === i ? 26 : 10,
              background: idx === i ? rarity.color : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
