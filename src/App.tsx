import React, { useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { BookList } from './components/BookList';
import { CategoryFilter } from './components/CategoryFilter';
import { LanguageSelector } from './components/LanguageSelector';
import { Navbar } from './components/Navbar';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'German'>('English');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Story Books' | 'Activity Books' | 'Printables'>('All');
  const [isListView, setIsListView] = useState(false);
  const booksRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    booksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navbar 
        isListView={isListView}
        onViewChange={setIsListView}
      />
      
      <main>
        <Hero onExplore={handleExplore} className="py-16" />

        <div ref={booksRef} className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
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

      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 mt-12">
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