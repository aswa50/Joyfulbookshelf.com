import React, { useState, useRef } from 'react';
import { Hero } from './components/Hero';
import { BookList } from './components/BookList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CategoryFilter } from './components/CategoryFilter';
import { LanguageSelector } from './components/LanguageSelector';
import { CookieConsent } from './components/CookieConsent';

function App() {
  const [isListView, setIsListView] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'German'>('English');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Story Books' | 'Activity Books' | 'Printables'>('All');
  const bookListRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    bookListRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar isListView={isListView} onViewChange={setIsListView} />
      <Hero className="min-h-[55vh] pt-16" onExplore={handleExplore} />
      <div ref={bookListRef} className="container mx-auto px-4 -mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <div className="flex items-center gap-3">
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />
          </div>
        </div>
        <BookList 
          isListView={isListView} 
          language={selectedLanguage}
          category={selectedCategory}
        />
      </div>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;