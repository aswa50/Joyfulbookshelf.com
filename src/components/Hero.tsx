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
        <div className="absolute top-20 left-[10%] w-20 md:w-32 h-20 md:h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-[10%] w-20 md:w-32 h-20 md:h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-200 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/2 left-[15%] w-1.5 h-1.5 bg-pink-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-[20%] w-2 h-2 bg-indigo-200 rounded-full animate-float"></div>
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