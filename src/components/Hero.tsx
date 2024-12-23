import React from 'react';

interface HeroProps {
  className?: string;
  onExplore: () => void;
}

export function Hero({ className = '', onExplore }: HeroProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-20 md:w-32 h-20 md:h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-[10%] w-20 md:w-32 h-20 md:h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-200 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/2 left-[15%] w-1.5 h-1.5 bg-pink-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-[20%] w-2 h-2 bg-indigo-200 rounded-full animate-float"></div>
        
        {Array.from({ length: window.innerWidth < 768 ? 4 : 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <div className="text-center relative pt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent py-2 mb-4">
              Magical World of Books ✨
            </h1>
            <p className="inline-block text-base sm:text-lg md:text-xl lg:text-2xl mb-6 animate-fade-in-up bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent px-4" style={{ animationDelay: '0.2s' }}>
              Creating enchanting stories that spark imagination and inspire young minds
            </p>
            <div className="flex justify-center gap-4 md:gap-8 mb-6">
              <div className="text-center animate-fade-in-up hover-lift" style={{ animationDelay: '0.4s' }}>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  20+ Books
                </div>
              </div>
            </div>
            <button
              onClick={onExplore}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up animate-pulse-glow"
              style={{ animationDelay: '0.8s' }}
            >
              Explore Books ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}