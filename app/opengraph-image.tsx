import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Imagen social por defecto (OG + Twitter) generada por código. Marca Millo
 * sobre fondo oscuro con la banda roja de River. Estática (cacheada en build).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(120% 120% at 80% -10%, #2a2012 0%, #15140f 45%, #0e0f12 100%)",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* banda roja diagonal estilo River */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: 180,
            width: 90,
            height: 900,
            background: "#e1322a",
            opacity: 0.9,
            transform: "skewX(-20deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            right: 300,
            width: 40,
            height: 900,
            background: "#e1322a",
            opacity: 0.5,
            transform: "skewX(-20deg)",
          }}
        />
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: "#e6b94e",
            fontWeight: 700,
          }}
        >
          FOOTBALL MANAGER DE RIVER
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 116,
            fontWeight: 900,
            lineHeight: 1,
            marginTop: 16,
            textTransform: "uppercase",
          }}
        >
          Millo Manager
        </div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 24, color: "#c9ced4" }}>
          {SITE_TAGLINE}. Coleccioná a los ídolos y armá tu XI.
        </div>
      </div>
    ),
    { ...size },
  );
}
