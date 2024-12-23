import React from 'react';

interface LanguageSelectorProps {
  selectedLanguage: 'English' | 'German';
  onLanguageChange: (language: 'English' | 'German') => void;
}

export function LanguageSelector({
  selectedLanguage,
  onLanguageChange
}: LanguageSelectorProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onLanguageChange('English')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-w-[90px] ${
          selectedLanguage === 'English'
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        English
      </button>
      <button
        onClick={() => onLanguageChange('German')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-w-[90px] ${
          selectedLanguage === 'German'
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        German
      </button>
    </div>
  );
}