import React from 'react';
import { books } from '../data/books';
import { BookCard } from './BookCard';

interface BookListProps {
  language: 'English' | 'German';
  category: 'All' | 'Story Books' | 'Activity Books' | 'Printables';
  isListView: boolean;
}

export function BookList({ language, category, isListView }: BookListProps) {
  const filteredBooks = books.filter(book => {
    if (category === 'All') {
      return book.language === language;
    }
    return book.language === language && book.category === category;
  });

  return (
    <div className={isListView ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
      {filteredBooks.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} 
          isListView={isListView}
        />
      ))}
    </div>
  );
}