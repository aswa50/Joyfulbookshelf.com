import React from 'react';
import { LayoutGrid, LayoutList } from 'lucide-react';

interface NavbarProps {
  isListView: boolean;
  onViewChange: (isListView: boolean) => void;
}

export function Navbar({ isListView, onViewChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 shadow-lg border-b border-white/10">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2 pl-1">
            <img 
              src="/books/logo.png" 
              alt="AK Publications Logo" 
              className="h-7 w-auto"
            />
            <h1 className="text-base font-bold text-white/90 hover:text-white transition-colors">AK Publications</h1>
          </div>
          <div className="flex items-center gap-4 pr-3">
            <button
              onClick={() => onViewChange(!isListView)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5 group relative"
              title={isListView ? "Switch to Grid View" : "Switch to List View"}
            >
              {isListView ? (
                <LayoutGrid className="w-5 h-5 text-white/90" />
              ) : (
                <LayoutList className="w-5 h-5 text-white/90" />
              )}
              <span className="absolute -bottom-8 right-0 text-xs bg-white/90 text-purple-900 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg whitespace-nowrap">
                {isListView ? "Switch to grid" : "Switch to list"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
