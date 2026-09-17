/**
 * Fotos del negocio. Para añadir más: guarda la imagen optimizada en
 * public/images/ y añade una entrada aquí con sus dimensiones reales
 * (evita CLS) y un alt descriptivo.
 */
export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/burger-mano.jpg',
    width: 418,
    height: 478,
    alt: "Hamburguesa de Nono's Burgers con pan brioche, carne a la brasa y salsa, sujetada con un guante negro",
  },
  {
    src: '/images/local.jpg',
    width: 1280,
    height: 853,
    alt: "Fachada del local de Nono's Burgers en Los Barrios con clientes en la puerta",
  },
  {
    src: '/images/fingers-pollo.jpg',
    width: 900,
    height: 1200,
    alt: 'Fingers de pollo crujientes con patatas fritas y salsas',
  },
  {
    src: '/images/burger-nachos.jpg',
    width: 900,
    height: 1199,
    alt: 'Hamburguesa con bacon, nachos, guacamole y cebolla caramelizada',
  },
];
