/**
 * Preguntas frecuentes. Se renderizan como acordeón accesible y también
 * alimentan el JSON-LD FAQPage de la página principal (bueno para SEO).
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: '¿Hacéis reparto a domicilio?',
    answer:
      'Sí. Llevamos tu pedido a casa por 1,50 €. Llámanos al 604 11 13 18 o al 623 36 29 57 y te lo preparamos al momento para que llegue caliente.',
  },
  {
    question: '¿Tenéis opciones sin gluten?',
    answer:
      'En los bocadillos puedes pedir pan sin gluten por 3 € más. Si tienes alergia o intolerancia, avísanos al hacer el pedido y lo preparamos con cuidado.',
  },
  {
    question: "¿Qué es el «Hazlo menú»?",
    answer:
      'Por 2,90 € más conviertes tu burger o bocadillo en menú: incluye bebida y patatas. Es la forma más barata de comer completo.',
  },
  {
    question: '¿Dónde estáis?',
    answer:
      'En C/ Abulaga, 1, Urb. El Lazareto, 11370 Los Barrios (Cádiz). Llámanos y te indicamos cómo llegar, o te lo llevamos a casa.',
  },
  {
    question: '¿Puedo pedir para recoger?',
    answer:
      'Claro. Llama con un poco de antelación, te lo dejamos listo y lo recoges caliente, sin esperas.',
  },
  {
    question: '¿Tenéis postres?',
    answer:
      'Sí, postres caseros por 2 €. Pregúntanos cuáles hay hoy cuando hagas tu pedido: van cambiando según la semana.',
  },
];
