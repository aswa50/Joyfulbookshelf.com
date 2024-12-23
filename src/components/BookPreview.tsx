import React, { useState, useEffect, useRef } from 'react';
import { Book } from '../data/books';
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2, ZoomIn, ZoomOut, RotateCw, Star, StarHalf } from 'lucide-react';

interface BookPreviewProps {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
}

export function BookPreview({ book, isOpen, onClose }: BookPreviewProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  // Sample preview pages with more detailed content
  const previewPages = [
    { 
      image: book.coverImage, 
      text: "Front Cover",
      description: "Begin your journey with this magical book!"
    },
    ...(book.previewPages?.map((page, index) => ({
      image: page,
      text: `Page ${index + 1}`,
      description: book.category === 'Story Books' 
        ? "Continue the magical journey..." 
        : "Get inspired with these beautiful illustrations!"
    })) || []),
    { 
      image: book.rearCoverImage, 
      text: "Back Cover",
      description: "Want to know more? Get the full book!"
    }
  ];

  // Touch and swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isFlipping) return;
    
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0 && currentPage < previewPages.length - 1) {
        handleNext();
      } else if (diff < 0 && currentPage > 0) {
        handlePrev();
      }
      touchStartX.current = touchEndX;
    }
  };

  // Zoom and pan functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setDragOffset({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 1));
    if (zoom <= 1.5) {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  // Reset zoom and rotation when changing pages
  useEffect(() => {
    setZoom(1);
    setRotation(0);
    setDragOffset({ x: 0, y: 0 });
  }, [currentPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
      if (e.key === '+') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === 'r') handleRotate();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentPage, zoom]);

  const handleNext = () => {
    if (currentPage < previewPages.length - 1 && !isFlipping) {
      setDirection('next');
      setIsFlipping(true);
      setCurrentPage(prev => prev + 1);
      setTimeout(() => setIsFlipping(false), 700);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setDirection('prev');
      setIsFlipping(true);
      setCurrentPage(prev => prev - 1);
      setTimeout(() => setIsFlipping(false), 700);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          className="fill-yellow-400 text-yellow-400" 
          size={16} 
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half" 
          className="fill-yellow-400 text-yellow-400" 
          size={16} 
        />
      );
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          className="text-gray-300" 
          size={16} 
        />
      );
    }

    return stars;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal panel */}
      <div className={`flex items-center justify-center p-4 transition-all duration-300 ${isFullscreen ? 'h-screen' : ''}`}>
        <div className={`relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all 
          ${isFullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-4xl'}`}>
          
          {/* Header with controls */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-purple-800">
              {book.title} - Preview
            </h3>
            <div className="flex items-center gap-2">
              {/* Zoom controls */}
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 1}
                className="p-2 rounded-full hover:bg-white/50 transition-colors disabled:opacity-50"
                title="Zoom Out"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                className="p-2 rounded-full hover:bg-white/50 transition-colors disabled:opacity-50"
                title="Zoom In"
              >
                <ZoomIn size={20} />
              </button>
              {/* Rotate control */}
              <button
                onClick={handleRotate}
                className="p-2 rounded-full hover:bg-white/50 transition-colors"
                title="Rotate"
              >
                <RotateCw size={20} />
              </button>
              {/* Fullscreen toggle */}
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full hover:bg-white/50 transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/50 transition-colors"
                title="Close Preview"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Book preview content */}
          <div className="bg-gradient-to-b from-purple-50 to-pink-50 p-6">
            {/* Flipbook container */}
            <div 
              ref={containerRef}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden
                ${isFullscreen ? 'h-[calc(100vh-12rem)]' : 'aspect-[4/3]'}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Page display */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform perspective-1000
                  ${isFlipping ? direction === 'next' ? 'flip-enter' : 'flip-exit' : ''}`}
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                  transformOrigin: 'center',
                  transition: 'transform 0.3s ease-out',
                  cursor: zoom > 1 ? 'grab' : 'default',
                  ...(zoom > 1 && {
                    transform: `scale(${zoom}) rotate(${rotation}deg) translate(${dragOffset.x}px, ${dragOffset.y}px)`,
                  }),
                }}
              >
                <img
                  src={previewPages[currentPage].image}
                  alt={`Preview page ${currentPage + 1}`}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>

              {/* Page overlay with description */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-6 text-white">
                <p className="text-lg font-medium">
                  {previewPages[currentPage].description}
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 0 || isFlipping}
                  className={`p-2 rounded-r-full bg-black/20 hover:bg-black/40 transition-colors transform hover:scale-105
                    ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={handleNext}
                  disabled={currentPage === previewPages.length - 1 || isFlipping}
                  className={`p-2 rounded-l-full bg-black/20 hover:bg-black/40 transition-colors transform hover:scale-105
                    ${currentPage === previewPages.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </div>

              {/* Page indicator */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                Page {currentPage + 1} of {previewPages.length}
              </div>

              {/* Zoom level indicator */}
              {zoom > 1 && (
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {Math.round(zoom * 100)}%
                </div>
              )}
            </div>

            {/* Reviews section */}
            {book.reviews && book.reviews.length > 0 && (
              <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-purple-800">
                    Customer Reviews
                  </h4>
                  {book.averageRating && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {renderStars(book.averageRating)}
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        ({book.averageRating.toFixed(1)} out of 5)
                      </span>
                    </div>
                  )}
                </div>

                {/* Show only the top review */}
                {book.reviews.length > 0 && (
                  <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {renderStars(book.reviews[0].rating)}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm italic">
                      "{book.reviews[0].text}"
                    </p>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={`${book.amazonLink}#customerReviews`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1"
                  >
                    Read all reviews on Amazon
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* Call to action */}
            <div className="mt-6 flex justify-center">
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold transition-all transform hover:scale-105 hover:from-purple-600 hover:to-pink-600 shadow-lg"
              >
                Get the Full Book on Amazon 📚
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 