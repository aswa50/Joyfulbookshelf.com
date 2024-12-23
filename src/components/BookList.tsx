import React from 'react';
import { books } from '../data/books';
import { BookCard } from './BookCard';

interface BookListProps {
  isListView: boolean;
  language?: 'English' | 'German';
  category?: 'All' | 'Story Books' | 'Activity Books' | 'Printables';
}

export function BookList({ isListView, language = 'English', category = 'All' }: BookListProps) {
  const filteredBooks = books.filter(book => {
    if (category === 'All') {
      return book.language === language;
    }
    return book.language === language && book.category === category;
  });

  return (
    <div className={isListView 
      ? "space-y-4 md:space-y-6" 
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
    }>
      {filteredBooks.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} 
          isListView={isListView}
        />
      ))}
      {filteredBooks.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-gray-600">No books found in this category.</p>
        </div>
      )}
    </div>
  );
}