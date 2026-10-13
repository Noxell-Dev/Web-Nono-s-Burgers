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
    src: '/images/bocadillo-pollo-cebolla.webp',
    width: 1600,
    height: 1200,
    alt: 'Bocadillo de pollo desmechado con cebolla caramelizada y alioli, acompañado de lechuga',
  },
  {
    src: '/images/pollo-gratinado-queso.webp',
    width: 1600,
    height: 1200,
    alt: 'Pollo gratinado con queso fundido, servido en bandeja de aluminio',
  },
  {
    src: '/images/sandwich-pollo-huevo.webp',
    width: 1600,
    height: 1200,
    alt: 'Sándwich de pollo con huevo, queso fundido y salsas, acompañado de patatas fritas',
  },
];
