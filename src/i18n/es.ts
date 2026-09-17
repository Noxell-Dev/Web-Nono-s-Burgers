/**
 * Textos de la interfaz en español. Los componentes nunca hardcodean
 * copy: lo importan de aquí. El contenido largo (carta, reseñas, FAQ,
 * galería) vive en src/data/.
 */
export const t = {
  skipLink: 'Saltar al contenido principal',
  siteName: "Nono's Burgers",

  nav: [
    { label: 'La carta', href: '#carta' },
    { label: 'Reseñas', href: '#resenas' },
    { label: 'Fotos', href: '#fotos' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],
  callCta: 'Llamar para pedir',
  openMenu: 'Abrir menú de navegación',
  closeMenu: 'Cerrar menú de navegación',

  hero: {
    titleStart: 'Hamburguesería en Los Barrios con',
    titleAccent: 'sabor de verdad',
    subtitle:
      'Smash burgers, bocadillos y entrantes caseros a precio de barrio. Pide por teléfono y recógelo caliente, o te lo llevamos a casa.',
    primaryCta: 'Ver la carta',
    primaryCtaHref: '#carta',
    secondaryCta: 'Llamar: 604 11 13 18',
    secondaryCtaHref: 'tel:+34604111318',
    dealTitle: 'Hazlo menú',
    dealText: 'Bebida + patatas por 2,90 €',
    logoAlt:
      "Logotipo de Nono's Burgers: un oso con sombrero comiendo una hamburguesa",
  },

  marquee: [
    'Smash burgers',
    'Bocadillos',
    'Entrantes caseros',
    'Hazlo menú 2,90 €',
    'Domicilio 1,50 €',
    'Postres caseros',
  ],

  highlights: {
    kicker: 'Qué ofrecemos',
    title: 'Todo lo bueno, sin complicaciones',
    intro:
      'Tres motivos por los que el barrio repite: carta amplia, precio justo y trato de casa.',
    items: [
      {
        icon: 'menu',
        title: 'Carta completa',
        text: 'Burgers smash, bocadillos, entrantes, patatas y postres caseros. También con opción sin gluten en bocadillos.',
        linkLabel: 'Ver la carta',
        linkHref: '#carta',
      },
      {
        icon: 'ticket',
        title: 'Hazlo menú por 2,90 €',
        text: 'Convierte tu burger o bocadillo en menú añadiendo bebida y patatas. La forma más barata de comer completo.',
      },
      {
        icon: 'bike',
        title: 'A domicilio por 1,50 €',
        text: 'Llámanos o escríbenos por WhatsApp y te lo llevamos caliente a casa, en Los Barrios y alrededores.',
        linkLabel: 'Pedir ahora',
        linkHref: '#contacto',
      },
    ],
  },

  menu: {
    kicker: 'La carta',
    title: 'Todo lo que sale de nuestra plancha',
    intro:
      'Precios claros, raciones generosas y todo hecho al momento. Elige una categoría y babea un rato.',
    dealNote: 'Hazlo menú: añade bebida + patatas por 2,90 € a tu burger o bocadillo.',
    deliveryNote: 'Servicio a domicilio: 1,50 €. Llámanos y te lo llevamos caliente.',
  },

  reviews: {
    kicker: 'Reseñas',
    title: 'Lo que dice el barrio',
    intro: 'La mejor publicidad es la de quien ya ha probado nuestras burgers.',
    googleLabel: 'reseñas en Google',
  },

  gallery: {
    kicker: 'Fotos',
    title: "Así se ve Nono's",
    intro: 'Nuestro local y lo que sale de la plancha cada día.',
  },

  faq: {
    kicker: 'Preguntas frecuentes',
    title: 'Dudas de barrio, resueltas',
    intro: 'Lo que nos preguntan todos los días, contestado sin rodeos.',
  },

  contact: {
    kicker: 'Contacto',
    title: '¿Hambre? Pide ahora',
    intro:
      'Llámanos o escríbenos por WhatsApp y lo tienes en camino. Recogida en local o domicilio por 1,50 €.',
    callLabel: 'Llamar',
    whatsappLabel: 'WhatsApp',
    addressTitle: 'Dónde estamos',
    addressMapsLabel: 'Cómo llegar',
    socialTitle: 'Síguenos',
  },

  footer: {
    tagline:
      'Hamburguesería de barrio en Los Barrios (Cádiz). Sabor casero, precio justo.',
    navTitle: 'Navegación',
    contactTitle: 'Contacto',
    legalTitle: 'Legal',
    legal: [
      { label: 'Aviso legal', href: '/aviso-legal/' },
    ],
    rights: "© 2026 Nono's Burgers · Los Barrios (Cádiz)",
    creditText: 'Hecho con ♥ por',
    creditName: 'noxell.dev',
    creditUrl: 'https://noxell.dev',
  },

  legal: {
    backHome: 'Volver al inicio',
  },
} as const;
