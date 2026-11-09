// Photographs used on the site. All are free to use under the Unsplash licence
// (https://unsplash.com/license): commercial use allowed, no attribution required
// (credits are kept here anyway, as a courtesy).
//
// They load from Unsplash's image CDN. To host them yourself instead, download each
// photo from its "page" link into public/images/ and change `src` to e.g. '/images/villa.jpg'.

export type Photo = {
  src: string;            // Unsplash image URL (without size parameters) or a local /images/... path
  alt: { en: string; ar: string };
  credit: string;
  page: string;           // the photo's page on Unsplash
  position?: string;      // CSS object-position, to choose which part of the photo shows when cropped
};

export const photos = {
  villa: {
    src: 'https://images.unsplash.com/photo-1754887966215-9f5c0b977fab',
    alt: { en: 'A modern villa with illuminated windows at dusk', ar: 'فيلا حديثة بنوافذ مضاءة عند الغروب' },
    credit: 'Madeline Liu', page: 'https://unsplash.com/photos/kZ19hJc5IIE',
  },
  interior: {
    src: 'https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7',
    alt: { en: 'A luxurious living room with a crystal chandelier and dark marble', ar: 'صالة فاخرة بثريا كريستال ورخام داكن' },
    credit: 'Aalo Lens', page: 'https://unsplash.com/photos/jkwKXLxTY_4',
  },
  arches: {
    src: 'https://images.unsplash.com/photo-1517574394752-94986fc2c084',
    alt: { en: 'Arches in traditional Islamic architecture', ar: 'أقواس في العمارة الإسلامية التقليدية' },
    credit: 'Annie Spratt', page: 'https://unsplash.com/photos/Ufa495Wz0x8',
  },
  riyadh: {
    src: 'https://images.unsplash.com/photo-1785914214682-25812567e793',
    alt: { en: 'An illuminated tower above Riyadh at night', ar: 'برج مضاء في سماء الرياض ليلًا' },
    credit: 'Ahmed Alghali', page: 'https://unsplash.com/photos/RwJOjD-H-Ps',
  },
  car: {
    src: 'https://images.unsplash.com/photo-1773236321529-fe13541e95f2',
    alt: { en: 'Close-up of a polished car bonnet with chrome detail', ar: 'لقطة قريبة لغطاء سيارة لامع بتفاصيل كرومية' },
    credit: 'atelierbyvineeth', page: 'https://unsplash.com/photos/lFDWY0SbTSA',
  },
  dates: {
    src: 'https://images.unsplash.com/photo-1649335889120-4084d7456c7c',
    alt: { en: 'Sukkari dates served in a glass bowl', ar: 'تمر سكري في وعاء زجاجي' },
    credit: 'Dwi Agus Prasetiyo', page: 'https://unsplash.com/photos/RiBHMTVsdAg',
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
