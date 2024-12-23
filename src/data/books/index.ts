import { en } from './en';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';
import { it } from './it';
import { Language } from '../../types';

const booksByLanguage = {
  en,
  de,
  fr,
  es,
  it,
};

export const getBooks = (language: Language) => booksByLanguage[language];