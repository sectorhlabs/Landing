---
version: "2.0"
name: SectorHLabs
description: "Estudio de desarrollo near-black construido sobre azul-negro (#000408), texto gris claro (#e9e9ee) y un único acento AZUL de marca (#0B5A85 / #1490d4 brillante). Lee como técnico, mínimo y silenciosamente lujoso. Tipografía Inter para display/body y JetBrains Mono para etiquetas y wordmark. Textura de grano sutil sobre toda la página."
source-of-truth: "css/styles.css — este documento describe ese archivo. Si hay discrepancia, MANDA el CSS."
---

## ⚠️ Nota de nomenclatura (importante)

Hasta la v1 las variables de acento se llamaban `--violet*` **pero sus valores siempre fueron AZUL**, no violeta. Eso causaba confusión. En la v2 se renombraron a `--accent*`. Mapa del renombrado:

| Antes (confuso) | Ahora | Valor | Es |
|---|---|---|---|
| `--violet` | `--accent` | `#0B5A85` | azul base |
| `--violet-2` | `--accent-bright` | `#1490d4` | azul brillante |
| `--violet-deep` | `--accent-deep` | `#084266` | azul profundo |
| `--violet-glow` | `--accent-glow` | `rgba(11,90,133,.25)` | halo del acento |

**El acento de marca es AZUL.** No introducir violeta/lavanda en ningún material (web, tarjetas, etc.).

## Colores (tal cual `:root` en css/styles.css)

### Surface — fondos
- `--bg` `#000408` — fondo principal (azul-negro, no negro puro)
- `--bg-2` `#010613` — superficie elevada
- `--bg-3` `#030d1c` — superficie/paneles

### Líneas
- `--line` `rgba(255,255,255,0.08)` — bordes/divisores hairline
- `--line-strong` `rgba(255,255,255,0.18)` — bordes enfatizados

### Texto
- `--text` `#e9e9ee` — texto principal
- `--muted` `#acacb4` — texto secundario
- `--silver` `#c4c4cc` / `--silver-2` `#b2b2ba` — metálicos / detalles

### Acento de marca — AZUL (único color cromático)
- `--accent` `#0B5A85` — base · CTAs, `::selection`, `.btn-primary`
- `--accent-bright` `#1490d4` — brillante · highlight de la "H" del wordmark, hovers (`.btn-primary:hover`, `.nav-wordmark span`)
- `--accent-deep` `#084266` — profundo · sombras/bordes de acento
- `--accent-glow` `rgba(11,90,133,0.25)` — halo/glow

### Semántico
- `--ok` `#7ee787` — verde · éxito

## Tipografía

### Familias
- `--font-sans`: `'Inter', -apple-system, system-ui, sans-serif` — display y body
- `--font-mono`: `'JetBrains Mono', ui-monospace, monospace` — eyebrows, etiquetas, wordmark, datos

Base body: `15px` / `line-height 1.6`.

### Escala display (valores reales, responsivos con `clamp`)
| Uso | font-size | line-height |
|---|---|---|
| Hero principal | `clamp(56px, 8vw, 110px)` | `.92` |
| Display grande | `clamp(36px, 5vw, 68px)` | `1` |
| Sección | `clamp(32px, 4.2vw, 56px)` | `1.05` |
| Eyebrow / etiqueta (mono) | `9–11px` | — |

### Tracking (letter-spacing)
- Display: negativo (`-0.02em` a `-0.01em`)
- Eyebrows / wordmark (mono, uppercase): positivo amplio (`.16em` a `.3em`)

## Layout (tokens en `:root`)
- `--container` `1400px` — ancho máximo
- `--nav-h` `64px` — altura de la nav fija
- `--section-py` `120px` — padding vertical de sección
- `--radius` `14px` — radio por defecto
- Padding lateral de `.container`: `36px`

## Motion (tokens en `:root`)
### Easings
- `--ease-entry` `cubic-bezier(0.22, 0.61, 0.36, 1)`
- `--ease-exit` `cubic-bezier(0.4, 0, 1, 1)`
- `--ease-emphasis` `cubic-bezier(0.4, 0, 0.2, 1)`
- `--ease-bounce` `cubic-bezier(0.2, 0.8, 0.2, 1.1)`

### Duraciones
- `--dur-fast` `150ms` · `--dur-base` `300ms` · `--dur-slow` `500ms`
- `--dur-reveal` `500ms` · `--dur-hero` `1000ms`

### Stagger
- `--stagger-xs` `60ms` · `--stagger-sm` `80ms` · `--stagger-md` `100ms` · `--stagger-lg` `120ms`

## Texturas y efectos
- **Grano:** overlay de ruido fractal SVG en `body::after`, `opacity: 0.045`, `position: fixed`, sobre toda la página. Da el acabado "no plano".
- **Nav:** fija, `backdrop-filter: blur(10px)`, gradiente superior; al hacer scroll (`.nav.scrolled`) gana borde `--line` y fondo más opaco.

## Componentes
- **`.btn-primary`**: fondo `--accent`, texto `#fff`, borde `--accent`; hover → fondo `--accent-bright` + glow `rgba(11,90,133,.4)`.
- **`.nav-wordmark`**: mono 600, `letter-spacing .16em`; el `<span>` (la "H") en `--accent-bright`.
- **`.nav-logo-img`**: `30×30px`, `object-fit: contain`.

## Do's and Don'ts
### Do
- Usar `--bg` (#000408) como ancla; subir por la escala (`bg → bg-2 → bg-3`).
- Reservar el azul (`--accent` / `--accent-bright`) para CTAs y énfasis de marca.
- Tracking negativo en display; positivo amplio en mono/eyebrows.
- Mantener el grano sutil para evitar superficies planas.

### Don't
- ❌ No usar violeta/lavanda — el acento es **azul**.
- ❌ No introducir un segundo color cromático (salvo `--ok` semántico).
- ❌ No usar negro puro `#000000` como fondo (usar `#000408`).
- ❌ No nombrar variables por un matiz que no es el real (lección de `--violet`).

## Materiales de marca relacionados
- **Tarjetas de visita:** `tarjeta/` — empresa y personal (Carlos Mateos · Founder · CEO), doble cara y una cara, con PDFs RGB y CMYK (FOGRA39, TAC ~200%). Heredan esta paleta azul.
