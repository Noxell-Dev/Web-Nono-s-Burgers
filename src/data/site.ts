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
    street: 'C/ La Carrasca',
    postalCode: '11370',
    locality: 'Los Barrios',
    region: 'Cádiz',
    country: 'ES',
  },
  email: 'nonos_burgers_@hotmail.com',
  mapsUrl:
    'https://www.google.com/maps/place/Nono%C2%B4s+Burgers/@36.1871414,-5.4998117,17z/data=!4m8!3m7!1s0xd0ced6989c09e73:0x74f82cca34354da8!8m2!3d36.1871371!4d-5.4972368!9m1!1b1!16s%2Fg%2F11vx5lbwcq?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D',
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
