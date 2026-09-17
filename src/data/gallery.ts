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
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/logo.jpg',
    width: 225,
    height: 225,
    alt: "Logotipo de Nono's Burgers: un oso con sombrero comiendo una hamburguesa",
    caption: 'Nuestra mascota',
  },
  {
    src: '/images/carta-burgers.jpg',
    width: 1075,
    height: 1433,
    alt: "Carta de hamburguesas de Nono's Burgers con precios: de la clásica a la trufada",
    caption: 'Carta de burgers',
  },
  {
    src: '/images/carta-bocadillos.jpg',
    width: 1076,
    height: 1434,
    alt: "Carta de bocadillos, patatas y bebidas de Nono's Burgers con precios",
    caption: 'Carta de bocadillos',
  },
];
