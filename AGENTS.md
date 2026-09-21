# AGENTS.md — Convenciones del proyecto Nono's Burgers

## Stack
- **Astro 7** + **TypeScript estricto** (`astro/tsconfigs/strict`) + **Tailwind CSS v4**
  (vía `@tailwindcss/vite` en `astro.config.mjs`; sin `tailwind.config`, los tokens
  viven en `@theme` dentro de `src/styles/global.css`).
- Contenido 100 % estático, sin backend. Un solo idioma: **español**.

## Estructura (no mover piezas de sitio)
- `src/components/` → componentes Astro (Header, Hero, MenuSection, Faq, Contact, Footer…).
- `src/layouts/BaseLayout.astro` → `<head>` completo (SEO, OG/Twitter, canonical,
  JSON-LD `Restaurant`), slots de cabecera/contenido/pie. Mismo esqueleto que en
  las otras webs de noxell.dev; los datos salen de `src/data/site.ts`.
- `src/pages/` → `index.astro`, `aviso-legal.astro`. Nuevas páginas
  usan el componente `BaseLayout` (`src/layouts/BaseLayout.astro`: SEO + cabecera + pie incluidos).
- `src/data/` → contenido editable: `site.ts` (negocio), `menu.ts` (carta),
  `reviews.ts`, `faq.ts`, `gallery.ts`.
- `src/i18n/es.ts` → **todos** los textos de la interfaz. Prohibido hardcodear copy
  en los componentes; el contenido largo vive en `src/data/`.
- `src/scripts/main.ts` → menú móvil, pestañas, acordeón, scroll de cabecera.
  `src/scripts/reveal.ts` → animación de entrada al hacer scroll (punto 11 del
  prompt; idéntico en las tres webs). Ambos se cargan desde `BaseLayout` con
  `<script src="../scripts/...">`.
- `src/styles/global.css` → Tailwind + tokens `@theme` + estilos de estado
  (`aria-selected`, acordeón, marquesina, foco visible).
- `public/` → `site.webmanifest`, `favicon.svg` e iconos del
  manifiesto en la raíz; imágenes en `public/images/`. El `sitemap-index.xml`
  lo genera automáticamente la integración `@astrojs/sitemap` en cada build
  (no hay `sitemap.xml` manual).

## Idiomas y textos
- Solo `es`. Si algún día se añade inglés: español en `/`, inglés en `/en/`
  (`prefixDefaultLocale: false`) y `src/i18n/en.ts` con la misma forma que `es.ts`.

## Diseño
- Paleta: `coal-*` (negros), blanco, `yolk-400` `#ffc21a` (CTAs/titulares),
  `leaf-400` `#3ddc84` (detalles secundarios). No introducir más colores de acento.
- Tipos: `font-display` (Anton) solo en titulares/precios destacados; `font-sans`
  (Inter) para el resto.
- Iconos: SVG geométricos inline, nunca emojis. `aria-hidden="true"` en los
  decorativos y `aria-label` en botones icónicos.

## Accesibilidad (no romper)
- Un `H1` por página; secciones con `aria-labelledby` al `id` del `h2`
  (pasar `id` al componente `SectionHeading`).
- Pestañas con roles `tablist/tab/tabpanel` + navegación por flechas (ya en `main.ts`).
- Acordeón FAQ con `aria-expanded`/`aria-controls`; paneles animados por CSS con
  `data-accordion`. El `js` en `<html>` lo pone `main.ts`: sin JS todo visible.
- Menú móvil: `aria-expanded`, `aria-controls`, cierre con Escape.

## Verificación antes de dar un cambio por terminado
1. `npm run check` → **cero errores** (tipos estrictos: sin imports sin usar,
   props tipadas, nada de `any` implícito).
2. `npm run build` → compila y genera `dist/` sin avisos graves.
3. Revisar a mano: contraste, foco visible con teclado, pestañas y acordeón.

## Decisiones registradas
- 2026-09-17: carta transcrita de las fotos oficiales del local a `src/data/menu.ts`.
- 2026-09-17: reseñas reales de Google Maps (4,8/5, 146 reseñas) en
  `src/data/reviews.ts`; la valoración agregada va en `site.googleRating`
  (badge visible + `aggregateRating` en el JSON-LD).
- 2026-09-17: página `/privacidad/` eliminada (la web no recoge datos ni usa
  cookies); se mantiene `/aviso-legal/` (obligatorio según art. 10 LSSI).
- 2026-09-17: dominio `https://nonosburgers.es` provisional; cambiar en
  `astro.config.mjs` y `src/data/site.ts`.
