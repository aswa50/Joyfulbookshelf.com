import React from 'react';
import { LayoutGrid, LayoutList } from 'lucide-react';

interface NavbarProps {
  isListView: boolean;
  onViewChange: (isListView: boolean) => void;
}

export function Navbar({ isListView, onViewChange }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-900">AK Publications</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onViewChange(!isListView)}
              className="p-2 rounded-lg hover:bg-blue-50 transition-smooth hover-lift group relative"
              title={isListView ? "Switch to Grid View" : "Switch to List View"}
            >
              {isListView ? (
                <LayoutGrid className="w-6 h-6 text-blue-600" />
              ) : (
                <LayoutList className="w-6 h-6 text-blue-600" />
              )}
              <span className="absolute -bottom-8 right-0 text-xs bg-white/90 text-blue-600 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm whitespace-nowrap">
                {isListView ? "Switch to grid" : "Switch to list"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
