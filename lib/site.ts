// ---------------------------------------------------------------------------
// VERIFIED business data — sourced from romerobrasyreformas.com (Aug 2026).
// Do not add facts that are not present on the live site.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Romero Obras y Reformas',
  // Verified on /contacto/
  phone: '+34 952 78 50 90',
  phoneHref: '+34952785090',
  email: 'info@romerobrasyreformas.com',
  address: {
    street: 'Calle Vega del Mar, 14',
    town: 'San Pedro de Alcántara',
    postcode: '29400',
    city: 'Marbella',
    province: 'Málaga',
  },
  hours: 'Lunes a viernes, 8:00 – 15:30',
  social: {
    facebook: 'https://www.facebook.com/escayolasanpedro',
    x: 'https://x.com/EscayolaSanPedr',
  },
  // NOTE: no WhatsApp number is published on the current site.
  // Per the brief, we do NOT invent one. Left null intentionally.
  whatsapp: null as string | null,
} as const;

export const services = [
  {
    id: 'escayola',
    name: 'Escayola',
    headline: 'Superficies hechas a medida.',
    body:
      'Decoración de interiores en escayola: tabiques, techos lisos, molduras, muebles de obra, paredes y techos guarnecidos, y sistemas de placa de yeso laminado sobre estructura de acero galvanizado.',
    points: ['Techos lisos y decorativos', 'Molduras y cornisas', 'Muebles de escayola', 'Pladur y tabiquería seca'],
    images: ['/work/escayola-01.jpg', '/work/escayola-02.jpg', '/work/escayola-03.jpg'],
    portrait: '/work/escayola-v-01.jpg',
  },
  {
    id: 'albanileria',
    name: 'Albañilería',
    headline: 'Del cambio parcial\na la reforma completa.',
    body:
      'Reformas integrales de viviendas y locales comerciales: alicatados, solados, cocinas, baños, piscinas y trabajos de construcción en general.',
    points: ['Reformas integrales', 'Cocinas y baños', 'Alicatado y solado', 'Construcción y reforma de piscinas'],
    images: ['/work/obra-01.jpg', '/work/obra-02.jpg', '/work/obra-05.jpg'],
    portrait: '/work/obra-v-04.jpg',
  },
  {
    id: 'mantenimiento',
    name: 'Mantenimiento',
    headline: 'Una vivienda que\nsigue funcionando.',
    body:
      'Mantenimiento general de la vivienda con equipo propio y oficios coordinados: fontanería, electricidad, aire acondicionado, carpintería, cerrajería, cristalería y mantenimiento de piscinas y spas.',
    points: ['Fontanería y electricidad', 'Aire acondicionado', 'Carpintería y cerrajería', 'Piscinas y spas'],
    images: ['/work/obra-03.jpg', '/work/obra-04.jpg', '/work/obra-02.jpg'],
    portrait: '/work/obra-v-07.jpg',
  },
  {
    id: 'arabes',
    name: 'Trabajos Árabes',
    headline: 'Artesanía que no\nse fabrica en serie.',
    body:
      'Trabajos decorativos tallados sobre superficies de yeso y mortero. Un oficio artesanal que hemos ejecutado en Andalucía y también fuera de España, en Francia y Marruecos.',
    points: ['Tallado manual sobre yeso', 'Geometría y celosía', 'Techos y frisos ornamentales', 'Mortero decorativo'],
    images: ['/work/arabe-01.jpg', '/work/arabe-02.jpg', '/work/arabe-03.jpg'],
    portrait: '/work/arabe-v-01.jpg',
  },
] as const;

export type Service = (typeof services)[number];

export const materials = [
  {
    id: 'yeso',
    name: 'Yeso',
    text: 'Guarnecido y enlucido de paredes y techos. La base sobre la que se apoya cualquier acabado posterior.',
    image: '/work/escayola-04.jpg',
    focus: '50% 45%',
  },
  {
    id: 'escayola',
    name: 'Escayola',
    text: 'Molduras, cornisas, rosetones y muebles de obra. Piezas ejecutadas y ajustadas en el propio espacio.',
    image: '/work/escayola-01.jpg',
    focus: '50% 40%',
  },
  {
    id: 'mortero',
    name: 'Mortero',
    text: 'Soporte de albañilería y base del tallado decorativo. Resistente, continuo y trabajable a mano.',
    image: '/work/arabe-05.jpg',
    focus: '50% 50%',
  },
  {
    id: 'pladur',
    name: 'Pladur',
    text: 'Placa de yeso laminado sobre estructura de acero galvanizado. Tabiquería y techos limpios, rápidos y precisos.',
    image: '/work/escayola-05.jpg',
    focus: '50% 50%',
  },
] as const;

export const process = [
  { n: '01', name: 'Visita', text: 'Vemos el espacio, tomamos medidas y entendemos qué se quiere conseguir.' },
  { n: '02', name: 'Planificación', text: 'Definimos alcance, materiales y orden de los trabajos antes de empezar.' },
  { n: '03', name: 'Ejecución', text: 'Coordinamos los oficios necesarios con un proceso de trabajo estandarizado.' },
  { n: '04', name: 'Acabados', text: 'La fase donde se decide el resultado: superficies, detalle y ajuste final.' },
  { n: '05', name: 'Entrega', text: 'Revisión del trabajo terminado y entrega del espacio limpio y en uso.' },
] as const;

// Curated gallery. Categories are neutral — no invented client or address data.
export const gallery = [
  { src: '/work/arabe-01.jpg', cat: 'Trabajos Árabes', w: 800, h: 530, span: 'wide' },
  { src: '/work/escayola-01.jpg', cat: 'Escayola', w: 800, h: 530, span: 'std' },
  { src: '/work/arabe-v-01.jpg', cat: 'Detalle', w: 530, h: 800, span: 'tall' },
  { src: '/work/arabe-02.jpg', cat: 'Trabajos Árabes', w: 800, h: 530, span: 'std' },
  { src: '/work/escayola-02.jpg', cat: 'Escayola', w: 800, h: 530, span: 'std' },
  { src: '/work/obra-v-04.jpg', cat: 'Reforma Integral', w: 530, h: 800, span: 'tall' },
  { src: '/work/arabe-03.jpg', cat: 'Trabajos Árabes', w: 800, h: 530, span: 'wide' },
  { src: '/work/escayola-v-01.jpg', cat: 'Detalle', w: 530, h: 800, span: 'tall' },
  { src: '/work/obra-01.jpg', cat: 'Reforma Integral', w: 800, h: 530, span: 'std' },
  { src: '/work/arabe-04.jpg', cat: 'Trabajos Árabes', w: 800, h: 530, span: 'std' },
  { src: '/work/obra-05.jpg', cat: 'Exterior', w: 800, h: 530, span: 'wide' },
  { src: '/work/arabe-v-03.jpg', cat: 'Detalle', w: 530, h: 800, span: 'tall' },
  { src: '/work/escayola-03.jpg', cat: 'Escayola', w: 800, h: 530, span: 'std' },
  { src: '/work/obra-v-07.jpg', cat: 'Reforma Integral', w: 530, h: 800, span: 'tall' },
  { src: '/work/arabe-06.jpg', cat: 'Trabajos Árabes', w: 800, h: 530, span: 'std' },
] as const;
