/**
 * Reseñas de clientes.
 *
 * NOTA: son textos ilustrativos para el diseño inicial. Antes de publicar
 * la web, sustitúyelos por reseñas reales (p. ej. de Google) con el nombre
 * y el permiso de cada cliente.
 */
export interface Review {
  name: string;
  text: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    name: 'María G.',
    text: 'La smash burger es de las mejores que he probado en la zona. El pan brioche y la salsa secreta son otro nivel. Repetimos seguro.',
    stars: 5,
  },
  {
    name: 'Juan Antonio R.',
    text: 'Pedimos a domicilio y llegó caliente y rápido. El bocadillo gigante da para dos personas. Calidad-precio imbatible en Los Barrios.',
    stars: 5,
  },
  {
    name: 'Lucía F.',
    text: 'Las patatas con cheddar y bacon son un vicio, y el trato es de 10. Se ha convertido en nuestro sitio de confianza.',
    stars: 5,
  },
];
