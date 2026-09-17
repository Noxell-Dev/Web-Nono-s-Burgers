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
      whatsapp:
        'https://wa.me/34604111318?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20Nono%27s%20Burgers',
    },
    {
      display: '+34 623 36 29 57',
      href: 'tel:+34623362957',
      whatsapp:
        'https://wa.me/34623362957?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20Nono%27s%20Burgers',
    },
  ],
  address: {
    street: 'C/ Abulaga, 1, Urb. El Lazareto',
    postalCode: '11370',
    locality: 'Los Barrios',
    region: 'Cádiz',
    country: 'ES',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+Abulaga+1+Urb+El+Lazareto+11370+Los+Barrios+C%C3%A1diz',
  social: [
    {
      label: 'TikTok',
      handle: '@NONOS_BURGERS',
      url: 'https://www.tiktok.com/@NONOS_BURGERS',
    },
    {
      label: 'Facebook',
      handle: 'NONOS_BURGERS',
      url: 'https://www.facebook.com/NONOS_BURGERS',
    },
    {
      label: 'Instagram',
      handle: '@NONOS.BURGERSS',
      url: 'https://www.instagram.com/NONOS.BURGERSS',
    },
  ],
  deliveryFee: '1,50 €',
  menuDeal: '2,90 €',
} as const;

export type Site = typeof site;
