---
name: seo-iterar
description: Ciclo de iteración de SEO y GEO para millomanager.com.ar. Lee datos reales de Google Search Console, detecta qué páginas y búsquedas funcionan, propone e implementa cambios en una rama, y deja registrada la hipótesis para medirla en la vuelta siguiente. Usar cuando se pida revisar el SEO, mejorar el posicionamiento, analizar Search Console, buscar keywords, o iterar sobre el tráfico orgánico.
---

# Iterar SEO / GEO

Esto es un **ciclo cerrado**, no una auditoría. Cada corrida mide lo que hizo la
corrida anterior antes de proponer algo nuevo. Si te salteás el paso 0 o el 6,
rompiste el ciclo y esto pasa a ser una lista de opiniones.

Propiedad: `sc-domain:millomanager.com.ar` (confirmar con `list_properties`; si
la propiedad está cargada como prefijo de URL, usar `https://www.millomanager.com.ar/`).
Bitácora: `.claude/seo/bitacora.md`.

---

## Paso 0 — Leer la bitácora y medir la apuesta anterior

Leé `.claude/seo/bitacora.md`. Si tiene entradas abiertas, para cada una:

1. Tomá las URLs/queries que la entrada dice haber tocado.
2. `search_analytics` con `dimensions: "page"` (o `"query"`) filtrando por eso,
   comparando los 28 días **posteriores** al deploy contra los 28 **anteriores**.
3. Escribí el veredicto en la bitácora: `funcionó` / `no movió` / `empeoró`.

Reglas para no engañarte:
- Menos de 21 días desde el deploy → marcá `pendiente` y no la juzgues. Google
  tarda en recrawlear y reindexar.
- Menos de 100 impresiones en la ventana → la muestra no alcanza, marcá `sin datos`.
- El tráfico de un sitio de River es **estacional** (partidos, clásicos, mercado
  de pases). Antes de cantar victoria, compará contra la tendencia del sitio
  entero en la misma ventana, no contra cero.

Lo que no funcionó dos veces seguidas se abandona y se anota por qué. Ese
registro vale más que el próximo experimento.

---

## Paso 1 — Medir el estado actual

Con el MCP `gsc`, últimos 28 días (`dataState: "final"`):

```
search_analytics  dimensions: "query"           rowLimit: 500
search_analytics  dimensions: "page"            rowLimit: 200
search_analytics  dimensions: "page,query"      rowLimit: 2000
search_analytics  dimensions: "date"            → tendencia
search_analytics  dimensions: "device"          → cuánto pesa mobile
```

Y la salud técnica:

```
list_sitemaps     → que /sitemap.xml esté procesado y sin errores
inspect_url       → home + las 3 landings de keyword
```

Si el sitio es nuevo y hay **cero o casi cero impresiones**, no inventes
diagnósticos de CTR: el problema es indexación/autoridad. Saltá directo al
paso 3 (técnico + GEO) y al paso 4 con foco en contenido nuevo.

---

## Paso 2 — Clasificar en cuatro baldes

Todo hallazgo tiene que caer en uno de estos. Los de arriba rinden más por hora
de trabajo:

**A. Quick wins — posición 5 a 20 con impresiones.**
Ya rankeás, estás abajo del pliegue. `detectQuickWins` del MCP los saca solo.
Acción: reforzar la página que ya rankea (título, H1, cuerpo, interlinking hacia
ella). Nunca crear una página nueva para una query que ya tiene una.

**B. CTR bajo para la posición.** Posición ≤ 10 y CTR muy por debajo de lo
esperable (~25% en pos. 1, ~10% en pos. 3, ~3% en pos. 6-10).
Acción: reescribir `title` y `description` en el `metadata` de esa página. Es el
cambio más barato del repo y el de efecto más rápido.

**C. Canibalización.** Dos URLs propias rankeando para la misma query — se ve en
`dimensions: "page,query"`. En este repo pasa fácil entre `/`,
`/juego-de-river-plate`, `/manager-de-river` y `/cartas-de-river`, que se
solapan a propósito.
Acción: elegir la página dueña de esa query, y en la otra bajarle el énfasis y
linkear a la dueña. No borrar páginas.

**D. Huecos de contenido.** Query con impresiones donde ninguna página tuya
apunta bien, o entidad de River sin página. Es el balde más caro; entrá solo si
A/B/C ya están cubiertos.
Acción: página nueva siguiendo el molde de `app/juego-de-river-plate/page.tsx`
(que ya trae metadata + JSON-LD + interlinking), y sumarla a `app/sitemap.ts`.

---

## Paso 3 — Chequeos técnicos y GEO

