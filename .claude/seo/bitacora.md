# Bitácora de SEO / GEO

Una entrada por cambio apostado. La escribe la skill `seo-iterar` (paso 6) y la
lee al arrancar la corrida siguiente (paso 0) para medir si la apuesta pagó.

Sin `Baseline` anotado, el cambio no se puede evaluar después. No hay entrada
sin baseline.

Veredictos: `pendiente` (menos de 21 días) · `sin datos` (menos de 100
impresiones) · `funcionó` · `no movió` · `empeoró`.

---

<!-- Entradas nuevas arriba de esta línea, más recientes primero. -->

## 2026-07-26 — Baseline cero: el sitio no fue crawleado nunca

- **Balde:** técnico (previo a A/B/C/D: sin crawl no hay datos que optimizar)
- **Propiedad:** `sc-domain:millomanager.com.ar` (tipo Dominio, permiso siteOwner)
- **Baseline:**
  - Search analytics 2026-06-26 → 2026-07-23: **0 clicks, 0 impresiones**. Sin filas.
  - Sitemap `https://millomanager.com.ar/sitemap.xml`: subido, descargado por
    primera vez el 2026-07-26, **0 errores**, 100 URLs enviadas.
  - URL Inspection sobre home, `/idolos`, las 3 landings de keyword y un ídolo:
    las 6 dan `Google no reconoce esta URL`, **último crawl: nunca**.
  - `https://www.millomanager.com.ar/` sí figura como `Descubierta: actualmente
    sin indexar` — Google la descubrió por el sitemap viejo, que listaba www.
- **Descartado como causa** (verificado contra producción, no asumido):
  `<meta name="robots" content="index, follow">`, sin `X-Robots-Tag`,
  `robots.txt` con `Allow: /`, sitemap 200 sin auth, y Googlebot recibe 200.
  El sitio está técnicamente sano: es un dominio nuevo sin enlaces entrantes.
- **Hipótesis:** el sitemap le entregaba a Google 100 URLs en `www` que
  redirigen con 307 al apex, así que la cola de crawl se llenó de saltos en vez
  de destinos. Alinear el canónico al apex (PR #5) le da a Google 100 URLs que
  responden 200 directo.
- **Métrica de éxito:** que en 28 días la home y las 3 landings de keyword pasen
  de `nunca crawleada` a tener `lastCrawlTime`, y que el sitio registre sus
  primeras impresiones. Indexación, todavía no CTR ni posición: pedirle ranking
  a un sitio sin crawlear es medir la métrica equivocada.
- **PR:** #5
- **Veredicto:** pendiente (revisar después del 2026-08-16)

**Nota para la corrida siguiente:** el cuello de botella real no es on-page, es
descubrimiento. Un dominio nuevo sin backlinks puede tardar semanas. Antes de
tocar títulos o escribir páginas nuevas, verificá con URL Inspection si Google
ya crawleó algo. Si sigue en cero, el problema no se arregla con copy.
