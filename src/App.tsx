import React, { useRef, useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { BookList } from './components/BookList';
import { CategoryFilter } from './components/CategoryFilter';
import { LanguageSelector } from './components/LanguageSelector';
import { Navbar } from './components/Navbar';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'German'>('English');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Story Books' | 'Activity Books' | 'Printables'>('All');
  const [isListView, setIsListView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const booksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading state for smoother initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleExplore = () => {
    booksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-blue-600 font-medium">Loading magical books...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navbar 
        isListView={isListView}
        onViewChange={setIsListView}
      />
      
      <main>
        <Hero onExplore={handleExplore} className="py-8 md:py-16" />

        <div ref={booksRef} className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <div className="flex items-center gap-4">
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={setSelectedLanguage}
              />
            </div>
          </div>

          <BookList
            language={selectedLanguage}
            category={selectedCategory}
            isListView={isListView}
          />
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 md:py-8 mt-8 md:mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-bold">AK Publications</p>
          <p className="text-white/90 mt-2">Making learning fun and magical! ✨</p>
          <p className="text-white/80 mt-3">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;