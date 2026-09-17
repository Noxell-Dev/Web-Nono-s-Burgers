/**
 * La carta completa de Nono's Burgers, transcrita de la carta oficial.
 * Para añadir, quitar o cambiar precios: edita este fichero y la web
 * se actualiza sola (pestañas, JSON-LD y todo).
 */
export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tag?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'burgers',
    label: 'Burgers',
    note: 'Las burgers 5 a 11 se sirven con patatas. Pan brioche en las premium.',
    items: [
      { name: 'Ternera, pollo o pinchito', price: '4,00 €' },
      {
        name: 'Completa',
        description: 'Ternera, pollo o pinchito con verduras',
        price: '4,20 €',
      },
      {
        name: 'Gigante',
        description: 'Ternera, pollo o pinchito, queso, huevo, bacon y verduras',
        price: '5,60 €',
        tag: 'La clásica',
      },
      {
        name: 'Doble crispy chicken',
        description:
          '2 piezas de pollo crujiente, queso, lechuga, tomate y mahonesa',
        price: '7,00 €',
      },
      {
        name: 'Cabra',
        description:
          '180 g de ternera, pan brioche, cebolla a la plancha, mermelada de tomate y queso rulo de cabra',
        price: '8,90 €',
      },
      {
        name: 'Buey',
        description:
          '200 g de buey, pan brioche, queso, bacon, cebolla crispy, salsa BBQ y patatas',
        price: '8,90 €',
      },
      {
        name: 'Retinto',
        description:
          '200 g de retinto, pan brioche, verduras, queso, huevo, bacon y patatas',
        price: '8,90 €',
      },
      {
        name: 'Black Angus',
        description:
          '200 g de black angus, pan brioche, cebolla a la plancha, queso, bacon, salsa mostaza-miel y patatas',
        price: '8,90 €',
      },
      {
        name: 'Trufada',
        description:
          '200 g de black angus, pan brioche, queso parmesano, bacon, rúcula, salsa de trufa ahumada y patatas',
        price: '9,90 €',
        tag: 'La favorita',
      },
      {
        name: 'Cheese-burger',
        description:
          '200 g de black angus, pan brioche, doble queso, doble bacon, queso fundido y patatas',
        price: '10,90 €',
      },
      {
        name: 'Smash-burger',
        description:
          '200 g de black angus, pan brioche, queso cheddar, bacon, tomate, salsa secreta y patatas',
        price: '9,90 €',
        tag: 'La más pedida',
      },
    ],
  },
  {
    id: 'bocadillos',
    label: 'Bocadillos',
    note: 'Pan baguette o gallega · Opción sin gluten: +3,00 €',
    items: [
      { name: 'Lomo, pollo o lomo adobado', price: '3,80 €' },
      {
        name: 'Completo',
        description: 'Lomo, pollo o lomo adobado con verduras',
        price: '4,00 €',
      },
      {
        name: 'Africanito',
        description: 'Lomo o pollo, cebolla a la plancha y salsa africana',
        price: '4,40 €',
      },
      {
        name: 'Gigante',
        description:
          'Lomo, pollo o lomo adobado, queso, huevo, bacon y verduras',
        price: '5,50 €',
      },
      {
        name: 'Serranito',
        description: 'Lomo o pollo, jamón serrano y pimiento frito',
        price: '4,40 €',
      },
      {
        name: 'Americano',
        description:
          'Lomo, pollo o lomo adobado, queso, bacon y cebolla a la plancha',
        price: '4,80 €',
      },
      {
        name: 'Adobadito',
        description: 'Lomo adobado, queso y patatas',
        price: '4,40 €',
      },
      {
        name: 'De la casa',
        description: 'Pollo, jamón serrano, patatas y mojo picón',
        price: '4,60 €',
        tag: 'Receta de la casa',
      },
      {
        name: 'Especial',
        description: 'Lomo o pollo, tomate, alioli y patatas',
        price: '4,20 €',
      },
      {
        name: 'Vegetal',
        description: 'Atún, verduras, huevo cocido y mahonesa',
        price: '4,60 €',
      },
    ],
  },
  {
    id: 'entrantes',
    label: 'Entrantes',
    note: 'Para compartir... o no. Tú decides.',
    items: [
      {
        name: 'Ensalada mixta',
        description: 'Verduras, atún, maíz, zanahoria y huevo duro',
        price: '5,00 €',
      },
      {
        name: 'Ensalada César',
        description: 'Lechuga, pollo, picatostes, queso y salsa César',
        price: '5,50 €',
      },
      {
        name: 'Croquetas',
        description: 'Media ración / ración entera',
        price: '4,50 € / 9,00 €',
      },
      {
        name: 'Nuggets de pollo',
        description: '6 / 12 uds.',
        price: '4,00 € / 7,80 €',
      },
      {
        name: 'Tequeños de queso',
        description: '4 / 8 uds.',
        price: '3,80 € / 7,20 €',
      },
      {
        name: 'Empanadilla de ternera picante',
        description: '1 ud.',
        price: '2,40 €',
      },
      {
        name: 'Empanadilla africanita',
        description: '1 ud.',
        price: '2,40 €',
      },
    ],
  },
  {
    id: 'patatas',
    label: 'Patatas',
    note: 'P = pequeña · M = mediana · G = grande',
    items: [
      { name: 'Patatas fritas', description: 'P / M / G', price: '2,00 € / 3,20 € / 4,20 €' },
      { name: 'Patatas gajos', description: 'M / G', price: '3,50 € / 4,50 €' },
      {
        name: 'Patatas cheddar-bacon',
        description: 'P / M / G',
        price: '3,30 € / 5,30 € / 6,90 €',
        tag: 'Las favoritas',
      },
      {
        name: 'Patatas cheddar-bacon gajos',
        description: 'M / G',
        price: '5,60 € / 7,50 €',
      },
      {
        name: 'Patatas parmesano',
        description: 'P / M / G',
        price: '4,30 € / 6,30 € / 7,90 €',
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas y postres',
    items: [
      { name: 'Refresco en lata', price: '1,30 €' },
      { name: 'Refresco 2 L', price: '2,40 €' },
      { name: 'Cerveza en lata', price: '1,30 €' },
      { name: 'Cerveza 1 L', price: '2,00 €' },
      { name: 'Agua pequeña', price: '0,60 €' },
      { name: 'Agua 1,5 L', price: '1,20 €' },
      { name: 'Postres caseros', description: 'Pregunta por los de hoy', price: '2,00 €', tag: 'Caseros' },
    ],
  },
  {
    id: 'extras',
    label: 'Salsas y extras',
    note: 'Para bocadillos y burgers: personalízala a tu gusto.',
    items: [
      {
        name: 'Salsa a elegir',
        description:
          'Pimienta, roquefort, mojo picón, gaucha, alioli, cheddar, BBQ, mostaza-miel o africana',
        price: '0,90 €',
      },
      { name: 'Mahonesa', price: 'Gratis' },
      { name: 'Ketchup', price: 'Gratis' },
      { name: 'Extra queso tranchete', price: '0,80 €' },
      { name: 'Extra jamón serrano', price: '1,10 €' },
      { name: 'Extra huevo a la plancha', price: '0,90 €' },
      { name: 'Extra verduras', price: '0,40 €' },
      { name: 'Extra pimiento frito', price: '0,80 €' },
      { name: 'Extra lomo adobado', price: '1,20 €' },
      { name: 'Extra bacon', price: '1,20 €' },
      { name: 'Extra patatas fritas', price: '0,40 €' },
    ],
  },
];
