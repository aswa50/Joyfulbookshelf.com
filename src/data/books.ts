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
    description: 'Join Little Racer on an exciting adventure as he learns about determination and friendship on his journey to victory.',
    category: 'Story Books',
    language: 'English',
    amazonLink: 'https://www.amazon.com/dp/B0CQXWL4QD',
    coverImage: '/books/little-racer-en.jpg',
    rearCoverImage: '/books/little-racer-en-back.jpg',
    previewPages: [
      '/books/previews/little-racer-en-preview1.jpg',
      '/books/previews/little-racer-en-preview2.jpg',
      '/books/previews/little-racer-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  // ... continue with other books, ensuring each has previewPages array
  // Story Books - German
  {
    id: 'little-racer-de',
    title: 'Der kleine Rennfahrer',
    author: 'AK Publications',
    description: 'Begleite den kleinen Rennfahrer auf einem aufregenden Abenteuer, bei dem er Entschlossenheit und Freundschaft auf seinem Weg zum Sieg lernt.',
    category: 'Story Books',
    language: 'German',
    amazonLink: 'https://www.amazon.de/dp/B0CQXV5MHH',
    coverImage: '/books/little-racer-de.jpg',
    rearCoverImage: '/books/little-racer-de-back.jpg',
    previewPages: [
      '/books/previews/little-racer-de-preview1.jpg',
      '/books/previews/little-racer-de-preview2.jpg',
      '/books/previews/little-racer-de-preview3.jpg'
    ],
    averageRating: 5.0
  },
  // ... continue with other books, ensuring each has previewPages array
  // Activity Books - English
  {
    id: 'boats-en',
    title: 'Boats Coloring Book',
    author: 'AK Publications',
    description: 'Dive into the world of boats with this fun and educational coloring book. Perfect for young artists!',
    category: 'Activity Books',
    language: 'English',
    amazonLink: 'https://www.amazon.com/dp/B0CQXV5MHH',
    coverImage: '/books/boats-en.jpg',
    rearCoverImage: '/books/boats-en-back.jpg',
    previewPages: [
      '/books/previews/boats-en-preview1.jpg',
      '/books/previews/boats-en-preview2.jpg',
      '/books/previews/boats-en-preview3.jpg'
    ],
    averageRating: 5.0
  },
  // ... continue with other books, ensuring each has previewPages array
];