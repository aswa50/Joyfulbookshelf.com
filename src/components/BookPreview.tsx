import React, { useState, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // Reset to first page when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentPage(0);
    }
  }, [isOpen]);

  // Ensure proper path resolution
  const getImagePath = (path: string) => {
    // Remove any leading slash and clean the path
    const cleanPath = path.replace(/^\/+/, '').replace(/\/+/g, '/');
    // Construct the full URL without cache-busting to allow browser caching
    const fullUrl = `${window.location.origin}/${cleanPath}`;
    return fullUrl;
  };

  // Preload a single image
  const preloadImage = (path: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = path;
    });
  };

  useEffect(() => {
    if (isOpen && book.previewPages) {
      setIsLoading(true);
      setImageError(false);
      
      const currentImagePath = getImagePath(book.previewPages[currentPage]);
      
      // Preload current image
      preloadImage(currentImagePath)
        .then(() => setIsLoading(false))
        .catch(() => setImageError(true));

      // Preload adjacent images
      const preloadAdjacent = async () => {
        // Preload next image if available
        if (currentPage < book.previewPages!.length - 1) {
          const nextImagePath = getImagePath(book.previewPages[currentPage + 1]);
          preloadImage(nextImagePath).catch(() => {});
        }
        // Preload previous image if available
        if (currentPage > 0) {
          const prevImagePath = getImagePath(book.previewPages[currentPage - 1]);
          preloadImage(prevImagePath).catch(() => {});
        }
      };

      preloadAdjacent();
    }
  }, [isOpen, currentPage, book.previewPages]);

  const handlePrevPage = () => {
    setSlideDirection('right');
    setCurrentPage((prev) => {
      // Loop back to last page if at the beginning
      return prev > 0 ? prev - 1 : book.previewPages!.length - 1;
    });
    setImageError(false);
  };

  const handleNextPage = () => {
    setSlideDirection('left');
    setCurrentPage((prev) => {
      // Loop back to first page if at the end
      return prev < book.previewPages!.length - 1 ? prev + 1 : 0;
    });
    setImageError(false);
  };

  const handleMouseLeave = () => {
    onClose();
  };

  // Reset slide direction after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDirection(null);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleImageError = () => {
    const imagePath = getImagePath(book.previewPages[currentPage]);
    console.error('Failed to load preview image:', {
      bookTitle: book.title,
      pageNumber: currentPage + 1,
      totalPages: book.previewPages.length,
      imagePath,
      baseUrl: window.location.origin,
      windowLocation: window.location.toString(),
      protocol: window.location.protocol,
      host: window.location.host,
      currentPageState: currentPage
    });
    setImageError(true);
  };

  if (!isOpen || !book.previewPages) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center z-50 p-4
        ${isOpen ? 'bg-opacity-75' : 'bg-opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div 
        className={`relative bg-white rounded-lg shadow-xl max-w-4xl w-full h-[90vh] flex flex-col
          transform transition-all duration-300
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
        onClick={e => e.stopPropagation()}
        onMouseLeave={handleMouseLeave}
      >
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-4 border-b bg-white z-20">
          <h3 className="text-xl font-bold text-gray-900">
            {book.title} - Preview
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors hover:rotate-90 transform duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main content wrapper */}
        <div className="flex-1 relative overflow-hidden">
          {/* Image container */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {imageError ? (
              <div className="text-gray-500 text-center animate-fade-in">
                <p className="text-lg font-medium">Failed to load preview image</p>
                <p className="text-sm mt-2">Please try again later</p>
                <p className="text-xs mt-1 text-gray-400">Page {currentPage + 1} of {book.previewPages.length}</p>
              </div>
            ) : (
              <>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <div className="animate-pulse text-gray-400">Loading...</div>
                  </div>
                )}
                <img
                  key={currentPage}
                  src={getImagePath(book.previewPages[currentPage])}
                  alt={`${book.title} preview page ${currentPage + 1}`}
                  className={`max-w-full max-h-[calc(90vh-8rem)] object-contain mx-auto
                    transition-all duration-300 transform
                    ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                    ${slideDirection === 'left' ? 'translate-x-[-100%] opacity-0' : ''}
                    ${slideDirection === 'right' ? 'translate-x-[100%] opacity-0' : ''}
                  `}
                  onError={handleImageError}
                  onLoad={() => setIsLoading(false)}
                  loading="eager"
                />
              </>
            )}
          </div>

          {/* Navigation overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full flex items-center justify-between p-4">
              {/* Left button */}
              <div className="pointer-events-auto transform transition-transform duration-200 hover:scale-110">
                <button
                  onClick={handlePrevPage}
                  className="p-2 rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>

              {/* Right button */}
              <div className="pointer-events-auto transform transition-transform duration-200 hover:scale-110">
                <button
                  onClick={handleNextPage}
                  className="p-2 rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-4 border-t text-center text-sm text-gray-600 bg-white z-20">
          Page {currentPage + 1} of {book.previewPages.length}
        </div>
      </div>
    </div>
  );
} 