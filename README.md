# Nono's Burgers — Landing page

Landing page informativa de **Nono's Burgers**, hamburguesería en Los Barrios (Cádiz).
Su objetivo es captar clientes locales: presenta la carta completa con precios,
reseñas, fotos del negocio, preguntas frecuentes y contacto directo por teléfono
o WhatsApp (llamada a la acción principal).

No hay backend ni tienda online: los pedidos se gestionan por teléfono/WhatsApp.

## Tecnologías y versiones

| Tecnología | Versión | Uso |
|---|---|---|
| Astro | 5.x | Framework, contenido estático |
| TypeScript | 5.x (estricto) | Tipado de datos y componentes |
| Tailwind CSS | 4.x (vía plugin de Vite) | Estilos, tokens en `@theme` |
| Node.js | ≥ 20 | Entorno de desarrollo |

Sin librerías de JS en cliente salvo el script propio (`src/scripts/main.ts`):
menú móvil, pestañas de la carta, acordeón FAQ y estado de la cabecera.

## Requisitos

- Node.js 20 o superior y npm.

## Instalación

```bash
# 1. Entrar en el proyecto
cd nonos-burgers

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
# → http://localhost:4321
```

## Scripts disponibles

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la web estática en `dist/` |
| `npm run preview` | Sirve en local la versión de `dist/` para verificarla |
| `npm run check` | **Verificación obligatoria**: `astro check` (tipos + plantillas). Debe pasar sin errores antes de dar un cambio por terminado |
| `npm run sync` | Regenera los tipos de Astro |

## Despliegue

Es una web 100 % estática (`dist/`). Vale cualquier hosting estático:

**Vercel / Netlify / Cloudflare Pages:** importa el repositorio, framework preset
«Astro», comando de build `npm run build` y directorio de salida `dist/`.

**Servidor propio:** sube el contenido de `dist/` a la raíz del dominio.

> **Antes de desplegar:** cambia el dominio `https://nonosburgers.es` por el real en
> `astro.config.mjs` (`site`), `src/data/site.ts` (`url`), `public/robots.txt` y
> `public/sitemap.xml`.

## Estructura de carpetas

```
nonos-burgers/
├── public/                 # Archivos tal cual: robots.txt, sitemap.xml, favicon.svg
│   └── images/             # Logo y fotos del negocio (optimizadas)
├── src/
│   ├── components/         # Header, Hero, MenuSection, Faq, Contact, Footer…
│   ├── pages/              # index.astro, aviso-legal.astro, privacidad.astro
│   ├── data/               # Contenido: site.ts, menu.ts, reviews.ts, faq.ts, gallery.ts
│   ├── i18n/               # Textos de la interfaz (es.ts). Nunca hardcodeados en componentes
│   ├── scripts/            # JS de cliente (main.ts)
│   └── styles/             # global.css (Tailwind v4 + tokens @theme)
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md / AGENTS.md / CLAUDE.md
└── .gitignore
```

## Cómo modificar contenido

- **La carta (platos y precios):** edita `src/data/menu.ts`. Las pestañas, el
  JSON-LD y la maquetación se actualizan solos. Cada categoría es `{ id, label, note?, items[] }`.
- **Reseñas:** `src/data/reviews.ts`. ⚠️ Las actuales son textos ilustrativos:
  sustitúyelas por reseñas reales con permiso del cliente antes de publicar.
- **Fotos:** guarda la imagen optimizada en `public/images/` y añade una entrada
  en `src/data/gallery.ts` con sus dimensiones reales (`width`/`height`) y un `alt`
  descriptivo.
- **Preguntas frecuentes:** `src/data/faq.ts`. También alimentan el JSON-LD `FAQPage`.
- **Textos de la interfaz** (navegación, botones, titulares): `src/i18n/es.ts`.
- **Datos del negocio** (teléfonos, dirección, redes, dominio): `src/data/site.ts`.
- **Añadir una sección:** crea el componente en `src/components/`, impórtalo en
  `src/pages/index.astro` y, si debe aparecer en el menú, añade la entrada en
  `t.nav` (`src/i18n/es.ts`) con su `id` de ancla.
- **Nueva página:** crea `src/pages/mi-pagina.astro` usando el componente `Layout`
  (ya incluye SEO, cabecera y pie) y añádela a `public/sitemap.xml`.

## Decisiones de diseño

- Paleta tomada de la carta del local: negro carbón de fondo, blanco para texto,
  **amarillo mostaza** (`--color-yolk-400`) para CTAs y titulares, **verde hoja**
  (`--color-leaf-400`) para detalles secundarios (badges, notas).
- Tipografías: **Anton** (titulares, aire de hamburguesería clásica) + **Inter** (cuerpo).
- Iconos: SVG geométricos dibujados a mano, sin emojis ni librerías de iconos.
- Micro-interacciones sutiles (hover en CTAs, marquesina, acordeón animado) y
  `prefers-reduced-motion` respetado.

## SEO incluido

- Un único `H1` («Hamburguesería en Los Barrios con sabor de verdad»), `H2` por sección.
- `title` (~52 caracteres) y `meta description` (~146) con la palabra clave principal.
- Open Graph + Twitter Cards, `canonical`, `theme-color`, favicon SVG.
- `robots.txt` + `sitemap.xml` con las 3 URLs.
- JSON-LD `Restaurant` (dirección, teléfonos, redes, carta implícita) y `FAQPage`.
- Imágenes con `alt` descriptivo y `width`/`height` (sin CLS); hero con `fetchpriority="high"`, resto en `lazy`.
