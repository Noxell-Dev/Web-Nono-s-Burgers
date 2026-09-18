/**
 * Datos globales del negocio. Si cambia el dominio, el teléfono o la
 * dirección, este es el único fichero que hay que tocar (además de
 * public/sitemap.xml y public/robots.txt).
 */
export const site = {
  name: "Nono's Burgers",
  url: 'https://nonosburgers.es',
  locale: 'es_ES',
  language: 'es',
  description:
    'Hamburguesería en Los Barrios (Cádiz) con smash burgers, bocadillos y entrantes caseros. Hazlo menú por 2,90 € y servicio a domicilio por 1,50 €.',
  phones: [
    {
      display: '+34 604 11 13 18',
      href: 'tel:+34604111318',
    },
    {
      display: '+34 623 36 29 57',
      href: 'tel:+34623362957',
    },
  ],
  address: {
    street: 'C/ La Carrasca',
    postalCode: '11370',
    locality: 'Los Barrios',
    region: 'Cádiz',
    country: 'ES',
  },
  email: 'nonos_burgers_@hotmail.com',
  mapsUrl: 'https://maps.app.goo.gl/GEtBFW3xw1inPR3i8',
  googleRating: {
    value: 4.8,
    reviewCount: 146,
  },
  social: [
    {
      label: 'TikTok',
      handle: '@NONOS_BURGERS',
      url: 'https://www.tiktok.com/@NONOS_BURGERS',
    },
    {
      label: 'Facebook',
      handle: 'NONOS_BURGERS',
      url: 'https://www.facebook.com/profile.php?id=61557894326868',
    },
    {
      label: 'Instagram',
      handle: '@NONOS.BURGERSS',
      url: 'https://www.instagram.com/NONOS.BURGERSS',
    },
  ],
  menuDeal: '2,90 €',
} as const;

export type Site = typeof site;
