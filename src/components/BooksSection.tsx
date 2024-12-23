import React from 'react';
import { BookCard } from './BookCard';
import { books } from '../data/books';

interface Props {
  onCategorySelect: (category: string) => void;
}

export function BooksSection({ onCategorySelect }: Props) {
  const categories = [
    { id: 'storyBooks', title: 'Story Books', sample: books.storyBooks[0] },
    { id: 'activityBooks', title: 'Activity Books', sample: books.activityBooks[0] },
    { id: 'printables', title: 'Printables', sample: books.printables[0] },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-4">
          Discover Our Books
        </h2>
        <p className="text-center text-purple-200/80 mb-12 max-w-2xl mx-auto">
          Each book is crafted with love and care to create an unforgettable journey for young readers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(({ id, title, sample }) => (
            <div key={id} onClick={() => onCategorySelect(id)} className="cursor-pointer">
              <BookCard
                title={title}
                coverImage={sample.coverImage}
                description={sample.description}
                ageRange={sample.ageRange}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}