import React, { useMemo, useState, useEffect } from 'react';
import { books } from '../data/books';
import { BookCard } from './BookCard';

interface BookListProps {
  isListView: boolean;
  language?: 'English' | 'German';
  category?: 'All' | 'Story Books' | 'Activity Books' | 'Printables';
}

export function BookList({ isListView, language = 'English', category = 'All' }: BookListProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(language);

  // Memoize filtered books to prevent unnecessary recalculations
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      if (category === 'All') {
        return book.language === currentLanguage;
      }
      return book.language === currentLanguage && book.category === category;
    });
  }, [currentLanguage, category]);

  // Handle smooth language transition
  useEffect(() => {
    if (language !== currentLanguage) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentLanguage(language);
        setIsTransitioning(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [language, currentLanguage]);

  return (
    <div 
      className={`transition-opacity duration-300 ease-in-out ${
        isTransitioning ? 'opacity-95' : 'opacity-100'
      }`}
    >
      <div 
        className={isListView 
          ? "space-y-4 md:space-y-6" 
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        }
      >
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
    </div>
  );
}