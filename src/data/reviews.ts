/**
 * Reseñas reales de clientes, tomadas del perfil de Google Maps del
 * negocio (4,8/5 con 146 reseñas a 17/09/2026). Si cambian, actualiza
 * también `googleRating` en src/data/site.ts.
 */
export interface Review {
  name: string;
  text: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    name: 'Ariadna Begué Sánchez',
    text: 'Se ha convertido, sin duda, en mi sitio favorito para pedir a domicilio. Aunque no sea un restaurante para ir a comer allí, la comida llega siempre muy buena. Se nota el cariño y la calidad que le ponen a cada plato. Totalmente recomendable, ¡un diez de diez!',
    stars: 5,
  },
  {
    name: 'Iván Cf2011',
    text: 'Excelente experiencia. Las hamburguesas están muy bien elaboradas, con ingredientes frescos y de calidad que se notan en cada bocado. La carne estaba jugosa y en su punto, el pan suave y los acompañamientos perfectamente equilibrados. Además, las patatas estaban crujientes',
    stars: 5,
  },
  {
    name: 'Manuco',
    text: 'Es una hamburguesería en la cual no importa el dinero que te gastes vas a salir satisfecho sin duda alguna. No hay hamburguesa alguna la cual no valga su precio y la de queso fundido es simplemente un espectáculo gastronómico el cual hay que experimentar al menos una vez en la vida.',
    stars: 5,
  },
  {
    name: 'karim mazouz martinez',
    text: 'Un sitio muy agradable para ir. Hamburguesas y bollos muy ricos, buen ambiente y trato cercano. ¡Repetiremos!',
    stars: 5,
  },
];
