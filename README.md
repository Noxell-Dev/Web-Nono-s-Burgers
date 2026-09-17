# Nono's Burgers · Web del restaurante

Landing page pública de **Nono's Burgers**, hamburguesería en Los Barrios (Cádiz):
carta completa con precios, reseñas, fotos del local, preguntas frecuentes y
contacto directo por teléfono, WhatsApp o email.

## Tecnologías

- **Astro 5** (contenido estático) + **TypeScript**
- **Tailwind CSS 4** (vía plugin de Vite; tokens en `@theme`)
- Tipografías de Google Fonts (Anton + Inter)
- Sin librerías de JS en cliente: un único script propio (`src/scripts/main.ts`)

## Requisitos

- Node.js 20 o superior
- npm

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

## Despliegue

```bash
npm run build   # genera dist/ con el sitio estático
npm run preview # vista previa de la compilación
```

El contenido de `dist/` es estático y se puede servir desde cualquier hosting
(Vercel, Netlify, Cloudflare Pages…).

## Scripts

| Comando         | Descripción                                                    |
| --------------- | -------------------------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo                                         |
| `npm run check` | Chequeo de tipos de Astro (obligatorio antes de dar un cambio por terminado) |
| `npm run build` | Compilación de producción                                      |
| `npm run preview` | Vista previa de la compilación                               |

## Estructura

```
public/
  robots.txt / sitemap.xml → SEO
  favicon.svg               → Favicon
  images/                   → Logo y fotos del negocio
src/
  pages/      → Rutas: index.astro, aviso-legal.astro, privacidad.astro
  components/ → Header, Hero, MenuSection, Faq, Contact, Footer…
  data/       → Contenido editable: site.ts, menu.ts, reviews.ts, faq.ts, gallery.ts
  i18n/       → Textos de la interfaz (es.ts)
  scripts/    → JS de cliente (menú móvil, pestañas de la carta, acordeón)
  styles/     → CSS global (Tailwind + tokens @theme)
astro.config.mjs → Configuración (site, Tailwind)
```

## Contenido

- **La carta** (platos y precios) se edita en `src/data/menu.ts`.
- **Reseñas**, **fotos** y **preguntas frecuentes**, en `src/data/reviews.ts`,
  `src/data/gallery.ts` y `src/data/faq.ts`.
- **Textos de la interfaz**, en `src/i18n/es.ts`; **datos del negocio**
  (teléfonos, email, dirección, redes), en `src/data/site.ts`.
