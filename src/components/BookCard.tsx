import React, { useState } from 'react';
import { Book } from '../data/books';
import { BookPreview } from './BookPreview';
import { Star, StarHalf } from 'lucide-react';

interface BookCardProps {
  book: Book;
  isListView: boolean;
}

export function BookCard({ book, isListView }: BookCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          className="fill-amber-400 text-amber-400" 
          size={12} 
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half" 
          className="fill-amber-400 text-amber-400" 
          size={12} 
        />
      );
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          className="text-gray-200" 
          size={12} 
        />
      );
    }

    return <div className="flex items-center">{stars}</div>;
  };

  if (isListView) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="flex">
          {/* Book Cover */}
          <div className="relative w-[180px] h-[240px] flex-shrink-0 cursor-pointer [perspective:1000px]">
            <div
              className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              }`}
              onClick={handleFlip}
            >
              {/* Front Cover */}
              <div className="absolute w-full h-full [backface-visibility:hidden]">
                <div className="w-full h-full p-2">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                    <img
                      src={book.coverImage}
                      alt={`${book.title} front cover`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      width="400"
                      height="600"
                    />
                  </div>
                </div>
              </div>
              {/* Back Cover */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="w-full h-full p-2">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                    <img
                      src={book.rearCoverImage}
                      alt={`${book.title} back cover`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      width="400"
                      height="600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="flex-1 p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                book.category === 'Story Books' 
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-blue-100 text-blue-600'
              }`}>
                {book.category} {book.category === 'Story Books' ? '📚' : '✏️'}
              </span>
              {book.averageRating && (
                <a
                  href={`${book.amazonLink}#customerReviews`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {renderStars(book.averageRating)}
                </a>
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{book.author}</p>
            <p className="text-sm text-gray-700 mb-4">{book.description}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="w-full sm:flex-1 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md text-sm sm:text-base"
              >
                <span className="inline-flex items-center justify-center whitespace-nowrap">
                  Sneak Peek <span className="ml-1">👀</span>
                </span>
              </button>
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md text-center text-sm sm:text-base"
              >
                <span className="inline-flex items-center justify-center whitespace-nowrap">
                  Buy on Amazon <span className="ml-1">🛍️</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view remains the same but with updated language display
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-4 border-purple-200 group hover:scale-105 transform duration-300">
      {/* Flippable image section */}
      <div className="relative h-[350px] cursor-pointer [perspective:1000px] group">
        <div
          className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
          onClick={handleFlip}
        >
          {/* Front image */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <div className="w-full h-full p-3">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-md bg-white">
                <img
                  src={book.coverImage}
                  alt={`${book.title} front cover`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width="400"
                  height="600"
                />
              </div>
            </div>
          </div>

          {/* Back image */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="w-full h-full p-3">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-md bg-white">
                <img
                  src={book.rearCoverImage}
                  alt={`${book.title} back cover`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width="400"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Flip instruction */}
        <div className="absolute bottom-5 right-5 bg-white/90 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg border-2 border-purple-200 transform rotate-12">
          <span className="text-sm text-purple-600 font-bold">Click to flip! 🔄</span>
        </div>
      </div>

      {/* Static content section */}
      <div className="p-5 bg-white/80 backdrop-blur-sm">
        {/* Category and Language badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full transform -rotate-2 shadow-sm ${
            book.category === 'Story Books' 
              ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white'
              : 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white'
          }`}>
            {book.category} {book.category === 'Story Books' ? '📚' : '✏️'}
          </span>
          {book.averageRating && (
            <a
              href={`${book.amazonLink}#customerReviews`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 text-sm font-bold rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white transform rotate-2 shadow-sm hover:from-blue-500 hover:to-indigo-600 transition-colors"
            >
              {renderStars(book.averageRating)}
            </a>
          )}
        </div>

        {/* Title and Author */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-3 font-medium">{book.author}</p>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{book.description}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="w-full sm:flex-1 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md text-sm sm:text-base"
          >
            <span className="inline-flex items-center justify-center whitespace-nowrap">
              Sneak Peek <span className="ml-1">👀</span>
            </span>
          </button>
          <a
            href={book.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md text-center text-sm sm:text-base"
          >
            <span className="inline-flex items-center justify-center whitespace-nowrap">
              Buy on Amazon <span className="ml-1">🛍️</span>
            </span>
          </a>
        </div>
      </div>

      <BookPreview 
        book={book} 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
      />
    </div>
  );
}