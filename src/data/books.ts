export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: 'Story Books' | 'Activity Books';
  language: 'English' | 'German';
  amazonLink: string;
  coverImage: string;
  rearCoverImage?: string;
  previewPages?: string[];
  averageRating?: number;
  reviews?: Array<{
    rating: number;
    text: string;
  }>;
}

export const books: Book[] = [
  // Story Books - English
  {
    id: 'little-racer-en',
    title: 'Little Racer - Zooming to Victory',
    author: 'AK Publications',
    description: 'Join Little Racer Tommy racing his little car: Race, Count and Win! A colorful journey from 6th to 1st place.',
    category: 'Story Books',
    language: 'English',
    amazonLink: 'https://a.co/d/ilAt5rO',
    coverImage: '/books/little-racer-en.jpg',
    rearCoverImage: '/books/little-racer-en-back.jpg',
    previewPages: [
      '/books/previews/little-racer-en-preview1.jpg',
      '/books/previews/little-racer-en-preview2.jpg',
      '/books/previews/little-racer-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'little-racer-de',
    title: 'Der kleine Rennfahrer',
    author: 'AK Publications',
    description: 'Begleite den kleinen Rennfahrer Tommy auf seiner Reise zum Sieg. Eine farbenfrohe Reise vom 6. zum 1. Platz.',
    category: 'Story Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/icWWiOm',
    coverImage: '/books/little-racer-de.jpg',
    rearCoverImage: '/books/little-racer-de-back.jpg',
    previewPages: [
      '/books/previews/little-racer-de-preview1.jpg',
      '/books/previews/little-racer-de-preview2.jpg',
      '/books/previews/little-racer-de-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'astronaut-en',
    title: 'LITTLE ASTRONAUT',
    author: 'AK Publications',
    description: "A Children's Adventure Book About Discovering the Solar System",
    category: 'Story Books',
    language: 'English',
    amazonLink: 'https://a.co/d/fRUC3YY',
    coverImage: '/books/astronaut-en.jpg',
    rearCoverImage: '/books/astronaut-en-back.jpg',
    previewPages: [
      '/books/previews/astronaut-en-preview1.jpg',
      '/books/previews/astronaut-en-preview2.jpg',
      '/books/previews/astronaut-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'astronaut-de',
    title: 'KLEINER ASTRONAUT',
    author: 'AK Publications',
    description: 'Eine Reise durch unser Sonnensystem: Ein Kinderbuch über die Erkundung des Sonnensystems',
    category: 'Story Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/8QIrYT4',
    coverImage: '/books/astronaut-de.jpg',
    rearCoverImage: '/books/astronaut-de-back.jpg',
    previewPages: [
      '/books/previews/astronaut-de-preview1.jpg',
      '/books/previews/astronaut-de-preview2.jpg',
      '/books/previews/astronaut-de-preview3.jpg'
    ],
    averageRating: 5.0
  },
  // Activity Books
  {
    id: 'boats-en',
    title: 'Boats Coloring Book',
    author: 'AK Publications',
    description: 'Fun coloring activities with various boats and ships for children aged 4-8 years',
    category: 'Activity Books',
    language: 'English',
    amazonLink: 'https://a.co/d/aw04c9z',
    coverImage: '/books/boats-en.jpg',
    rearCoverImage: '/books/boats-en-back.jpg',
    previewPages: [
      '/books/previews/boats-en-preview1.jpg',
      '/books/previews/boats-en-preview2.jpg',
      '/books/previews/boats-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'boats-de',
    title: 'Boote Malbuch',
    author: 'AK Publications',
    description: 'Spaß beim Ausmalen verschiedener Boote und Schiffe für Kinder von 4-8 Jahren',
    category: 'Activity Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/gLyTwwF',
    coverImage: '/books/boats-de.jpg',
    rearCoverImage: '/books/boats-de-back.jpg',
    previewPages: [
      '/books/previews/boats-de-preview1.jpg',
      '/books/previews/boats-de-preview2.jpg',
      '/books/previews/boats-de-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'rockets-en',
    title: 'COLORING BOOK - ROCKETS AND SPACESHIPS',
    author: 'AK Publications',
    description: 'The Evolution of Rockets Towards Future Spaceships - 40 Imaginary Rockets and Spaceships for coloring, Age: 3-10',
    category: 'Activity Books',
    language: 'English',
    amazonLink: 'https://a.co/d/iQY33LO',
    coverImage: '/books/rockets-en.jpg',
    rearCoverImage: '/books/rockets-en-back.jpg',
    previewPages: [
      '/books/previews/rockets-en-preview1.png',
      '/books/previews/rockets-en-preview2.png',
      '/books/previews/rockets-en-preview3.png'
    ],
    averageRating: 5.0
  },
  {
    id: 'rockets-de',
    title: 'Raketen und Raumschiffe Malbuch',
    author: 'AK Publications',
    description: 'Die Evolution der Raketen zu zukünftigen Raumschiffen - 40 imaginäre Raketen und Raumschiffe zum Ausmalen, Alter: 3-10',
    category: 'Activity Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/3kndbqq',
    coverImage: '/books/rockets-de.jpg',
    rearCoverImage: '/books/rockets-de-back.jpg',
    previewPages: [
      '/books/previews/rockets-de-preview1.png',
      '/books/previews/rockets-de-preview2.png',
      '/books/previews/rockets-de-preview3.png'
    ],
    averageRating: 5.0
  },
  {
    id: 'vehicles-en',
    title: 'Vehicles Coloring Book',
    author: 'AK Publications',
    description: 'Fun coloring activities with various vehicles for children aged 4-8 years',
    category: 'Activity Books',
    language: 'English',
    amazonLink: 'https://a.co/d/cK3azFP',
    coverImage: '/books/vehicles-en.jpg',
    rearCoverImage: '/books/vehicles-en-back.jpg',
    previewPages: [
      '/books/previews/vehicles-en-preview1.jpg',
      '/books/previews/vehicles-en-preview2.jpg',
      '/books/previews/vehicles-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'vehicles-de',
    title: 'Fahrzeuge Malbuch',
    author: 'AK Publications',
    description: 'Spaß beim Ausmalen verschiedener Fahrzeuge für Kinder von 4-8 Jahren',
    category: 'Activity Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/eXFIyAW',
    coverImage: '/books/vehicles-de.jpg',
    rearCoverImage: '/books/vehicles-de-back.jpg',
    previewPages: [
      '/books/previews/vehicles-de-preview1.jpg',
      '/books/previews/vehicles-de-preview2.jpg',
      '/books/previews/vehicles-de-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'farm-animals-en',
    title: 'Farm Animals Coloring Book',
    author: 'AK Publications',
    description: 'Delightful coloring activities featuring adorable farm animals for children aged 4-8 years',
    category: 'Activity Books',
    language: 'English',
    amazonLink: 'https://a.co/d/5y8UZsD',
    coverImage: '/books/farm-animals-en.jpg',
    rearCoverImage: '/books/farm-animals-en-back.jpg',
    previewPages: [
      '/books/previews/farm-animals-en-preview1.jfif',
      '/books/previews/farm-animals-en-preview2.jfif',
      '/books/previews/farm-animals-en-preview3.jfif'
    ],
    averageRating: 5.0
  },
  {
    id: 'farm-animals-de',
    title: 'Bauernhoftiere Malbuch',
    author: 'AK Publications',
    description: 'Schöne Malvorlagen mit niedlichen Bauernhoftieren für Kinder von 4-8 Jahren',
    category: 'Activity Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/77Oq3jg',
    coverImage: '/books/farm-animals-de.jpg',
    rearCoverImage: '/books/farm-animals-de-back.jpg',
    previewPages: [
      '/books/previews/farm-animals-de-preview1.jpg',
      '/books/previews/farm-animals-de-preview2.jpg',
      '/books/previews/farm-animals-de-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'wildanimals-en',
    title: 'Wild Animals Coloring Book',
    author: 'AK Publications',
    description: 'Exciting coloring activities featuring majestic wild animals for children aged 4-8 years',
    category: 'Activity Books',
    language: 'English',
    amazonLink: 'https://a.co/d/1SFenuH',
    coverImage: '/books/wildanimals-en.jpg',
    rearCoverImage: '/books/wildanimals-en-back.jpg',
    previewPages: [
      '/books/previews/wildanimals-en-preview1.jpg',
      '/books/previews/wildanimals-en-preview2.jpg',
      '/books/previews/wildanimals-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'wildanimals-de',
    title: 'Wilde Tiere Malbuch',
    author: 'AK Publications',
    description: 'Spannende Malvorlagen mit majestätischen wilden Tieren für Kinder von 4-8 Jahren',
    category: 'Activity Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/3qcC8T2',
    coverImage: '/books/wildanimals-de.jpg',
    rearCoverImage: '/books/wildanimals-de-back.jpg',
    previewPages: [
      '/books/previews/wildanimals-de-preview1.jpg',
      '/books/previews/wildanimals-de-preview2.jpg',
      '/books/previews/wildanimals-de-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'wildanimals-part2-en',
    title: 'Wild Animals Coloring Book - Part 2',
    author: 'AK Publications',
    description: 'More exciting wild animals to color! A continuation of our popular coloring series for children aged 4-8 years',
    category: 'Activity Books',
    language: 'English',
    amazonLink: 'https://a.co/d/dz7fNAI',
    coverImage: '/books/wildanimals-part2-en.jpg',
    rearCoverImage: '/books/wildanimals-part2-en-back.jpg',
    previewPages: [
      '/books/previews/wildanimals-part2-en-preview1.jpg',
      '/books/previews/wildanimals-part2-en-preview2.jpg',
      '/books/previews/wildanimals-part2-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'wildanimals-part2-de',
    title: 'Wilde Tiere Malbuch - Teil 2',
    author: 'AK Publications',
    description: 'Noch mehr aufregende wilde Tiere zum Ausmalen! Eine Fortsetzung unserer beliebten Malreihe für Kinder von 4-8 Jahren',
    category: 'Activity Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/5DhaqLS',
    coverImage: '/books/wildanimals-part2-de.jpg',
    rearCoverImage: '/books/wildanimals-part2-de-back.jpg',
    previewPages: [
      '/books/previews/wildanimals-part2-de-preview1.jpg',
      '/books/previews/wildanimals-part2-de-preview2.jpg',
      '/books/previews/wildanimals-part2-de-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'insects-en',
    title: 'Insects Coloring Book',
    author: 'AK Publications',
    description: 'Fascinating coloring activities featuring amazing insects for children aged 4-8 years',
    category: 'Activity Books',
    language: 'English',
    amazonLink: 'https://a.co/d/9vsoMCy',
    coverImage: '/books/insects-en.jpg',
    rearCoverImage: '/books/insects-en-back.jpg',
    previewPages: [
      '/books/previews/insects-en-preview1.jpg',
      '/books/previews/insects-en-preview2.jpg',
      '/books/previews/insects-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  {
    id: 'insects-de',
    title: 'Insekten Malbuch',
    author: 'AK Publications',
    description: 'Faszinierende Malvorlagen mit erstaunlichen Insekten für Kinder von 4-8 Jahren',
    category: 'Activity Books',
    language: 'German',
    amazonLink: 'https://amzn.eu/d/aFuTh32',
    coverImage: '/books/insects-de.jpg',
    rearCoverImage: '/books/insects-de-back.jpg',
    previewPages: [
      '/books/previews/insects-de-preview1.jpg',
      '/books/previews/insects-de-preview2.jpg',
      '/books/previews/insects-de-preview3.jpg'
    ],
    averageRating: 5.0
  }
];