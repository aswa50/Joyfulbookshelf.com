import React, { useState } from 'react';
import { Book } from '../data/books';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface BookPreviewProps {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
}

export function BookPreview({ book, isOpen, onClose }: BookPreviewProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [imageError, setImageError] = useState(false);

  if (!isOpen || !book.previewPages) return null;

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    setImageError(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < book.previewPages!.length - 1 ? prev + 1 : prev));
    setImageError(false);
  };

  const handleImageError = () => {
    console.error(`Failed to load image: ${book.previewPages![currentPage]}`);
    setImageError(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold text-gray-900">
            {book.title} - Preview
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Preview Content */}
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {imageError ? (
              <div className="text-gray-500 text-center">
                <p>Failed to load preview image.</p>
                <p className="text-sm mt-2">Please try again later.</p>
              </div>
            ) : (
              <img
                src={book.previewPages[currentPage]}
                alt={`Preview page ${currentPage + 1}`}
                className="max-w-full max-h-full object-contain"
                onError={handleImageError}
                loading="eager"
              />
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`p-2 rounded-full bg-white shadow-lg ${
                currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === book.previewPages.length - 1}
              className={`p-2 rounded-full bg-white shadow-lg ${
                currentPage === book.previewPages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Page Indicator */}
        <div className="p-4 border-t text-center text-sm text-gray-600">
          Page {currentPage + 1} of {book.previewPages.length}
        </div>
      </div>
    </div>
  );
} 