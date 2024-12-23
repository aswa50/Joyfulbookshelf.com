import React from 'react';

interface CategoryFilterProps {
  selectedCategory: 'All' | 'Story Books' | 'Activity Books' | 'Printables';
  onCategoryChange: (category: 'All' | 'Story Books' | 'Activity Books' | 'Printables') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = ['All', 'Story Books', 'Activity Books', 'Printables'] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full font-medium transition-smooth hover-lift animate-fade-in-up ${
            selectedCategory === category
              ? 'bg-blue-600 text-white shadow-md transform scale-105 animate-pulse-glow'
              : 'bg-white text-blue-800 hover:bg-blue-50 hover:shadow-md'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {category} {
            category === 'Story Books' ? '📚' :
            category === 'Activity Books' ? '✏️' :
            category === 'Printables' ? '📄' :
            '⭐'
          }
        </button>
      ))}
    </div>
  );
} 