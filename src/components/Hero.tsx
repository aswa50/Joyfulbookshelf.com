import React from 'react';

interface HeroProps {
  className?: string;
  onExplore: () => void;
}

export function Hero({ className = '', onExplore }: HeroProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
        <ParticlesContainer />
      </div>
      
      <div className="relative text-center px-4 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Magical World of Books
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Creating enchanting stories and activities for children
        </p>
        <button
          onClick={onExplore}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          Explore Books
        </button>
      </div>
    </div>
  );
}