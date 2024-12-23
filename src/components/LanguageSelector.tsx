import React from 'react';

interface LanguageSelectorProps {
  selectedLanguage: 'English' | 'German';
  onLanguageChange: (language: 'English' | 'German') => void;
}

export function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 p-1 rounded-full shadow-lg hover:shadow-xl transition-all">
      <div className="bg-white rounded-full p-1 relative">
        {/* Sliding background */}
        <div
          className={`absolute inset-y-1 w-1/2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ${
            selectedLanguage === 'German' ? 'translate-x-full' : 'translate-x-0'
          }`}
        >
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-float opacity-50"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-float-delay opacity-50"></div>
          </div>
        </div>

        {/* Language buttons */}
        <div className="relative flex">
          <button
            onClick={() => onLanguageChange('English')}
            className={`px-4 py-1.5 rounded-full font-medium transition-colors relative z-10 ${
              selectedLanguage === 'English' ? 'text-white' : 'text-blue-800 hover:text-blue-600'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg animate-float">🇺🇸</span>
              <span className="font-semibold">English</span>
            </span>
          </button>
          <button
            onClick={() => onLanguageChange('German')}
            className={`px-4 py-1.5 rounded-full font-medium transition-colors relative z-10 ${
              selectedLanguage === 'German' ? 'text-white' : 'text-blue-800 hover:text-blue-600'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg animate-float">🇩🇪</span>
              <span className="font-semibold">German</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}