**Técnico** (con el MCP `playwright`, contra producción o `npm run dev`):
- Que el `<title>`, la meta description y el canonical sean únicos por página.
- Que el JSON-LD parsee y los tipos sean los correctos (FAQPage, VideoGame,
  Organization, WebSite ya están puestos).
- Sin desbordes horizontales a 375px; Google indexa mobile-first.
- Que las páginas del sitemap devuelvan 200 y no redirijan.

**GEO — que los LLMs puedan citarte.** Distinto del SEO clásico: no se trata de
rankear, sino de que un modelo pueda extraer una afirmación tuya y atribuirla.
Lo que mueve la aguja acá:

- **Datos duros y citables en texto plano.** "552 cartas", "8 competiciones",
  "10 tipos de lesión". Un párrafo con un número concreto es citable; uno de
  marketing no. Esto ya se está haciendo en `components/GameFeatures.tsx` — el
  patrón se replica, no se abandona.
- **Preguntas literales con respuesta autocontenida.** El bloque de
  `components/Faq.tsx` es el activo GEO más fuerte del sitio: cada respuesta
  tiene que entenderse sola, sin el resto de la página.
- **Claridad de entidad.** Que quede explícito en texto, no solo en el logo, que
  Millo Manager es un juego manager gratis de River Plate, hecho por hinchas y
  **no oficial**. Los modelos alucinan afiliaciones; el desmentido explícito es
  lo que lo evita.
- **Nada de contenido clave detrás de JS.** Verificalo con Playwright
  deshabilitando JavaScript: los crawlers de LLMs casi no ejecutan JS. El patrón
  de `components/Reveal.tsx` (ocultar solo desde el cliente) existe justamente
  por esto — respetalo en todo componente nuevo.
- **`app/robots.ts`**: revisar si conviene permitir explícitamente los crawlers
  de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`). Es una
  decisión de producto: **preguntale al usuario antes de tocarlo**, no la tomes
  vos.

---

## Paso 4 — Implementar

Reglas del repo (ver `AGENTS.md`: esta versión de Next.js no es la que conocés,
leé `node_modules/next/dist/docs/` antes de escribir código nuevo):

- URL base, nombre y helpers salen de `lib/site.ts`. Nunca hardcodear el dominio.
- Página nueva ⇒ entrada nueva en `app/sitemap.ts`, sí o sí.
- Todo número que se publique tiene que estar verificado contra el repo del
  juego (`/Users/matiasgranzella/Documents/repos/millo`). **No se inventan datos
  para SEO.** Una cifra falsa en la landing es peor que no rankear.
- Tailwind v4: el tema vive en `app/globals.css`, no hay `tailwind.config`.
- Mobile-first: mantené los breakpoints `sm:`/`lg:` existentes.

Máximo **3 cambios por corrida**. Más que eso y en la vuelta siguiente no vas a
poder atribuir el resultado a ninguno.

---

## Paso 5 — Verificar

```bash
npx tsc --noEmit && npm run lint && npm run build
```

Después, con el MCP `playwright` contra `npm run dev`: mirá las páginas tocadas
a 375px y a 1280px, confirmá el `<title>`/description nuevos en el HTML
renderizado y que el JSON-LD siga parseando.

---

## Paso 6 — PR y bitácora

**Nunca pushear a `develop`.** Hay un hook que lo bloquea, pero la regla es
tuya, no del hook. Siempre:

```bash
git switch -c seo/<que-cambiaste>
git push -u origin seo/<que-cambiaste>
gh pr create --base develop --title "seo: <qué>" --body "<hipótesis + métrica>"
```

El cuerpo del PR lleva la **hipótesis medible**, no la descripción del diff:
"`/cartas-de-river` está en posición 8 para «cartas de river plate» con 340
impresiones y 0,9% de CTR. Reescribo title y description apuntando a esa query.
Espero CTR > 3% en 28 días."

Y agregá la entrada a `.claude/seo/bitacora.md`:

```markdown
## AAAA-MM-DD — <título corto>
- **Balde:** A | B | C | D
- **Páginas/queries:** …
- **Baseline:** clicks / impresiones / CTR / posición al día de hoy
- **Hipótesis:** …
- **Métrica de éxito:** … (concreta y falsable)
- **PR:** #NN
- **Veredicto:** pendiente
```

Sin baseline anotado el paso 0 de la próxima corrida no puede hacer nada. Esa
línea es la que hace que esto sea un ciclo.

---

## Si el MCP `gsc` no responde

No adivines números ni inventes métricas: decilo y frená. El usuario tiene que
completar el setup de credenciales (ver `.claude/seo/README.md`). Sin datos
reales podés hacer el paso 3 (técnico + GEO), que no depende de Search Console
— hacé eso y aclará explícitamente que el resto quedó sin medir.
