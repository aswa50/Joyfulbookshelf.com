export interface Book {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  ageRange: string;
  amazonUrl: string;
}

export type Language = 'en' | 'de' | 'fr' | 'es' | 'it';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}