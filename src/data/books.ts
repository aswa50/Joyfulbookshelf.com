export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  category: 'Story Books' | 'Activity Books' | 'Printables';
  language: 'English' | 'German';
  amazonLink: string;
  coverImage: string;
  rearCoverImage: string;
  previewPages?: string[];
  reviews?: Review[];
  averageRating?: number;
}

export const books: Book[] = [
  // Story Books Category
  {
    id: 1,
    title: "Little Racer - Zooming to Victory",
    author: "AK Publications",
    description: "Join Little Racer Tommy racing his little car: Race, Count and Win! A colorful journey from 6th to 1st place.",
    category: "Story Books",
    language: "English",
    amazonLink: "https://www.amazon.com/Little-Racer-Zooming-Childrens-colorful-ebook/dp/B0CR4MDT5K",
    coverImage: "/books/little-racer-en.jpg",
    rearCoverImage: "/books/little-racer-en-back.jpg",
    averageRating: 4.5,
    reviews: [
      {
        author: "Sarah M.",
        rating: 5,
        text: "My son absolutely loves this book! The illustrations are beautiful and the story is engaging. Great for teaching counting too!",
        date: "March 15, 2024"
      },
      {
        author: "John D.",
        rating: 4,
        text: "Nice book with colorful illustrations. My kids enjoy the racing theme and it helps them learn numbers.",
        date: "March 10, 2024"
      },
      {
        author: "Emily R.",
        rating: 5,
        text: "Perfect for little racing enthusiasts! The story is simple but captivating, and the artwork is wonderful.",
        date: "March 5, 2024"
      }
    ]
  },
  {
    id: 2,
    title: "Der kleine Rennfahrer",
    author: "AK Publications",
    description: "Begleite den kleinen Rennfahrer Tommy auf seiner Reise zum Sieg. Eine farbenfrohe Reise vom 6. zum 1. Platz.",
    category: "Story Books",
    language: "German",
    amazonLink: "https://www.amazon.de/kleine-Rennfahrer-Kinderbuch-Rennauto-Geschichte-ebook/dp/B0CR4KXVZX/",
    coverImage: "/books/little-racer-de.jpg",
    rearCoverImage: "/books/little-racer-de-back.jpg",
    averageRating: 4.7,
    reviews: [
      {
        author: "Maria S.",
        rating: 5,
        text: "Ein wunderschönes Buch! Die Geschichte ist spannend und die Illustrationen sind fantastisch.",
        date: "March 12, 2024"
      }
    ]
  },
  {
    id: 3,
    title: "LITTLE ASTRONAUT",
    author: "AK Publications",
    description: "A Children's Adventure Book About Discovering the Solar System",
    category: "Story Books",
    language: "English",
    amazonLink: "https://www.amazon.com/LITTLE-ASTRONAUT-Childrens-Adventure-Discovering-ebook/dp/B0D5WJLMYW",
    coverImage: "/books/astronaut-en.jpg",
    rearCoverImage: "/books/astronaut-en-back.jpg",
    averageRating: 4.8,
    reviews: [
      {
        author: "Michael P.",
        rating: 5,
        text: "This book sparked my child's interest in space! The illustrations are captivating and the story is educational.",
        date: "March 14, 2024"
      }
    ]
  },
  {
    id: 4,
    title: "KLEINER ASTRONAUT",
    author: "AK Publications",
    description: "Eine Reise durch unser Sonnensystem: Ein Kinderbuch über die Erkundung des Sonnensystems",
    category: "Story Books",
    language: "German",
    amazonLink: "https://www.amazon.com/KLEINER-ASTRONAUT-Sonnensystem-Kinderbuch-Sonnensystems-ebook/dp/B0DL3R7QPL",
    coverImage: "/books/astronaut-de.jpg",
    rearCoverImage: "/books/astronaut-de-back.jpg",
    averageRating: 4.6,
    reviews: [
      {
        author: "Thomas K.",
        rating: 5,
        text: "Ein faszinierendes Buch über das Sonnensystem. Meine Kinder lieben die Reise durch den Weltraum!",
        date: "March 13, 2024"
      }
    ]
  },
  // Activity Books Category
  {
    id: 5,
    title: "Vehicles Coloring Book",
    author: "AK Publications",
    description: "Fun coloring activities with various vehicles for children aged 4-8 years",
    category: "Activity Books",
    language: "English",
    amazonLink: "https://amzn.eu/d/h5Qp3QX",
    coverImage: "/books/vehicles-en.jpg",
    rearCoverImage: "/books/vehicles-en-back.jpg"
  },
  {
    id: 6,
    title: "Fahrzeuge Malbuch",
    author: "AK Publications",
    description: "Spaß beim Ausmalen verschiedener Fahrzeuge für Kinder von 4-8 Jahren",
    category: "Activity Books",
    language: "German",
    amazonLink: "https://www.amazon.de/Fahrzeuge-Malbuch-Kinder-Jahren-Aktivit%C3%A4tsbuch/dp/B0CQXV8MQD/",
    coverImage: "/books/vehicles-de.jpg",
    rearCoverImage: "/books/vehicles-de-back.jpg"
  },
  {
    id: 7,
    title: "COLORING BOOK - ROCKETS AND SPACESHIPS",
    author: "AK Publications",
    description: "The Evolution of Rockets Towards Future Spaceships - 40 Imaginary Rockets and Spaceships for coloring, Age: 3-10",
    category: "Activity Books",
    language: "English",
    amazonLink: "https://www.amazon.com/COLORING-BOOK-SPACESHIPS-Evolution-Spaceships/dp/B0CY4RZQ94",
    coverImage: "/books/rockets-en.jpg",
    rearCoverImage: "/books/rockets-en-back.jpg"
  },
  {
    id: 8,
    title: "Raketen und Raumschiffe Malbuch",
    author: "AK Publications",
    description: "Die Evolution der Raketen zu zukünftigen Raumschiffen - 40 imaginäre Raketen und Raumschiffe zum Ausmalen, Alter: 3-10",
    category: "Activity Books",
    language: "German",
    amazonLink: "https://a.co/d/gXZ8jcq",
    coverImage: "/books/rockets-de.jpg",
    rearCoverImage: "/books/rockets-de-back.jpg"
  }
];